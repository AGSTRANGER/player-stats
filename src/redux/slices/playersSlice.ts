import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from '../../types'; 

interface PlayersState {
  players: Player[];
}

const initialState: PlayersState = {
  players: [],
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<Player[]>) => {
      console.log("🚀 ~ file: playersSlice.ts:17 ~ action:", action)
      console.log("🚀 ~ file: playersSlice.ts:17 ~ setPlayers:", setPlayers)
      state.players = action.payload;
    },
  },
});

export const { setPlayers } = playersSlice.actions;
export default playersSlice.reducer;
