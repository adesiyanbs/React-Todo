import React,{useState, useEffect} from 'react'
import './App.css';
import Form from './components/form';
import Todolist from './components/Todolist';

function App() {

  //state stuuf
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredtodos]= useState([])

  useEffect(()=>{
    filterHandler();
  }, [todos, status])

  //functions
  const filterHandler =()=>{
    switch(status){
      case 'completed':
        setFilteredtodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredtodos(todos.filter(todo => todo.completed === false))
        break;
        default:
          setFilteredtodos(todos)
          break;
    }
  }
  return (
    <div className="App">
        <header>
          <h1>Maa Todo List</h1>
        </header>
        <Form 
        setStatus={setStatus}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        filteredTodos={filteredTodos}/>
        
        <Todolist 
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}/>
    </div>
  );
}

export default App;
