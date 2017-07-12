const toggleTodo = (todo) => ({
  ...todo,
  completed: !todo.completed
})

export default toggleTodo;