import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    clickValue: [{
        id: 1,
        Title: 'IT ENDS WITH US',
        Text: 'A book writen by Collen Hoover.this is very romentic book.',
        color: 'white',
        Img: 'white'
    }],

    // supporting states
    id: {
        id: 'abcd1234'
    },
    cardValue: [{
        Text: 'card text'
    }],
    color: {
        color: 'white'
    },
    Img: {
        Img: 'white'
    },
}

export const notesSlice = createSlice({
    name: 'clickToShow',
    initialState,
    reducers: {

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
        },
        chooseColor: (state, action) => {
            state.color = action.payload
        },

        chooseImg: (state, action) => {
            state.Img = action.payload
        },

        idForColor: (state, action) => {
            state.id = action.payload
        },

        colorForNote: (state, action) => {
            state.clickValue.map((each) => {
                if (each.id == action.payload) {
                    each.color = state.color
                }
            })
        },

        deleteNote: (state, action) => {
            state.clickValue = state.clickValue.filter((each) => each.id !== action.payload)

        }
    }
});

export const {
    updateBoth,
    showCard,
    chooseColor,
    colorForNote,
    idForColor,
    chooseImg,
    deleteNote,
} = notesSlice.actions;

export default notesSlice.reducer;
