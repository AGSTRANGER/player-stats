import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { players, matches } from "../sampleData";
import Players from "../../components/Players/Players";
import { LOAD_PLAYERS } from "../../GraphQL/PlayerQueries";
import { LOAD_MATCHES } from "../../GraphQL/MatchQueries";

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
  // expect(await screen.findByText("Whatever")).toBeInTheDocument();

  // Assertion 1: Check if the player components are rendered
  const playerComponents = screen.getAllByTestId("player-component");
  expect(playerComponents).toHaveLength(players.length);

  // Assertion 2: Check if player details are visible
  const firstPlayer = players[0];
  const playerName = `${firstPlayer.firstname} ${firstPlayer.lastname}`;
  expect(screen.getByText(playerName)).toBeInTheDocument();

  // You can add similar assertions for other player details.

  // Assertion 3: Check if the modal is opened when clicking on a player
  fireEvent.click(playerComponents[0]);
  const modalTitle = await screen.findByText("Matches won by this player");
  expect(modalTitle).toBeInTheDocument();

  // // Assertion 4: Check if the modal is closed when clicking the modal close button
  fireEvent.click(screen.getByText("Close"));
  const modalClosed = screen.queryByText("Matches won by this player");
  expect(modalClosed).not.toBeInTheDocument();
});
