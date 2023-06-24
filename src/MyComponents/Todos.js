import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle =   {
    minHeight : "100vh",
    margin : "10px auto"
  }
  return (
    <div className='container' style={myStyle}>
        <h3 className='my-3'> Todos List </h3>
        {props.todos.length === 0? "No Todos to Display" :
        //for loop for printing each todo
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo = {todo} key = {todo.no} onDelete = {props.onDelete}/>  
              <hr/>
            </>
          )
        })
        }
      
    </div>
  )
}

export default Todos


