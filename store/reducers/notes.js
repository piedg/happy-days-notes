import {
  ADD_NOTE,
  FETCH_NOTE_BY_ID,
  DELETE_NOTE,
  UPDATE_NOTE,
} from "../actions/handleNotes";

const initialState = {
  notesList: [],
  notesFilteredByDate: [],
  note: {},
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notesList: [...state.notesList, action.note],
        note: state.note,
      };

    case FETCH_NOTE_BY_ID:
      return {
        ...state,
        notesList: [...state.notesList],
        note: state.notesList.filter((el) => el.id === action.id),
      };

    case UPDATE_NOTE:
      noteIndex = state.notesList.findIndex((obj) => obj.id === action.id);
      state.notesList[noteIndex].text = action.text;
      return {
        ...state,
        notesList: [...state.notesList],
        note: state.note,
      };

    case DELETE_NOTE:
      for (let x in state.notesList) {
        if (state.notesList[x].id === action.id) {
          return {
            ...state,
            notesList: state.notesList.filter((el) => el.id !== action.id),
            note: {},
          };
        }
      }

    default:
      return state;
  }
};

export default notes;
