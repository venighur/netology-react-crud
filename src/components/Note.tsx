import React from 'react';
import { NoteType } from '../types';

type NoteProps = {
  note: NoteType;
  onDelete: React.Dispatch<React.SetStateAction<number>>;
}

function Note({ note, onDelete }: NoteProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;
    fetch(`http://localhost:7070/notes/${el.id}`, {
      method: 'DELETE',
    })
    .then(() => onDelete(prevState => prevState - 1))
    .catch(e => {
      console.log(e);
    })
  }

  return (
    <div className="note">
      <div className="close" id={note.id} onClick={handleClick}>&#10006;</div>
      {note.content}
    </div>
  );
}

export default Note;
