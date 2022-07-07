import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  const mystyle = {
    minHeight : '35vh',
    margin:"10px auto"
  }
  return (
    <>
     <div className="container" style={mystyle}>
     
     {
         
         props.todos.map((todo)=>{
            
              return ( <TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}/>)
         })
     }
     </div>
    </>
   
  )
}
