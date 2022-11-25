/// <reference types="cypress" />

import { END_POINT, TOKEN } from '../../fixtures/httpConstants'
import { USER_NAME, PASSWORD } from '../../fixtures/itemConstants'


describe('Login to the endpoint given', () => {

  it('tries to log in using valid credentials', () => {
    cy.request({
      method: 'POST',
      url: END_POINT,
      headers: {
        'authority': 'auth.atlassian.com',
        'content-type': 'application/json',
      },
      body: {
        "username": USER_NAME,
        "password": PASSWORD, "state":
        {
          "csrfToken": "e35fc9eb-3223-4e3e-89e2-d3b0005f5c24",
          "anonymousId": "e1c5b05d-abc4-41eb-9e87-268a359cd025"
        },
        "token": TOKEN
      }
    }).then((res) => {

      expect(res.status).to.eql(200)
    })
  })

  it('tries to log in using invalid credentials', () => {
    cy.request({
      method: 'POST',
      url: END_POINT,
      failOnStatusCode: false,
      headers: {
        'authority': 'auth.atlassian.com',
        'content-type': 'application/json',
      },
      body: {
        "username": "INVALID",
        "password": PASSWORD, "state":
        {
          "csrfToken": "e35fc9eb-3223-4e3e-89e2-d3b0005f5c24",
          "anonymousId": "e1c5b05d-abc4-41eb-9e87-268a359cd025"
        },
        "token": TOKEN
      }
    }).then((res) => {

      expect(res.status).to.eql(403)
    })
  })

})