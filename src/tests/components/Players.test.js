import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { players, matches } from "../sampleData";
import Players from "../../components/Players/Players";
import { LOAD_PLAYERS } from "../../GraphQL/PlayerQueries";
import { LOAD_MATCHES } from "../../GraphQL/MatchQueries";
import {
  calculateTotalPlayTime,
  getWinsAndLossesByPlayer,
} from "../../helpers/playerHelpers";

const mockStore = configureStore([]);
const store = mockStore({
  matches: {
    matches: matches,
  },
  players: {
    players: players,
  },
});

const mocks = [
  {
    request: {
      query: LOAD_PLAYERS,
    },
    result: {
      data: players,
    },
  },
  {
    request: {
      query: LOAD_MATCHES,
    },
    result: {
      data: matches,
    },
  },
];

it("renders players without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
        <Players />
      </Provider>
    </MockedProvider>
  );

  // Assertion 1: Check if the player components are rendered
  const playerComponents = screen.getAllByTestId("player-component");
  // Iterate through the player components and check for the presence of specific attributes
  playerComponents.forEach((playerComponent, index) => {
    const player = players[index];
    const playerName = `${player.firstname} ${player.lastname}`;
    const pictureUrl = player.picture.url;

    // Check for the player name
    expect(playerComponent).toHaveTextContent(playerName);

    // Check for the player picture
    const imageElement = playerComponent.querySelector(
      `img[src="${pictureUrl}"]`
    );
    expect(imageElement).toBeInTheDocument();

    // Check for other attributes
    expect(playerComponent).toHaveTextContent(`Sex: ${player.sex}`);
    expect(playerComponent).toHaveTextContent(`Rank: ${player.stats.rank}`);
    expect(playerComponent).toHaveTextContent(`Age: ${player.stats.age}`);
    expect(playerComponent).toHaveTextContent(
      `Weight: ${(player.stats.weight / 1000).toFixed(2)} kg`
    );
    expect(playerComponent).toHaveTextContent(
      `Height: ${(player.stats.height / 100).toFixed(2)} m`
    );
    expect(playerComponent).toHaveTextContent(`Points: ${player.stats.points}`);
    expect(playerComponent).toHaveTextContent(
      `Total play time: ${calculateTotalPlayTime(player, matches)}`
    );
    expect(playerComponent).toHaveTextContent(
      `Wins: ${getWinsAndLossesByPlayer(player, matches).wins}`
    );
    expect(playerComponent).toHaveTextContent(
      `Losses: ${getWinsAndLossesByPlayer(player, matches).losses}`
    );
  });

  // Finally, check if the correct number of player components are rendered
  expect(playerComponents).toHaveLength(players.length);

  // Assertion 3: Check if the modal is opened when clicking on a player
  fireEvent.click(playerComponents[0]);
  const modalTitle = await screen.findByText("Matches won by this player");
  expect(modalTitle).toBeInTheDocument();

  // // Assertion 4: Check if the modal is closed when clicking the modal close button
  fireEvent.click(screen.getByText("Close"));
  const modalClosed = screen.queryByText("Matches won by this player");
  expect(modalClosed).not.toBeInTheDocument();
});
