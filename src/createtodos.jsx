import React, { Component } from 'react';

class CreateTodo extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            text:'',
            priority: ''
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
        }

    handleChange(e) {
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleAdd(e) {
        e.preventDefault();
        
        {if(this.state.text.length && this.state.priority.length) {
            
            const newItem = {
                text: this.state.text,
                priority: this.state.priority
            }
            this.props.handleAdd(newItem);
            console.log('newItem::', newItem)
            
            this.setState({
                text:'',
                priority:''
            })
        }}
        }

    render() {
        return(
            <div className = "card">
                <div className = "card-header">
                    <h5>Add New Todo</h5>
                </div>
                <div className = "card-body">
                    <form onSubmit = {this.handleAdd}>
                        <div className = "form-group">
                            <label htmlFor = "createtodotext">I want to..</label>
                            <textarea name = 'text' value = {this.state.text} onChange = {this.handleChange} className = "create-todo-text form-control" id = "createtodotext"></textarea>
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "priority">How much of a priority is this?</label>
                            <select name = 'priority' className = "create-todo-priority" id = "priority" value = {this.state.priority} onChange = {this.handleChange}>
                                <option disabled>Select a Priority</option>
                                <option value = "1">Low Priority</option>
                                <option value = "2">Medium Priority</option>
                                <option value = "3">High Priority</option>
                            </select>
                        </div>
                        <div className = "form-group">
                            <button name = "create-todo" type = "submit" className = "create-todo btn-primary btn-block">Add</button>
                        </div>
                    </form>
                </div>
                
                

            </div>
        )
    }
}
export default CreateTodo;