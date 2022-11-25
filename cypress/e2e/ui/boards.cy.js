/// <reference types="cypress" />

import * as boardsPOM from './boardsPOM'
import { BASE_URL } from '../../fixtures/httpConstants'
import { USER_NAME, PASSWORD, shortWait } from '../../fixtures/itemConstants'

// Cypress.on('uncaught:exception', () => false)

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Log in to trello', () => {

  
  

  it('goes to Url', () => {
    cy.visit(BASE_URL)
    cy.wait(5000)
  })

  it('Add credentials to login form', () => {
    cy.get(boardsPOM.LOG_IN).click()
    cy.get(boardsPOM.USER_EMAIL).type(USER_NAME, { timeout: 3000 })
    cy.get(boardsPOM.CONTINUE_LOGIN).click({ timeout: 3000})
    cy.wait(5000)
    cy.get(boardsPOM.USER_PASSWORD).should("be.visible")
    cy.get(boardsPOM.USER_PASSWORD).type(PASSWORD)
    cy.get(boardsPOM.CONTINUE_LOGIN_AFTER_PASSWORD).click()
    cy.wait(5000)
    
  })

  // it('continues', () => {
    
  //   shortWait()
  //   cy.get(boardsPOM.PASSWORD).type(PASSWORD)
  //   cy.get(boardsPOM.CONTINUE_LOGIN).click()
  // })

  // it('goes to homepage', () => {
  //   cy.visit("https://trello.com/u/vigankrasniqi1/boards")
  // })

  
})