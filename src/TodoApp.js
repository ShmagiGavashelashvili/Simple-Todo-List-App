import React  from 'react';
import { Paper, AppBar, Toolbar, Grid, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './context/todos.context';
import uuid from 'react-uuid';

const TodoApp = () => {
    return (
      <Paper style={{padding: 0, margin: 0, backgroundColor: '#fafafa', height: '100vh'}} elevation={0}>
          <AppBar color="primary" position='static'>
              <Toolbar>
                    <Typography color='inherit' variant='h5'>
                        Todo APP With React(Hooks, context, reducer)
                    </Typography>
              </Toolbar>
          </AppBar>
          <Grid container justify='center' style={{marginTop: '2rem'}}>
              <Grid item xs={11} md={8} lg={4}>
               <TodosProvider>
                    <TodoForm />
                    <TodoList />
               </TodosProvider>
              </Grid>
          </Grid>
      </Paper>
  )
}

export default TodoApp;