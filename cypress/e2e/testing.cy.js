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

  it("login", () => {
    cy.get(":nth-child(3) > .container").should("not.exist");
    cy.get(".log").should("exist");
    cy.get(".row").should("exist");
  });

  it("invalid login", () => {
    cy.get(".btn").click();
    cy.get("#inputEmail").type("admin@gmail.com");
    cy.get("#inputPassword").type("error");
    cy.get(".btn").click();
    cy.get(".alert").should("be.exist");
  });

  it("create matter and commission", () => {
    cy.get(".row > :nth-child(4)").click();
    cy.get(".row > :nth-child(1)").click();
    cy.get("#inputName").type("Persistence strategies");
    cy.get(".modal-footer > .btn").click();
    cy.wait(5300);
    cy.get(".banner").click();
    cy.get(".row > :nth-child(5)").click();
    cy.get(".row > :nth-child(1)").click();
    cy.get("#inputYear").type("2023");
    cy.get("#flexRadioDefault1").click();
    cy.get("#inputMatterName").type("Persistence strategies");
    cy.get(".modal-footer > .btn").click();
    cy.url().should("equal", "http://localhost:3000/operation-completed");
  });

  it("create teacher and add to a commission", () => {
    cy.get(".row > :nth-child(1)").click();
    cy.get(".row > :nth-child(1)").click();
    cy.get("#inputFirstname").type("Ivan");
    cy.get("#inputLastname").type("Dominikow");
    cy.get("#inputEmail").type("ivan@gmail.com");
    cy.get("#inputPassword").type("funciona");
    cy.get(".modal-footer > .btn").click();
    cy.wait(5300);
    cy.get(".banner").click();
    cy.get(".row > :nth-child(5)").click();
    cy.get("tbody > :nth-child(3) > :nth-child(1) > a").click();
    cy.get(":nth-child(2) > :nth-child(1) > .btn").click();
    cy.get(
      "#Teacher > .table-responsive-md > .table > tbody > :nth-child(3) > .data-list > .add-button"
    ).click();
    cy.wait(500);
    cy.get(".col-md-2 > .btn").should("exist");
    cy.get(".col-md-2 > .btn").click();
    cy.get("#teacher > .table-responsive-md > .table").should("exist");
  });

  it("create student, create group and add student to the group", () => {
    cy.get(".row > :nth-child(2)").click();
    cy.get(".row > :nth-child(1)").click();
    cy.get("#inputFirstname").type("Franco");
    cy.get("#inputLastname").type("Garcino Ruiz");
    cy.get("#inputEmail").type("franco@gmail.com");
    cy.get("#inputPassword").type("funciona");
    cy.get(".modal-footer > .btn").click();
    cy.wait(5300);
    cy.get(".banner").click();
    cy.get(".row > :nth-child(3)").click();
    cy.get(".row > :nth-child(1)").click();
    cy.get("#inputName").type("Grupo G");
    cy.get("#InputStudentOne").type("lucas@gmail.com");
    cy.get("#InputProjectName").type("A Project");
    cy.get(".modal-footer > .btn").click();
    cy.wait(5300);
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a").click();
    cy.get(":nth-child(4) > :nth-child(1) > .btn").click();
    cy.wait(500);
    cy.get(
      "#member > .table-responsive-md > .table > tbody > :nth-child(2) > .data-list"
    ).should("not.exist");
    cy.get(":nth-child(1) > :nth-child(1) > .btn").click();
    cy.get(
      "#Student > .table-responsive-md > .table > tbody > :nth-child(3) > .data-list > .add-button"
    ).click();
    cy.wait(500);
    cy.get(":nth-child(4) > :nth-child(1) > .btn").click();
    cy.get(
      "#member > .table-responsive-md > .table > tbody > :nth-child(2) > .data-list"
    ).should("exist");
  });

  it("add repository", () => {
    cy.get(".row > :nth-child(5)").click();
    cy.get(":nth-child(2) > :nth-child(1) > a").click();
    cy.get(":nth-child(3) > .btn").click();
    cy.get(
      "#group > .table-responsive-md > .table > tbody > tr > .data-list > .text"
    ).click();
    cy.get(":nth-child(4) > :nth-child(2) > .btn").click();
    cy.get(
      "#project > .table-responsive-md > .table > tbody > tr > td > a"
    ).click();
    cy.get(".row-cols-1 > :nth-child(3)").click();
    cy.get("#inputName").type("unq-pds-app-university-api");
    cy.get(".modal-footer > .btn").click();
    cy.wait(5300);
    cy.url().should("equal", "http://localhost:3000/operation-completed");
  });

  it("add comentary", () => {
    cy.get(".row > :nth-child(5)").click();
    cy.get(":nth-child(2) > :nth-child(1) > a").click();
    cy.get(":nth-child(3) > .btn").click();
    cy.get(
      "#group > .table-responsive-md > .table > tbody > tr > .data-list > .text"
    ).click();
    cy.get(":nth-child(4) > :nth-child(2) > .btn").click();
    cy.get(
      "#project > .table-responsive-md > .table > tbody > tr > td > a"
    ).click();
    cy.get(".col-md-2 > .btn").click();
    cy.get(":nth-child(1) > td > a").click();
    cy.get(".row-cols-1 > :nth-child(3)").click();
    cy.get("#inputComment").type("Agrego comentarios a repositorio");
    cy.get(".modal-footer > .btn").click();
    cy.wait(5500);
    cy.get(":nth-child(5) > .btn").should("exist");
    cy.get(":nth-child(5) > .btn").click();
    cy.get("#comments > .TableData").should("exist");
  });
});
