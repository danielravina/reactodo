(function(){

  "use strict"

  var React     = require("react"),
      TodoList  = require("./TodoList"),
      InputBox  = require("./InputBox"),
      StatusBar = require("./StatusBar")

  var App = React.createClass({

    getInitialState: function() {
       return {data: []};
     },

    componentDidMount: function() {
      // No need for now! Just testing
      // this.loadCommentsFromServer()
      // setInterval(this.loadCommentsFromServer, 2000)
    },

    loadCommentsFromServer: function() {
      // No need for now! Just testing
      // $.ajax({
      //   url: this.props.url,
      //   dataType: 'json',

      //   success: function(data) {
      //     this.setState({data: data});
      //   }.bind(this),

      //   error: function(xhr, status, err) {
      //     console.error(this.props.url, status, err.toString());
      //     this.setState({
      //       data: [{ "text": "ERROR" , "completed": false }]
      //     });
      //   }.bind(this)
      // });
    },

    getStatusCount: function(isCompleted) {
      var count = this.state.data.filter(function(todo){
        return todo.completed == isCompleted
      }).length
      return count;
    },

    getTotalCount: function() {
      return this.state.data.length;
    },

    handleRemoveTodo: function(todo) {
      var items = this.state.data.filter(function(_todo) {
        return todo.id !== _todo.id;
      },this)
      this.setState({data: items});
    },

    handleToggleTodo: function(todo) {
      console.log(todo)
      var items = this.state.data.map(function(_todo) {
        if(todo.id === _todo.id) {
          _todo.completed = todo.completed;
        }
        return _todo;
      },this);

      this.setState({data: items});
    },

    handleAddedTodo: function(todo) {
      this.state.data.push(todo)
      this.setState({data: this.state.data});
    },

    render: function() {
      return (
        <div className="app">
          <h1>TODO</h1>
          <InputBox onTodoAdd={this.handleAddedTodo} />
          <StatusBar
            completed={this.getStatusCount(true)}
            active={this.getStatusCount(false)}
            total={this.getTotalCount()}
          />
          <TodoList data={this.state.data}
                    onDestroy={this.handleRemoveTodo}
                    onToggle={this.handleToggleTodo}
          />
        </div>
      );
    }
  });

  React.render(
    <App url='resources/feed.json'/>,
    document.getElementById('app')
  );

  module.exports = App;
})();