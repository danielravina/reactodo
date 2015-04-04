var React = require("react")

var TodoItem = React.createClass({

  render: function() {

    getInitialState: function () {
        return {
            completed: false
        };
    },

    return (
      <div className="todo-item">
        {this.props.text}
        <br />
        {this.state.completed}
      </div>
    );
  }
});

module.exports = TodoItem