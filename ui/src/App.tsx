import './App.scss';
import NotesList from "components/NotesList";
import NotesStore from "./store/NotesStore";

const store = new NotesStore();

function App() {
  return (
    <div className="App">
      <NotesList store={store} />
    </div>
  );
}

export default App;
