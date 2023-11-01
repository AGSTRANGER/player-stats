import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { players, matches } from "../sampleData";
import Players from "../../components/Players/Players";
import { LOAD_PLAYERS } from "../../GraphQL/PlayerQueries";

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
];

it("renders players without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
        <Players />
      </Provider>
    </MockedProvider>
  );
  expect(await screen.findByText("Whatever")).toBeInTheDocument();
});
