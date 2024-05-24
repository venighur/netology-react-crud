import React from 'react';
import Form from './components/Form';
import Notes from './components/Notes';
import { NoteType } from './types';
import './App.css';

function App() {
  const [notes, setNotes] = React.useState<NoteType[]>([]);
  const [notesCount, setNotesCount] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetchData().catch(e => {
      console.log(e);
    });
  }, [notesCount]);


  const fetchData = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:7070/notes');
    const data = await response.json();
    setNotes(data);
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Notes</h2>
        <div className="refresh" onClick={() => fetchData().catch(e => console.log(e))}>&#8634;</div>
      </div>
      {loading ? <div className="loading">Loading...</div> : <Notes notes={notes} setNotesCount={setNotesCount} />}
      <Form setNotesCount={setNotesCount} />
    </div>
  );
}

export default App;
