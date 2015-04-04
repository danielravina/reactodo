var React = require("react"),
    TodoItem = require("./TodoItem")

var TodoList = React.createClass({
  render: function() {
    var items = this.props.data.map(function (item) {
      return (
       <TodoItem author={item.completed}>
         {item.text}
       </TodoItem>
      );
    });
    return (
      <div className="todo-list">
        {items}
      </div>
    );
  }
});


module.exports = TodoList