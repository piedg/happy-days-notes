export const ADD_NOTE = "ADD_NOTE";
export const FETCH_NOTE_BY_ID = "FETCH_NOTE_BY_ID";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE"

export const addNote = (note) => ({
  type: ADD_NOTE,
  note,
});

export const fetchNoteById = (id) => ({
  type: FETCH_NOTE_BY_ID,
  id,
});

export const updateNote = (text, id) => ({
  type: UPDATE_NOTE,
  text,
  id
});

export const deleteNoteById = (id) => ({
  type: DELETE_NOTE,
  id,
});

