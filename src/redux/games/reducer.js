import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
    name: 'games',
    initialState: {
        itemsInGame: null
    },
    reducers: {
        setCurentGame: (state, action) => {
            state.itemsInGame = action.payload
        }

    }
}
)

export const { setCurentGame } = gameSlice.actions;
export default gameSlice.reducer