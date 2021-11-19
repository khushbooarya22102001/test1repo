import React from 'react'
//we can write ({todo}) or use (props)
const TodoItems = ({todo,onDelete}) => {
    return (
        //calling function onClick
        //if we dont use arrow function then we are calling the function onDelete(todo) when everytime rendering is done but we want to call th function only on clicking so onclick arrow function is called in which onDelete function is passed
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            <hr/>
        </div>
    )
}
export default TodoItems;
