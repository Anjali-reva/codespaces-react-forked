import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    clickValue: [{
        id: 1,
        Title: 'IT ENDS WITH US',
        Text: 'A book writen by Collen Hoover. it is very romentic book.',
        color: 'white',
        Img: 'white',
        label: [
            { id: '1', name: "", isChecked: false }
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
            //payload has id and noteID and for
            const payload = action.payload

            if (payload.for === 'note') {
                state.clickValue.forEach((eachO) => {
                    if (eachO.id === payload.noteID) {
                        eachO.label = state.label;
                        state.label.map((each) => {
                            each && each.id === payload.id ? each.isChecked = !each.isChecked : each;
                            eachO.label = state.label;
                        })
                        return;
                    }
                });
            } else {
                state.label.map((each) => {
                    each && each.id === payload.id ? each.isChecked = !each.isChecked : each
                })
            }
        },

        // deleteLabels: (state, action) => {
        //     // action.payload has 'id', 'noteID' and 'for' 
        //     const payload = action.payload
        //     if (payload.for == "createNote") {
        //         state.label.map((each) => {
        //             if (each && each.id === payload.id) {
        //                 each.isChecked = !each.isChecked
        //             }
        //         })
        //     }
        //     if (payload.for == 'notes') {
        //         state.clickValue.map((eachO) => {
        //             if (eachO.id = payload.noteID) {
        //                 eachO.label.filter((each) => each.isChecked = false)
        //             }
        //         })
        //     }
        //     console.log(payload);
        // },

        deleteLabels: (state, action) => {
            const payload = action.payload;
            if (payload.for === "createNote") {
                state.label.forEach((each) => {
                    if (each && each.id === payload.id) {
                        each.isChecked = !each.isChecked;
                    }
                });
            }
            if (payload.for === 'notes') {
                state.clickValue.forEach((eachO) => {
                    if (eachO.id === payload.noteID) {
                        eachO.label.forEach((each) => {
                            if (each.id === payload.id) {
                                each.isChecked = !each.isChecked
                            }
                        }
                        );
                        return;
                    }
                });
            }
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
    deleteLabels,
    deleteNote,
    toggleValue,
} = notesSlice.actions;

export default notesSlice.reducer;
