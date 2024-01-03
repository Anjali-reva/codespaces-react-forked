import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    clickValue: [{ id: 1, Text: 'A book writen by Collen Hoover. this is very romentic book.'}],
}

export const notesSlice = createSlice({
    name: 'clickToShow',
    initialState,
    reducers: {
        updateClickValue: (state, action) => {
            const note = { id: nanoid(), Text: action.payload }
            state.clickValue.push(note);
        },
    }
});

export const { updateClickValue } = notesSlice.actions;

export default notesSlice.reducer;
