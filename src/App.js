import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log('change detected')
  }

  render() {
    const todoComponents = this.state.todos.map(item => {
      return <TodoItem key={item.id} handleChange={this.handleChange(item.id)} item={item} />;
    });
    return <ul>
      <h1>My TodoList</h1>
    {todoComponents}
    </ul>;
  }
}

export default App;
