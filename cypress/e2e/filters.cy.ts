describe("Filters", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("updates URL when category filter changes", () => {
    cy.get("[data-testid='toggle-filters']").click();

    cy.get("[data-testid='category-filter']")
      .find("input")
      .type("Books{enter}");

    cy.wait(500);

    cy.location("search").should("include", "categories");
  });

  it("updates URL when searching", () => {
    cy.get("input[placeholder='Search products...']").type("shirt");

    cy.wait(600);

    cy.location("search").should("include", "title=shirt");
  });

  it("updates URL when price filter changes", () => {
    cy.get("[data-testid='toggle-filters']").click();

    cy.get("[data-testid='price-filter']")
      .find("input")
      .type("$0 - $50{enter}");

    cy.wait(500);

    cy.location("search").should("include", "price_min");
  });

  it("restores filters from URL", () => {
    cy.visit("http://localhost:5173/?title=shirt");

    cy.get("input[placeholder='Search products...']").should(
      "have.value",
      "shirt",
    );
  });

  it("clears all filters", () => {
    cy.get("input[placeholder='Search products...']").type("shirt");

    cy.wait(600);

    cy.contains("Clear").click();

    cy.location("search").should("eq", "");

    cy.get("input[placeholder='Search products...']").should("have.value", "");
  });
});
