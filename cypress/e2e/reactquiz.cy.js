describe('Learn React Quiz Tests', () => {
    // before(() => {

    // });

    it('Lets Start the Quiz', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.col-lg-8 > .btn').click();
        cy.get('.card > :nth-child(2) > :nth-child(2)').click(); // Click on the Wrong Answer
        cy.get('')
    });
})