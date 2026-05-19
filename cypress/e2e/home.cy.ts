describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("loads homepage successfully", () => {
    cy.get("[data-testid='product-card']").should("have.length.greaterThan", 0);

    cy.get("input[placeholder='Search products...']").should("exist");
  });

  it("renders products", () => {
    cy.get("[data-testid='product-card']")
      .should("exist")
      .and("have.length.greaterThan", 0);
  });
});
