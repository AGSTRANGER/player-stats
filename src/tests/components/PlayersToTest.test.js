import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { players } from "../sampleData";
import { Players } from "../../components/Players/PlayersToTest";
import { LOAD_PLAYERS } from "../../GraphQL/PlayerQueries";

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
      <Players />
    </MockedProvider>
  );
  expect(await screen.findByText("Whatever")).toBeInTheDocument();
});
