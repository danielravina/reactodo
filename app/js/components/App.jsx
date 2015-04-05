var React    = require("react");
    TodoList = require("./TodoList"),
    InputBox = require("./InputBox");
    $        = require("jquery")

var App = React.createClass({
  getInitialState: function() {
     return {data: []};
   },

  componentDidMount: function() {
    // No need for now
    // this.loadCommentsFromServer()
    // setInterval(this.loadCommentsFromServer, 2000)
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',

      success: function(data) {
        this.setState({data: data});
      }.bind(this),

      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        this.setState({
          data: [{ "text": "ERROR" , "completed": false }]
        });
      }.bind(this)
    });
  },

  handleRemoveTodo: function(todo) {
    console.log(todo)
    var items = this.state.data.filter(function(_todo) {
      return todo.id !== _todo.id;
    },this)
    console.log(items)
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
        <TodoList data={this.state.data} onDestroy={this.handleRemoveTodo}/>
      </div>
    );
  }
});

React.render(
  <App url='resources/feed.json'/>,
  document.getElementById('app')
);

module.exports = App;