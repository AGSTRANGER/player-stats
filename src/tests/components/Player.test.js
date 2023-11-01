import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import PlayerComponent from "../../components/Players/Player";
import configureStore from "redux-mock-store";
import { players, matches } from "../sampleData";
import {
  calculateTotalPlayTime,
  getWinsAndLossesByPlayer,
} from "../../helpers/playerHelpers";

const mockStore = configureStore([]);
const store = mockStore({
  matches: {
    matches: matches,
  },
});

describe("Player", () => {
  it("should render player component without errors", () => {
    render(
      <Provider store={store}>
        <PlayerComponent player={players[0]} onClick={() => {}} />
      </Provider>
    );
    const playerComponent = screen.getByTestId("player-component");

    const player = players[0];
    const playerName = `${player.firstname} ${player.lastname}`;
    const pictureUrl = player.picture.url;

    // Check for the player picture
    const imageElement = playerComponent.querySelector(
      `img[src="${pictureUrl}"]`
    );
    expect(imageElement).toBeInTheDocument();

    // Check for other attributes
    expect(playerComponent).toHaveTextContent(playerName);
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
});
