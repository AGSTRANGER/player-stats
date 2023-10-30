import { setPlayers, playersSlice } from "../../redux/slices/playersSlice";
import { players } from "../sampleData";

describe("players reducer", () => {
  const initialState = { players: [] };

  it("should set players", () => {
    const action = setPlayers(players);
    const newState = playersSlice.reducer(initialState, action);
    expect(newState.players).toEqual(players);
  });
});

// const { setPlayers, playersSlice } = require("../../redux/slices/playersSlice");
// const { players } = require("../sampleData");

// describe("players reducer", () => {
//   const initialState = { players: [] };

//   it("should set players", () => {
//     const action = setPlayers(players);
//     const newState = playersSlice.reducer(initialState, action);
//     expect(newState.players).toEqual(players);
//   });
// });
