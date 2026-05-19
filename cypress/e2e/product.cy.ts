describe("Product Detail", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("navigates to product detail page", () => {
    cy.get("[data-testid='product-link']").first().click();

    cy.location("pathname").should("include", "/product");

    cy.get("[data-testid='product-detail']").should("exist");

    cy.contains("Add to Cart").should("exist");
  });
});
