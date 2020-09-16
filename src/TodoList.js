import React, { useContext, memo } from 'react';
import {Paper, List, Divider } from '@material-ui/core';
import TodoItem from './TodoItem';
import { TodosContext } from './context/todos.context';

const TodoList = () => {
  const todos = useContext(TodosContext)
  if(todos.length)  return (
          <Paper>
            <List>
              {todos.map((todo, i) => (
                <>
                 <TodoItem 
                   task={todo.task}
                   id={todo.id}
                   completed={todo.completed}
                   key={todo.id}
                 />
               {i < todos.length - 1 && <Divider/>}
                 </>
              ))}
            </List>
         </Paper>
    ) 
    return null;
};

export default memo(TodoList);