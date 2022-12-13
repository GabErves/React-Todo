import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';
import lscache from 'lscache';

function App() {

  const [todoList, setTodoList] = useState([]);

  const lscacheKey = 'currentList';

  useEffect(() => {
    let currentList = lscache.get(lscacheKey);
    if(!currentList){
      currentList = [];
    }
    setTodoList(currentList);
  }, []);

  const addNewTodo = title => {
    if(!title){
      return;
    }
    const todoListClone = [...todoList];
    todoListClone.push({title: title});
    setTodoList(todoListClone);
    lscache.set(lscacheKey, todoListClone);
  }


  return (
    <div className="App">

      <TodoList todoList={todoList} />
      <AddTodo  adder={addNewTodo} />
      
    </div>
  );
}

export default App;