import React,{ useState } from 'react'

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        console.log("clicked")
        addTodo(title,desc);
        
    }
    return (
        <div className="container">
            <h2>add a todo</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title"  value={title} onChange={(e)=>setTitle(e.target.value)}placeholder="enter title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descrip" className="form-label">Description</label>
                    <input type="text" className="form-control" id="descrip" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="enter description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">add</button>
            </form>
        </div>
    )
}
export default AddTodo;

