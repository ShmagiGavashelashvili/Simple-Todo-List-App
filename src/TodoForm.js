import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';
import { DispatchContext } from './context/todos.context';

const TodoForm = () => {
    const dispatch = useContext(DispatchContext)
    const [value, handleChange, reset ] = useInputState('');
    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: 'ADD', task: value});
                reset();
            }}>
            <TextField  
              autoFocus  
              label='Add New Todo'  
              fullWidth
              onChange={handleChange}
              value={value}
              margin='normal'
            />
            </form>
        </Paper>
    )
}

export default TodoForm;