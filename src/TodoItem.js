import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => {
            this.props.handleChange(this.props.item.id);
          }}
        />
        <span>{this.props.item.taskName}</span>
      </li>
    );
  }
}

export default TodoItem;
