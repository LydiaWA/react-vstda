import React, { Component } from 'react';


class Itemlist extends Component {
    constructor (props) {
        super(props);
        
        this.handleDelete = this.handleDelete.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.handleSaveEdit = this.handleSaveEdit.bind(this)
        }
   
    handleDelete (e) {
        const deleteID = e.target.name;
        this.props.itemDelete(deleteID)
    }
  
    handleComplete(e) {
        const completeId = e.target.name
        this.props.itemComplete(completeId)
        
    }

    changeColor(item){

        if (item.isCompleted == true)
        {return "list-group-item list-group-item-light"};
        
        if (item.isCompleted == false) {
        
            if(item.priority == "1")
                {return "list-group-item list-group-item-success"}

            if(item.priority == "2")
                {return "list-group-item list-group-item-primary"}

            if(item.priority == "3")
                {return "list-group-item list-group-item-danger"}
    
        }
    }
    
   handleEdit(e) {
        this.props.editForm(e.target.name);
        }

    handleSaveEdit(item){
        this.props.handleUpdate(item)
        }

    render () {
    
    return (
       
        <div className = "card">
            <div className = "card-header">
                <h5>View Todos</h5>
            </div>
        <div className = "card-body">
            
            <div>
                <ul className = "list-group"> 
                    { this.props.todos.map((item) => {
                        if(item.editing){
                            return (
                                     <EditTodo key = {item.id} item = {item} handleSaveEdit = {this.handleSaveEdit}/>
                                    )
                        } else {
                        return (
                            <li key = {item.id} className = {this.changeColor(item)} >
                                <input name = {item.id} type = "checkbox" onClick = {this.handleComplete}/>
                                <span>{item.text}</span>
                                <div className = "d-flex flex-sm-row justify-content-sm-end">
                                    <a name = {item.id} href = "#" className = "edit-todo fas fa-edit" onClick = {this.handleEdit}></a>
                                    <a name = {item.id} href = "#" className = "delete-todo fas fa-trash-alt" onClick = {this.handleDelete}></a>
                                </div>
                            </li>
                            )};
                        })
                    }
                </ul>
            </div>
        </div>
        </div>

    )}
}

class EditTodo extends Component{
    constructor (props) {
        super(props)
        this.state = {
           
            text: props.item.text,
            priority: props.item.priority
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        {if(this.state.text.length && this.state.priority) {
            
            const updatedItem = {
                id: e.target.name,
                text: this.state.text,
                priority: this.state.priority
            }
            this.props.handleSaveEdit(updatedItem);
        }}
    }

    render () {
        return (
            <form name = {this.props.item.id} onSubmit = {this.handleSubmit} className = "list-group-item">
                <div className = "form-group">
                    <label htmlFor = "editToDoText">Description</label>
                    <textarea name = "text" className = "edit-todo-text update-todo-text form-control" id = "editToDoText" value = {this.state.text} onChange = {this.handleChange}></textarea>
                </div>
                <div className = "form-group">
                    <label htmlFor = "edittodopriority">Priority</label>
                    <select name = "priority" className = "update-todo-priority" id = "edittodopriority" value = {this.state.priority} onChange = {this.handleChange}>
                        <option disabled>Select a Priority</option>
                        <option value = "1">Low Priority</option>
                        <option value = "2">Medium Priority</option>
                        <option value = "3">High Priority</option>
                    </select>
                </div>
                <div className = "form-group">
                    <button name = "submit" type = "submit" className = "btn-primary update-todo">save</button>
                </div> 
            </form>

        )
    }
    
}
export default Itemlist;