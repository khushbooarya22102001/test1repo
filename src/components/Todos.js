import React from 'react'
import TodoItems from './TodoItems';

export const Todos = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"
        
    }
    //to center text use textcenter
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-2">Todolist</h3>
            {props.todos.map((todo)=>{  return <TodoItems key={todo.sno} todo={todo} onDelete={props.onDelete}/>})}
        </div>
    )
}
export default Todos;
