import React from 'react'


class TodoItem extends React.Component {
  handleChange() {
    this.setState({item: Object.assign(this.props.item, { completed: !this.props.item.completed})});
  }
  render() {
    return (
      <li> 
        <input
        onChange={this.handleChange.bind(this)}
        checked={this.props.item.completed} 
        type="checkbox" /> 
        <span>{this.props.item.taskName}</span>
      </li>
    )
  }
}
export default TodoItem