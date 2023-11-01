import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Match } from "../../types";

interface MatchesState {
  matches: Match[];
}

const initialState: MatchesState = {
  matches: [],
};

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<Match[]>) => {
      state.matches = action.payload;
    },
  },
});

export const { setMatches } = matchesSlice.actions;
export default matchesSlice.reducer;
