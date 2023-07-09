describe('Learn React Quiz Tests', () => {

    it('Lets Start the Quiz', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.col-lg-8 > .btn').click();
        cy.get('.card > :nth-child(2) > :nth-child(2)').click(); // Click on the Wrong Answer
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
        cy.get('.card > :nth-child(2) > :nth-child(1)').click();
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
        cy.get('.card > :nth-child(2) > :nth-child(1)').click();
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
        cy.get('.card > :nth-child(2) > :nth-child(1)').click();
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
        cy.get('.card > :nth-child(2) > :nth-child(1)').click();
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
        cy.get('.card > :nth-child(2) > :nth-child(1)').click();
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
        cy.get('.card > :nth-child(2) > :nth-child(1)').click();
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
        cy.get('.card > :nth-child(2) > :nth-child(1)').click();
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
        cy.get('.card > :nth-child(2) > :nth-child(1)').click();
        cy.get('#root > section:nth-child(2) > div > div > div > div > button').click();
    });
})