import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function EditToDoDialog({
  openDialog,
  dialogHandle,
  toDo,
  editToDo,
}) {
  const [editedText, setEditText] = useState(toDo.text);

  const TextHandle = () => {
    editToDo(toDo.id, editedText);
    dialogHandle();
  };

  return (
    <Dialog
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={dialogHandle}
      aria-describedby='alert-dialog-slide-description'
      fullWidth>
      <DialogTitle>{'Edite sua tarefa'}</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={editedText}
          fullWidth
          onChange={(e) => setEditText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandle}>Cancelar</Button>
        <Button onClick={TextHandle}>Enviar</Button>
      </DialogActions>
    </Dialog>
  );
}
