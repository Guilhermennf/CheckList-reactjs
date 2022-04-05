import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from '../components/Form';
import ToDoItem from '../components/ToDoItem';

export default function Home() {
  const [toDos, setToDos] = useState([]);
  const AddToDo = (toDo) => {
    setToDos([...toDos, toDo]);
  };

  const deleteToDo = (id) => {
    let filtered = toDos.filter((toDo) => toDo.id !== id);
    setToDos(filtered);
  };

  const editToDo = (id, editedText) => {
    let toDosArray = toDos;
    for (var i in toDosArray) {
      if (toDosArray[i].id === id) {
        toDosArray[i].text = editedText;
      }
    }

    setToDos(toDosArray);
  };

  return (
    <div>
      <Container maxWidth='xs' style={{ marginTop: '1em' }}>
        <Form AddToDo={AddToDo} />
        <List sx={{ marginTop: '1em' }}>
          {toDos.map((toDo) => (
            <div key={toDo.id} style={{ marginTop: '1em' }}>
              <ToDoItem
                editToDo={editToDo}
                toDo={toDo}
                deleteToDo={deleteToDo}
              />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
}
