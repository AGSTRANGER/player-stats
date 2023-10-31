describe("Players Component", () => {
  beforeEach(() => {
    // Visit the page or URL where your Players component is rendered.
    cy.visit("http://localhost:3000");
  });

  it("Opens modal when a player is clicked", () => {
    // Get the player element by index (adjust the index as needed).
    cy.get(".player").eq(0).as("playerElement"); // Select the first player

    // Click on the player element.
    cy.get("@playerElement").click();

    // Check if the modal is open.
    cy.get(".modal").should("be.visible");

    // Optionally, you can add assertions to ensure the content in the modal is correct.
    cy.get(".modal-title").should("contain", "Matches won by this player");
  });
});
