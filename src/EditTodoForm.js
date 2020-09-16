import React, { useContext } from 'react';
import { TextField, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import useInputState from './Hooks/useInputState';
import { DispatchContext } from './context/todos.context';

const EditTodoForm = ({ task, cancelEdit, id }) => {
  const dispatch  = useContext(DispatchContext);
  const [value, handleChange, reset ] = useInputState(task)
    return( 
        <form style={{marginLeft: '1rem', width: '50%'}} onSubmit={e => {
           e.preventDefault();
           dispatch({type: "EDIT", id :id, task: value});
           cancelEdit();
           reset();
        }}>
           <TextField 
             value={value} 
             onChange={handleChange} 
             fullWidth margin='normal' 
             autoFocus
             label='Edit Todo'  
             />
             <ListItemSecondaryAction>
                <IconButton onClick={cancelEdit}>
                  cancel
                </IconButton>
             </ListItemSecondaryAction>
        </form>
    )
}

export default EditTodoForm;