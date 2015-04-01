var React = require("react"),
    TodoItem = require("./TodoItem")

var TodoList = React.createClass({
  render: function() {
    return (
      <div className="todo-list">
        <TodoItem text="buy milk" completed="false" />
        <TodoItem text="buy eggs" completed="false" />
      </div>
    );
  }
});


module.exports = TodoList