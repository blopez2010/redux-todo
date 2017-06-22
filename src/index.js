import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import todoApp from './store/todoReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import Todo from './components/todo';
import TodoList from './components/todoList';
import VisibleTodoList from './components/visibleTodoList';
import Link from './components/link';
import FilterLink from './components/filterLink';
import Footer from './components/footer';
import AddTodo from './components/addTodo';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);