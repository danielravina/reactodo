(function(){

  "use strict"

  var React = require("react");

  var TodoItem = React.createClass({

    toggle: function(e) {
      console.log(this.key)
      this.props.onToggle({completed: e.currentTarget.checked, id: this.props.id})
    },

    render: function() {
      console.log(this.props.id);
      var classes = React.addons.classSet({
        'todoItem': true,
        'completed': this.props.completed
      });

      return (
        <div className={classes}>
          <input type="checkbox" onChange={this.toggle} />
          <span className="text">{this.props.text}</span>
          <span className="destroy" onClick={this.props.onDestroy}>&#x274C;</span>
          <br />
        </div>
      );
    }
  });

  module.exports = TodoItem

})();