import { Title } from '@mui/icons-material';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    clickValue: [{
        id: 1,
        Title: 'IT ENDS WITH US',
        Text: 'A book writen by Collen Hoover.this is very romentic book.'
    }],
    cardValue: [{
        Text: 'card text'
    }]

}

export const notesSlice = createSlice({
    name: 'clickToShow',
    initialState,
    reducers: {
        updateClickValue: (state, action) => {
            const Text = action.payload
        },

        updateTitle: (state, action) => {
            // const Title = { Text: action.payload }
            const Title753 = action.payload

        },

        updateBoth: (state, action) => {
            const note = action.payload
            state.clickValue.push(note)

        },
        showCard: (state, action) => {
            state.clickValue.map((note) => {
                if (note.id == action.payload) {
                    state.cardValue = note.Text
                }
            })
        }
    }
});

export const { updateBoth, showCard } = notesSlice.actions;

export default notesSlice.reducer;
