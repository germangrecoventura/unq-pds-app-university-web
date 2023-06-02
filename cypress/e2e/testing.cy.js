describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#inputEmail").type("admin@gmail.com");
    cy.get("#inputPassword").type("funciona");
    cy.get(".btn").click();
  });

  Cypress.on("uncaught:exception", (err, runnable, promise) => {
    // when the exception originated from an unhandled promise
    // rejection, the promise is provided as a third argument
    // you can turn off failing the test in this case
    if (promise) {
      return false;
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  });

  it("log", () => {
    cy.getCookie("jwt").should("exist");
    cy.get(".log").should("exist");
    cy.get(".row > :nth-child(1)").should("exist");
    cy.get(".row > :nth-child(2)").should("exist");
    cy.get(".row > :nth-child(3)").should("exist");
    cy.get(".row > :nth-child(4)").should("exist");
    cy.get(".row > :nth-child(5)").should("exist");
    cy.get('.btn').click()
    cy.getCookie("jwt").should("not.exist");
  });
});
