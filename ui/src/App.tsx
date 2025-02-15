import NotesList from "components/NotesList";
import NotesStore from "./store/NotesStore";
import useStyles from './styles';

const store = new NotesStore();

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <NotesList store={store} />
    </div>
  );
}

export default App;
