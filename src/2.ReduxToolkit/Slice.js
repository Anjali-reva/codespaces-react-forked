import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    clickValue: [{ id: 1, Text: 'firstTest' }],
}

export const notesSlice = createSlice({
    name: 'clickToShow',
    initialState,
    reducers: {
        updateClickValue: (state, action) => {
            const note = { id: nanoid(), Text: action.payload }
            state.clickValue.push(note);
        }
    }
});

export const { updateClickValue } = notesSlice.actions;

export default notesSlice.reducer;
