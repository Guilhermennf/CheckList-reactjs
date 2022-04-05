import React, { useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';

export default function Form({ AddToDo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const toDoCreate = (text) => {
    const toDoObject = { text: text, id: id };
    setId(id + 1);
    AddToDo(toDoObject);
    document.getElementById('outlined-basic').value = null;
  };

  return (
    <Paper style={{ padding: '1em' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id='outlined-basic'
          label='Tarefa'
          variant='outlined'
          onChange={(e) => setText(e.target.value)}
          fullWidth
          placeholder='Digite sua tarefa'
        />
        <Button
          style={{ marginLeft: '1em' }}
          variant='text'
          onClick={() => toDoCreate(text)}>
          Adicionar
        </Button>
      </div>
    </Paper>
  );
}
