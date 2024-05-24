import React from 'react';
import {NoteType} from '../types';
import Note from './Note';

type NotesProps = {
  notes: NoteType[];
  setNotesCount: React.Dispatch<React.SetStateAction<number>>;
}

function Notes({ notes, setNotesCount }: NotesProps) {
  return (
    <div className="notes">
      {notes.length === 0 ?
        <p>No Data!</p> :
        notes.map(note => <Note key={note.id} note={note} onDelete={setNotesCount} />)
      }
    </div>
  );
}

export default Notes;
