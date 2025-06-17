export const selectAllNotes = (store) => store.notes;

export const selectImportantNotes = (store) => store.notes.filter(({ important }) => important);

export const selectAllNotesCount = (store) => store.notes.length;

export const selectImportantNotesCount = (store) =>
  store.notes.filter(({ important }) => important).length;
