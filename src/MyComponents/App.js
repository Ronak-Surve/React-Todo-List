import './App.css';
import Header from './Header';
import Todos from './Todos';
// import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else  {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>  {
    console.log("please delete",todo)
    //deleting this way in react does not work instead using hooks
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  const addTodo = (title,desc) => {

    let no;
    if(todos.length == 0) {
      no = 0;
    }
    else  {
      no = todos[todos.length - 1] + 1;
    }

    const myTodo =  {
      no : no,
      title : title,
      desc : desc,
    }
    setTodos([...todos,myTodo]);

  }
  
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
      <Header title= "My Todos List" searchbar = {false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
