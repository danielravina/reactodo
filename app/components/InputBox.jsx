var React = require("react")

var InputBox = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = React.findDOMNode(this.refs.text).value.trim();
    console.log(text)
    // TODO: send request to the server
    this.props.onTodoAdd({ text: text, completed: false })
    React.findDOMNode(this.refs.text).value = '';
    return;
  },

  render: function() {
    return (
      <form className="inputbox" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Do What" ref="text"/>
        <button>Add</button>
      </form>
    );
  }
});

module.exports = InputBox;