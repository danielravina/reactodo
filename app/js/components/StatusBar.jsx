(function() {

  "use strict"

  var React = require("react");

  var StatusBar = React.createClass({

    render: function() {
      return (
        <div className="statusBar">
          <div>Total: {this.props.total}</div>
          <div>Completed: {this.props.completed}</div>
          <div>Active: {this.props.active}</div>
        </div>
      );
    }

  });
  module.exports = StatusBar;
})();