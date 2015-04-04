var React = require("react")

var InputBox = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    alert("sweet")
    var text = React.findDOMNode(this.refs.text).value.trim();

    // TODO: send request to the server
    React.findDOMNode(this.refs.text).value = '';
    return;
  },

  render: function() {
    return (
      <form className="inputbox" onSubmit="handleSubmit">
        <input type="text" placeholder="Do What" />
        <button>Add</button>
      </form>
    );
  }
});

module.exports = InputBox;