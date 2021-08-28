export const ADD_NOTE = "ADD_NOTE";
export const FETCH_NOTE_BY_ID = "FETCH_NOTE_BY_ID";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = (note) => ({
  type: ADD_NOTE,
  note,
});

export const fetchNoteById = (id) => ({
  type: FETCH_NOTE_BY_ID,
  id,
});

export const updateNote = (text, update_date) => ({
  type: UPDATE_NOTE,
  update_date,
  text,
});

export const deleteNoteById = (id) => ({
  type: DELETE_NOTE,
  id,
});
