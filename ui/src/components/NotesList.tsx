import { observer } from 'mobx-react-lite';
import NotesStore from 'store/NotesStore';
import Note from './Note';
import AddNoteForm from './AddNoteForm';

const NotesList = observer(({ store }: { store: NotesStore }) => {
  return (
    <div className="NotesList">
      <AddNoteForm postNote={store.postNote} />
      {store.notes.length > 0 &&
        store.notes.map(note => {
          return (
            <Note
              key={note.id}
              note={note}
              updateNote={store.updateNote}
              deleteNote={store.deleteNote}
            />
          );
        })}
    </div>
  );
});

export default NotesList;
