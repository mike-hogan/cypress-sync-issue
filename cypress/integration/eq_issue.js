it("does not wait for eq(1)", () => {
    cy.visit('http://localhost:5000')
    cy.get('button').click()
    cy.get('p').eq(0).contains('Paragraph 0')
    cy.get('button').click()
    cy.get('p').eq(1).contains('Paragraph 1')
})