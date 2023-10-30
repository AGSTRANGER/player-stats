import {
  calculateTotalPlayTime,
  getWinsAndLossesByPlayer,
  getGamesWonByPlayer,
} from "../../helpers/playerHelpers";
import { players, matches } from "../sampleData";

test("calculateTotalPlayTime calculates correctly", () => {
  const player = players[0];
  const totalPlayTime = calculateTotalPlayTime(player, matches);
  expect(totalPlayTime).toBe("3 hours 0 minutes");
});

test("getWinsAndLossesByPlayer calculates correctly", () => {
  const player = players[0];
  const { wins, losses } = getWinsAndLossesByPlayer(player, matches);
  expect(wins).toBe(1);
  expect(losses).toBe(1);
});

test("getGamesWonByPlayer returns correct matches", () => {
  const player = players[0];
  const gamesWon = getGamesWonByPlayer(player, matches);
  expect(gamesWon).toEqual([matches[0]]);
});
