describe('math app test by marc', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('has the correct meta title and page titles', () => {
        //verify page titles for SEO
        cy.title().should('eq', 'MathTutorApp')
        cy.contains('Math Challenge').should('be.visible')
        cy.contains('Addition').should('be.visible')
    })
    it('verify the tooltip displays with no answer', () => {
        //verify the tooltip displays with no answer entered on click
        cy.get('.mat-button-wrapper').trigger('mouseover')
        cy.get('#cdk-describedby-message-0').contains('Please provide an answer.')
    })
    it('verify wrong answer prompts the incorrect answer message', () => {
        //verify typing 0 gets the proper response
        cy.get('#mat-input-0').type('0')
        cy.get('button').click()
        cy.contains('Sorry, that is not correct. Please try again.').should('be.visible')
        cy.screenshot()
    })
    it('enters a number over 256 characters', () => {
        //verify typing 0 gets the proper response
        cy.get('#mat-input-0').type('012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567')
        cy.get('button').click()
        cy.contains('Sorry, that is not correct. Please try again.').should('be.visible')
    })
    it('verify the correct answer prompts the correct answer message', () => {
        //verify the happy path works. I'm unfamiliar with javascript functions in cypress, so I added a pause to manually do the addition just to see the passing message. This is a good example of when I would reach out to pair with another engineer.
        cy.get('[data-cy=xValue]').should('be.visible')
        cy.get('[data-cy=yValue]').should('be.visible')
        cy.pause()
        cy.contains('That\'s right! Try another one.').should('be.visible')
        cy.screenshot();
    })
})
