var React    = require('react/addons'),
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
      <div className="todoList">
        {items}
      </div>
    );
  }
});

module.exports = TodoList