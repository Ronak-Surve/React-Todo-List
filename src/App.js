import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {

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
  const [todos, setTodos] = useState([]);
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
