import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Todo from './components/Todo'
import Details from './components/Details'
import axios from '../src/axios/axios'
import { useState, useEffect, useRef } from "react";
import EditTodo from './components/EditTodo'
import { TodoProvider } from './context'
import NotFound from './components/NotFound'

function App() {
    const [getAllTodos, setGetAllTodos] = useState([]);
    const [getTodo, setGetTodo] = useState([]);
    const [msg, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const [editTodo, setEditTodo] = useState({id: "", title: "", body: "", checked: false});

    const updateTodo = (currentTodo) => {
     setEditTodo({id: currentTodo._id, title: currentTodo.title, body: currentTodo.body, checked: currentTodo.completed})
   }
   
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const getTodos = async () => {
      setIsLoading(true);
        try {
          const response = await axios.get('/');
          const data = response.data.todos;
          setGetAllTodos([...data]);
          setIsLoading(false);
          setFiltered([...data]);
        } catch (error) {
          // console.log(error.response.data);
          setIsLoading(false);
          setErrorMsg(error.response.data?.msg);
          setGetAllTodos([]);
          setFiltered([]);
          setTimeout(() => {
            setErrorMsg('');
          }, 2000);

        }
     }
 
     useEffect(() => {
        getTodos();  
     }, []);
 
  
    const handleSubmit = async(title, body, checked) => {
      try{
        const response = await axios.post('/', {title, body, checked});
        const dataMsg = response?.data?.msg;
        setMsg(dataMsg);
        inputRef.current.focus();
        setTimeout(() => {
           setMsg('');
        }, 2500)
        // getTodos();
      } catch(error) {
        const errMsg = error.response.data?.msg;
        setErrorMsg(errMsg);
        setTimeout(() => {
          setErrorMsg('');
       }, 2500)
      }
  
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/${id}`);
            // console.log(response.data.todo);
            const data = response?.data?.msg;
            setMsg(data);
            getTodos();
            setTimeout(() => {
              setMsg("");
              navigate('/');

            }, 2500);
        } catch (error) {
            // console.log(error.response.data);
            const data = error.response.data?.msg
            setErrorMsg(data);
            setTimeout(() => {
              setErrorMsg("");
              navigate('/');
            }, 2500);
        }
    }

    const handleGetATodo = async (id) => {
        try {
          const response = await axios.get(`/${id}`);
          // console.log(response.data.todo);
          const data = response.data.todo;
          setGetTodo([data]);

        } catch (error) {
          console.log(error.response.data);
        }
    }

    const handleEditTodo = async (id, editTitle, editBody, editChecked) => {
      try {
        const updateTodo = {
          title: editTitle,
          body: editBody,
          completed: editChecked
        }
        const response = await axios.patch(`/${id}`, updateTodo);
        const data = response?.data?.msg
        // console.log(data);
        setMsg(data)
        setTimeout(() => {
          setMsg('');
          navigate('/');
        }, 2500)
        getTodos();
      } catch (error) {
        // console.log(error.response.data);
        const data = error.response?.data?.msg
        setErrorMsg(data);
        setTimeout(() => {
          setErrorMsg('');
          navigate('/');
        }, 2500)
      }
    }
    const handleUpdate = () => {
      const {id, title, body, checked} = editTodo;
      handleEditTodo(id, title, body, checked);
      setEditTodo({...editTodo, title: "", body: "", checked: false});
  
    }
    const handleSelect = (select) => {
      let result;
      if(select === 'all'){
        result = getAllTodos;
      } else if(select === 'pending') {
         result = getAllTodos.filter(todo => todo.completed !== true);
      } else if(select === 'completed') {
         result =  getAllTodos.filter(todo => todo.completed === true);
      }

      setFiltered([...result]);
    }

  return (
    <>
    <TodoProvider value={{ getTodos, handleDelete, handleGetATodo, handleSubmit, msg, errorMsg, getAllTodos, isLoading, getTodo, inputRef, handleSelect, filtered, updateTodo, handleUpdate, editTodo, setEditTodo }} >

     <main className='app'>
        <Routes>
          <Route index element={<Todo/>} /> 

          <Route exact path={`/tododetails/:id`} element={<Details/>} />

          <Route exact path={`/editTodo/:id`} element={<EditTodo />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
     </main>  

    </TodoProvider>
    </>
  )
}

export default App
