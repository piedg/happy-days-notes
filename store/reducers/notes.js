import { ADD_NOTE } from "../actions/handleNotes";
import { FETCH_NOTE_BY_ID } from "../actions/handleNotes";
import { DELETE_NOTE } from "../actions/handleNotes";

const initialState = { 
  notesList: [],
  note: {},
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notesList: [...state.notesList, action.note],
      };

    case FETCH_NOTE_BY_ID:
      return {
        ...state,
        note: state.notesList.filter((el) => el.id === action.id),
      };        

    case DELETE_NOTE:
      for (var i = 0; i < state.notesList.length; i++) {
        if (state.notesList[i].id === action.id) {
          return {
            ...state,
            notesList: state.notesList.filter((el) => el.id !== action.id),
            note: {}
          };
        }
      }
  }

  return state;
};

export default notes;
