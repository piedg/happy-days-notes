export const ADD_NOTE = "ADD_NOTE";
export const FETCH_NOTE_BY_ID = "FETCH_NOTE_BY_ID";
export const DELETE_NOTE = "DELETE_NOTE"

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    note,
  };
};

export const fetchNoteById = (id) => {
  return {
    type: FETCH_NOTE_BY_ID,
    id
  };
};

export const deleteNoteById = (id) => {
  return {
    type: DELETE_NOTE,
    id
  }
}
