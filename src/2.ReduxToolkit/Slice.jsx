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

        editColorForNote: (state, action) => {
            state.clickValue.map((each) => { 
                each.id === action.payload ? console.log(each): console.log('not found ')
            })
        }
    }
});

export const { updateBoth, showCard, chooseColor, editColorForNote } = notesSlice.actions;

export default notesSlice.reducer;
