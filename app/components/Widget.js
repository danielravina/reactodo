var React    = require("react"),
    TodoList = require("./TodoList"),
    InputBox = require("./InputBox");

var Widget = React.createClass({
  render: function() {
    return (
      <div className="widget">
      <h1>Todo</h1>
      <InputBox />
      <TodoList />
      </div>
    );
  }
});

React.render(
  <Widget />,
  document.getElementById('widget')
);

module.exports = Widget;