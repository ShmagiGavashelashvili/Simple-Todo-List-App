import React, { createContext } from 'react';
import { useLocalStorageReducer_1 } from '../Hooks/useLocalStorageReducer';
import todosReducer from '../reducers/todos.reducer';

const defaultTodos = [
    {id: 1, task: 'some todo one', completed: false},
    {id: 2, task: 'some todo second', completed: true},
]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props){
    const [todos, dispatch ] = useLocalStorageReducer_1("todos", defaultTodos, todosReducer);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
               {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
};