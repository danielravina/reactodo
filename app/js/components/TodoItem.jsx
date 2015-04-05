var React = require("react")

var TodoItem = React.createClass({
  getInitialState: function () {
    return {
      completed: false
    };
  },

  handleCompletedChange: function(e) {
    var checked = React.findDOMNode(this.refs.checkbox).checked
    this.setState({completed: checked})
  },


  render: function() {
    console.log("render..")
    return (
      <div className="todoItem">
        <input type="checkbox" onChange={this.handleCompletedChange} ref="checkbox" />
        {this.props.text}
        <span className="right" onClick={this.props.onDestroy}>&#x2717;</span>
        <br />
      </div>
    );
  }
});

module.exports = TodoItem