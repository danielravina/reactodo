var React = require("react")

var InputBox = React.createClass({

  componentDidMount: function () {
    React.findDOMNode(this.refs.text).focus()
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if(text.length == "") {
      return;
    }

    this.props.onTodoAdd({ text: text, completed: false, id: (Math.floor( Math.random()*1000) + 1) })
    React.findDOMNode(this.refs.text).value = '';
    return;
  },

  render: function() {
    return (
      <form className="inputBox" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Do What" ref="text"/>
      </form>
    );
  }
});

module.exports = InputBox;