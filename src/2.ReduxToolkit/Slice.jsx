import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    clickValue: [{
        id: 1,
        Title: 'IT ENDS WITH US',
        Text: 'A book writen by Collen Hoover. it is very romentic book.',
        color: 'white',
        Img: 'white',
        label: [
            { id: 1, name: "", isChecked: true }
        ]
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
    label: [
        { id: 1, name: "", isChecked: false }
    ],
    toggleValue: [
        { toggleValue: false }
    ]
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

        colorForNote: (state, action) => {
            state.clickValue.map((each) => {
                if (each.id == action.payload) {
                    each.color = state.color
                }
            })
        },

        chooseImg: (state, action) => {
            state.Img = action.payload
        },

        ImgForNote: (state, action) => {
            state.clickValue.map((each) => {
                if (each.id == action.payload) {
                    each.Img = state.Img
                }
            })
        },

        idForColor: (state, action) => {
            state.id = action.payload
        },

        chooseTitleAndText: (state, action) => {
            // payload = { id, Title, Text }
            const payload = action.payload

            state.clickValue.map((each) => {
                if (each.id == payload.id) {
                    each.Title = payload.Title
                    each.Text = payload.Text
                }
            })
        },
        toggleValue: (state, action) => {
            const payload = action.payload
            state.toggleValue = payload
        },

        addLabel: (state, action) => {

            const payload = action.payload
            state.label.push(payload)
            console.log(payload);
        },

        handleCheckboxChange: (state, action) => {
            const id = action.payload
            state.label.map((each) => {
                each.id === id ? each.isChecked = !each.isChecked : each
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
    ImgForNote,
    chooseTitleAndText,
    addLabel,
    handleCheckboxChange,
    deleteNote,
    toggleValue,
} = notesSlice.actions;

export default notesSlice.reducer;
