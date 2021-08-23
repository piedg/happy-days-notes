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
        const newNoteList = {...state.notesList}
        delete newNoteList[action.id]
        return {
          ...state,
          note: state.notesList.filter((el) => el.id !== action.id),
          notesList: newNoteList
        }
  }

  return state;
};

export default notes;
