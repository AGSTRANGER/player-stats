// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// // import { act } from "react-dom/test-utils";
// import { MockedProvider } from "@apollo/client/testing";
// import { GET_PlAYERS } from "../../GraphQL/PlayerQueries";
// import { players } from "../sampleData";
// import Players from "../../components/Players/Players";

// const mocks = [
//   {
//     request: {
//       query: GET_PlAYERS,
//     },
//     result: {
//       data: {
//         players: players,
//       },
//     },
//   },
// ];

// it("renders without error", async () => {
//   render(
//     <MockedProvider mocks={mocks} addTypename={false}>
//       <Players />
//     </MockedProvider>
//   );
//   // await act(async () => {
//   //   // Use act to wait for rendering and async operations
//   //   render(
//   //     <MockedProvider mocks={mocks} addTypename={false}>
//   //       <Players />
//   //     </MockedProvider>
//   //   );
//   // });
//   expect(await screen.findByText("Loading...")).toBeInTheDocument();
// });

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import PlayerComponent from "../../components/Players/Player";
import configureStore from "redux-mock-store";
import { players, matches } from "../sampleData";

const mockStore = configureStore([]);
const store = mockStore({
  matches: {
    matches: matches,
  },
});

describe("Player", () => {
  it("should render player name", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PlayerComponent player={players[0]} onClick={() => {}} />
      </Provider>
    );

    const playerName = `${players[0].firstname} ${players[0].lastname}`;
    expect(getByText(playerName)).toBeInTheDocument();
  });
});
