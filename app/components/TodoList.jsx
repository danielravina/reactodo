var React = require("react"),
    TodoItem = require("./TodoItem")

var TodoList = React.createClass({
  render: function() {
    var items = this.props.data.map(function (item) {
      return (
       <TodoItem text={item.text}/>
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