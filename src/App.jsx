import React, { Component } from 'react';
import CreateTodo from './createtodos';
import Itemlist from './itemlist';
import Welcome from './welcome';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      todos:[]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.itemDelete = this.itemDelete.bind(this);
    this.editForm = this.editForm.bind(this);
    this.itemComplete = this.itemComplete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  handleAdd(val) {
    const newTodo = {
      id: Date.now(),
      text: val.text,
      priority: val.priority,
      editing: false,
      isCompleted: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  
  itemDelete (itemId) {
    let todoCopy = [...this.state.todos];
    let i = todoCopy.findIndex(item => {return item.id == itemId});
    todoCopy.splice(i, 1);
    this.setState({
      todos: todoCopy
    })
  }
    
  editForm(itemId) {
    let todoCopy = [...this.state.todos];
    let itemClick = todoCopy.find(item => item.id == itemId);
    itemClick.editing = true;
    this.setState({
      todos: todoCopy,
    })
  }
    
  handleUpdate(updateItem){
    const newText = updateItem.text;
    const newPriority = updateItem.priority;
    const todoCopy = [...this.state.todos];
    const savedItem = todoCopy.find(item => item.id == updateItem.id)
    savedItem.text = newText;
    savedItem.priority = newPriority;
    savedItem.editing = false;
    this.setState({
      todos: todoCopy
    })
  }

  itemComplete (itemId) {
    let todoCopy = [...this.state.todos];
    let itemCompleted = todoCopy.find(item => item.id == itemId);
    itemCompleted.isCompleted = !itemCompleted.isCompleted;
    this.setState({
      todos: todoCopy
    })
  }
    
  render() {
    return (
      <div className='container'>
        <div className = "jumbotron"> 
          <h3>Very Simple Todo App</h3>
          <p>Track all the things</p>
          <hr className = "my-4"></hr>
        </div>
        <div className = "row">
          <div className = "col-md-4">
            <CreateTodo handleAdd = {this.handleAdd} />
          </div>
          <div className = "col-md-8">
            {(this.state.todos.length === 0) ? <Welcome /> :
            <Itemlist todos = {this.state.todos}
                    itemtoEdit = {this.state.itemtoEdit}
                    itemDelete = {this.itemDelete}
                    itemComplete = {this.itemComplete}
                    editForm = {this.editForm}
                    handleUpdate = {this.handleUpdate}
            />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
