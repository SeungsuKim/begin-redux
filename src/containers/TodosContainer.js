import React, { Component } from "react";
import { connect } from "react-redux";
import Todos from "components/Todos";
import { TodoActions } from "store/actionCreators";

class TodosContainer extends Component {

  handleChange = (e) => {
    TodoActions.changeInput(e.target.value);
  }

  handeInsert = () => {
    const { input } = this.props;
    TodoActions.insert(input);
    TodoActions.changeInput("");
  }

  handleToggle = (id) => {
    TodoActions.toggle(id);
  }

  handleRemove = (id) => {
    TodoActions.remove(id);
  }

  render() {
    const { handleChange, handeInsert, handleToggle, handleRemove } = this;
    const { input, todos } = this.props;
    return (
      <Todos
        input={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handeInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    );
  }
}

export default connect(
  ({ todo }) => ({
    input: todo.get("input"),
    todos: todo.get("todos")
  })
)(TodosContainer);