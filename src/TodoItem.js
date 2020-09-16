import React, { useContext} from 'react';
import  DeleteIcon  from '@material-ui/icons/Delete';
import  EditIcon  from '@material-ui/icons/Edit';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import useToggleState from './Hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './context/todos.context';

const TodoItem = ({ task, id, completed }) => {
    const dispatch = useContext(DispatchContext)
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem>
        { isEditing ? <EditTodoForm id={id} task={task} cancelEdit={toggle}/> : <>
               <Checkbox tabIndex={-1} checked={completed} onChange={() => dispatch({type: 'TOGGLE', id: id })}/>
             <ListItemText style={{ textDecoration: completed ? 'line-through': 'none'}}>
                 {task}
             </ListItemText>
             <ListItemSecondaryAction>
                  <IconButton aria-label='Edit' onClick={toggle}>
                      <EditIcon></EditIcon>
                  </IconButton>
                  <IconButton aria-label='Delete' onClick={() => dispatch({type: 'REMOVE', id: id})}>
                      <DeleteIcon></DeleteIcon>
                  </IconButton>
             </ListItemSecondaryAction>
             </> }
        </ListItem>
    )
}

export default TodoItem;