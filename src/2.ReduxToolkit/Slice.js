import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    clickValue: [{ id: 1, Text: 'A book writen by Collen Hoover. this is very romentic book.' }],
    Title: [{ Title: 'IT ENDS WITH US' }],
}

export const notesSlice = createSlice({
    name: 'clickToShow',
    initialState,
    reducers: {
        updateClickValue: (state, action) => {
            const note = { id: nanoid(), Text: action.payload }
            state.clickValue.push(note);
        },
        updateTitle: (state, action) => {
            const Title = { Text: action.payload }
            state.Title.push(Title);
        },
    }
});

export const { updateClickValue, updateTitle } = notesSlice.actions;

export default notesSlice.reducer;
