
import './App.css';
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import AddTodo from './components/AddTodo';
import React, { useState, useEffect } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//it is named export therefore we used it in curly braces 
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("on delete clicked",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length===0)
    {
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
      const mytodo={
        sno:sno,
        title:title,
        desc:desc,
      }
      setTodos([...todos,mytodo]);
      localStorage.setItem("todos", JSON.stringify(todos));
      
      console.log(todos)
      
    
  }
 
  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  
  return (
    
    //passing data from parent component to child component using props 
    //passing function in props
    <div >
      <Router>
      <Header title="Mytodolist" searchBar={true}/>

      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete}/>
          </>

            )
          }}>
          

          
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          
        </Switch>

      
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
