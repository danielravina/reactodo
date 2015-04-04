var React = require("react")

var TodoItem = React.createClass({
  render: function() {
    return (
      <div className="todo-item">
        {this.props.text}
        <br />
        {this.props.children}
      </div>
    );
  }
});

module.exports = TodoItem