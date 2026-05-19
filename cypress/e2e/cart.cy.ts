describe("Cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("adds product to cart", () => {
    cy.get("[data-testid='product-link']").first().click();

    cy.get("[data-testid='add-to-cart']").click();

    cy.get("[data-testid='cart-count']").should("contain", "1");
  });
});
