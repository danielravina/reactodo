var React = require("react")

var TodoItem = React.createClass({

  getInitialState: function () {
    return {
      completed: false
    };
  },

  toggle: function(e) {
    this.setState({completed: e.currentTarget.checked})
  },

  render: function() {
    var classes = React.addons.classSet({
      'todoItem': true,
      'completed': this.state.completed
    });

    return (
      <div className={classes}>
        <input type="checkbox" onChange={this.toggle} />
        <span className="text">{this.props.text}</span>
        <span className="right" onClick={this.props.onDestroy}>&#x2717;</span>
        <br />
      </div>
    );
  }
});

module.exports = TodoItem