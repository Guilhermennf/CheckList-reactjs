import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { Paper } from '@mui/material';
import EditToDoDialog from './EditToDoDialog';

export default function TodoItem({ toDo, deleteToDo, editToDo }) {
  const [openDialog, setOpenDialog] = useState(false);

  const dialogHandle = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <EditToDoDialog
        editToDo={editToDo}
        openDialog={openDialog}
        dialogHandle={dialogHandle}
        toDo={toDo}
      />
      <Paper>
        <ListItem
          secondaryAction={
            <IconButton
              edge='end'
              aria-label='Remove'
              onClick={() => deleteToDo(toDo.id)}>
              <ClearIcon />
            </IconButton>
          }
          disablePadding>
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge='start' tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText
              primary={toDo.text}
              onClick={() => setOpenDialog(true)}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
