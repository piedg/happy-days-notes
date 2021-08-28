import { ADD_NOTE, FETCH_ALL_NOTES } from "../actions/handleNotes";
import { FETCH_NOTE_BY_ID } from "../actions/handleNotes";
import { DELETE_NOTE } from "../actions/handleNotes";
import { UPDATE_NOTE } from "../actions/handleNotes";

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

    case UPDATE_NOTE:
      return {
        ...state,
        note: { text: action.text },
      };

    case DELETE_NOTE:
      //tramutare in foreach
      for (var i = 0; i < state.notesList.length; i++) {
        if (state.notesList[i].id === action.id) {
          return {
            ...state,
            notesList: state.notesList.filter((el) => el.id !== action.id),
            note: {},
          };
        }
      }
  }

  return state;
};

export default notes;
