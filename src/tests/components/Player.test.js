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
