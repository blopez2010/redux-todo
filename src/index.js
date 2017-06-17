import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import todoApp from './todoReducer';
import { createStore } from 'redux';

const store = createStore(todoApp);

let nextTodoId = 0;
class TodoApp extends Component {
  onButtonClick() {
    store.dispatch({
      type: 'ADD_TODO',
      text: this.input.value,
      id: nextTodoId++
    });
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }}/>
        <button onClick={this.onButtonClick.bind(this)}>Add Todo</button>
        <ul>
          {this.props.todos.map((todo) =>
            <li key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                })
              }}
              style={{
                textDecoration: todo.completed ?
                  'line-through' :
                  'none'
              }}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
};


const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();