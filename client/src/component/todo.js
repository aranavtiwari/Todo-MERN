import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button , Table } from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getTodos, deleteTodo, addTodo } from '../actions/todoActions'

class Todo extends Component {

    componentDidMount(){
        this.props.getTodos()
    }

    render() { 

        const { todos } = this.props.todo
    
        const handleAddTodo = (e) => {
            const todo = prompt('Enter todo here', '');

            const newTodo = {
                name : todo
            }

            this.props.addTodo(newTodo);
        }

        const handleDelete = id => {
            this.props.deleteTodo(id)
        }

        return ( 
            <div style={{
                margin : '10px',
                border : '2px solid #ec'
            }}>

                <Button variant="primary" style={{
                    margin : '10px'
                }} onClick={handleAddTodo}>Add todo</Button>

                <Table hover responsive striped bordered>
                
                <tbody>
                 {todos.map((todo) => {
                     return(
                         <tr key={todo._id}>
                            <td>{todo.name}</td>
                            <td><Button variant="dark" onClick={
                                () => handleDelete(todo._id)
                            }>Delete</Button></td>
                        </tr>
                     )
                 })}
                 </tbody>
                </Table>

            </div>
         );
    }
}
 
Todo.propTypes = {
    getTodos : PropTypes.func.isRequired,
    todo : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    todo : state.todo
})

export default connect(mapStateToProps, { getTodos, deleteTodo, addTodo })(Todo);