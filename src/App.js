
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import {useState, useEffect} from 'react';
import lscache from 'lscache';


function App() {
  const [todoList, setTodoList] = useState();

  const lscachekey = 'currentList';

  useEffect(() =>{
    let currentList = lscache.get(lscachekey);
    if(!currentList){
      currentList = [];
    }
    setTodoList(currentList);
  }, [])

  const addNewTodo = title =>{
    if(!title){
      return;
    }
    const todoListClone = [...todoList];
    todoListClone.push({title: title});
    setTodoList(todoListClone);
    lscache.set(lscachekey, todoListClone);
  }


  return (
    <div className="App">
      <TodoList todoList={todoList}/>
      <AddTodo adder={addNewTodo}/>
    </div>
  );
}

export default App;
