import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import PlayerComponent from "../../components/Players/Player";
import configureStore from "redux-mock-store";

// Mock your Redux store
const mockStore = configureStore([]);
const store = mockStore({
  matches: {
    matches: [],
  },
  // Add any other parts of your state that are required for the test
});

describe("Player", () => {
  it("should render player name", () => {
    const playerData = {
      id: 1,
      firstname: "John",
      lastname: "Doe",
    };

    const { getByText } = render(
      <Provider store={store}>
        <PlayerComponent player={playerData} onClick={() => {}} />
      </Provider>
    );

    const playerName = `${playerData.firstname} ${playerData.lastname}`;
    expect(getByText(playerName)).toBeInTheDocument();
  });
});
