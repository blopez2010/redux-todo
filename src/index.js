import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import todoApp from './store/todoReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

// Components
import Todo from './components/todo';
import TodoList from './components/todoList';
import VisibleTodoList from './components/visibleTodoList';
import Link from './components/link';
import FilterLink from './components/filterLink';
import Footer from './components/footer';
import AddTodo from './components/addTodo';

// State
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(
  todoApp,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);