var React    = require("react");
    TodoList = require("./TodoList"),
    InputBox = require("./InputBox");
    $        = require("jquery")

var Widget = React.createClass({
  getInitialState: function() {
     return {data: []};
   },

  componentDidMount: function() {
    this.loadCommentsFromServer()
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

  handleAddedTodo: function(todo) {
    this.state.data.push(todo)
    this.setState({data: this.state.data});
  },

  render: function() {
    return (
      <div className="widget">
      <h1>Todoos</h1>
      <InputBox onTodoAdd={this.handleAddedTodo}/>
      <TodoList data={this.state.data}/>
      </div>
    );
  }
});

React.render(
  <Widget url='resources/feed.json'/>,
  document.getElementById('widget')
);

module.exports = Widget;