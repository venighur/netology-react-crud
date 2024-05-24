import React from 'react';

type FormProps = {
  setNotesCount: React.Dispatch<React.SetStateAction<number>>
}

function Form({ setNotesCount }: FormProps) {
  const [content, setContent] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:7070/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        content,
      })
    })
    .then(() => setNotesCount(prevState => prevState + 1))
    .catch(e => {
      console.log(e);
    });
    setContent('');
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="note">New Note</label>
      <textarea name="note" id="note" onChange={handleChange} value={content} />
      <button type="submit">&#10148;</button>
    </form>
  );
}

export default Form;
