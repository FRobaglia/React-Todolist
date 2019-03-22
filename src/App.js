import React from 'react'
import todosData from './todosData';
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const newTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: newTodos
      }
    })
  }

  render() {
    const todos = todosData.map(todo => {
      return (
        <TodoItem item={todo} handleChange={this.handleChange}/>
      )
    })
    return (
    <ul>
      {todos}
    </ul>
    )
  }
}

export default App