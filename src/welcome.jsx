import React, { Component } from 'react';

class Welcome extends Component{
 render (){
    return (
            <div className = "card">
                <div className = "card-header">
                    <h5>View Todos</h5>
                </div>
                
                <div className = "card-body">
                    <div>
                        <h5>Welcome to Very Simple Todo App!</h5>
                        <p>Get started now by adding a new todo on the left.</p>
                    </div>
                </div>
            </div>
    )
} 
}

export default Welcome;