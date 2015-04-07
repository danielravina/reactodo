(function(){

  var React    = require('react/addons'),
      TodoItem = require("./TodoItem");

  var TodoList = React.createClass({


    render: function() {
      var items = this.props.data.map(function (item) {
        return (
          <TodoItem
            text={item.text}
            key={item.id}
            id={item.id}
            completed={item.completed}
            onDestroy={this.props.onDestroy.bind(null, item)}
            onToggle={this.props.onToggle}

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

})();