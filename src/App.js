import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  //useeffect takes 2 parameters a callback and list of dependecy and its compulsory
  useEffect(() => {
    const localTodos = localStorage.getItem("todos")
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }
  }, []);

  const addTodos = async todo => {
    setTodos([...todos, todo])
  }

  //in dependency keep the values in which if there is change then useeffect needs to run
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  return (
    <Container fluid>
      <h1>Todo with Local Storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  )
}

export default App;
