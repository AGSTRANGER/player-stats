import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player } from '../../types'; 

export interface PlayersState {
  players: Player[];
}

const initialState: PlayersState = {
  players: [],
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<Player[]>) => {
      state.players = action.payload;
    },
  },
});

export const { setPlayers } = playersSlice.actions;
export default playersSlice.reducer;
