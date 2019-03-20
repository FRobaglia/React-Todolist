import React from 'react'


class TodoItem extends React.Component {
  render() {
    return (
      <li> 
        <input 
        onChange={this.props.handleChange} 
        checked={this.props.item.completed} 
        type="checkbox" /> 
        <span>{this.props.item.task}</span>
      </li>
    )
  }
}
export default TodoItem