import './App.css';
import  './style.css';
import Header from './components/Header.js';
import Todos from './components/Todos';
import Footer from './components/Footer';
import {React, useState,useEffect} from 'react';
import { Addtodo } from './components/Addtodo';


function App() {
  let initTodo;
  if(localStorage.getItem('initTodo') !== null) {
    initTodo = JSON.parse(localStorage.getItem('initTodo'));
  }
  else {
    initTodo = []
  }
  const onDelete = (todo)=>{
   
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  localStorage.setItem('todos',JSON.stringify(todos));
}
 const addTodo=(title,desc)=>{
  console.log(title,desc)
  // const tod({title,desc})
  // todos.push(todo);
  // setTodos(todos.concat(todo));
  let sno;
  if(todos.length > 0){
     sno = todos[todos.length-1].sno+1;
  }
  else {
     sno= 1;
  }

  let meratodo = {
    title: title,
    desc: desc,
    sno: sno,
  }
 
  setTodos([...todos,meratodo]);
 }

 
const [todos,setTodos]  = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])
  return (

    <>
    <Header title="Todo App" searchbar ={false}/>
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete = {onDelete} />
    <Footer />
    </>
  );
}

export default App;
