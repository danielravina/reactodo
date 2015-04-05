var React    = require("react"),
    TodoItem = require("./TodoItem");

var TodoList = React.createClass({


  render: function() {
    var items = this.props.data.map(function (item) {
      return (
        <TodoItem text={item.text}
                  id={item.id}
                  onDestroy={this.props.onDestroy.bind(null, item)}
                  id={item.id}
        />
      );
    }, this);
    return (
      <div className="todo-list">
        {items}
      </div>
    );
  }
});

module.exports = TodoList