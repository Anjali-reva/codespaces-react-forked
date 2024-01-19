import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    clickValue: [{
        id: 1,
        Title: 'IT ENDS WITH US',
        Text: 'A book writen by Collen Hoover.this is very romentic book.',
        color: 'white'
    }],

    // supporting states
    cardValue: [{
        Text: 'card text'
    }],
    color: {
        color: 'white'
    },
    id: {
        id: 'white'
    }
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
        // getting color value from seperated </BackgroundOptions> component, with the help of below fn.  
        chooseColor: (state, action) => {
            state.color = action.payload
            // console.log('booom')
        },

        findingNote: (state, action) => {
            state.clickValue.map((each) => {
                if (each.id == action.payload) {
                    console.log('each from slice: ', each.id)
                    each.color = state.color
                }
                console.log('each from slice: ', each.id)
                
            })
        }
    }
});

export const { updateBoth, showCard, chooseColor, findingNote } = notesSlice.actions;

export default notesSlice.reducer;
