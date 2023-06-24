import React from 'react'
import { useState } from 'react'

const AddTodo = (props) => {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) => {
        
      e.preventDefault();
      if(!title || !desc) {
        alert("Title or Description cannot be empty!")
      }
      else  {
        props.addTodo(title,desc);
      }
    }
  return (
    <div className='container my-3'>
        <h3> Add a Todo </h3>
      <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label"> To
                do Title </label>
                <input type="text" className="form-control" id="title" value = {title} onChange={(e) => {setTitle(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label"> Todo Description </label>
                <input type="text" className="form-control" id="desc" value = {desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-sm btn-success"> Add Todo </button>
        </form>
    </div>
  )
}

export default AddTodo
