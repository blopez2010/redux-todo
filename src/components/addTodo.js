import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        if (input.value) {
          dispatch(addTodo(input.value))
          input.value = '';
        }
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo;