import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Todo from './components/Todo'
import Details from './components/Details'
import axios from '../src/axios/axios'
import { useState, useEffect } from "react";
import EditTodo from './components/EditTodo'

function App() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [getAllTodos, setGetAllTodos] = useState([]);
    const [getTodo, setGetTodo] = useState([]);
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const [editChecked, setEditChecked] = useState(false);
    const [msg, setMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const getTodos = async () => {
      setIsLoading(true);
        try {
          const response = await axios.get('/');
          const data = response.data.todos;
          setGetAllTodos([...data]);
          setIsLoading(false);

        } catch (error) {
          // console.log(error.response.data);
          setIsLoading(false);
          setErrorMsg(error.response.data?.msg);
          setGetAllTodos([]);
          setTimeout(() => {
            setErrorMsg('');
          }, 2000);

        }
     }
 
     useEffect(() => {
        getTodos();  

     }, []);
 
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        const response = await axios.post('/', {title, body});
        // console.log(response?.data);
        const dataMsg = response?.data?.msg;
        setTitle('');
        setBody('');
        setMsg(dataMsg);
        setTimeout(() => {
           setMsg('');
        }, 2500)
        getTodos();
      } catch(error) {
        // console.log(error.response.data?.msg);
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
          setEditTitle(data.title);
          setEditBody(data.body);
          setEditChecked(data.completed);
        } catch (error) {
          console.log(error.response.data);
        }
    }

    const handleEditTodo = async (id) => {
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
        setEditTitle('');
        setEditBody('');
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


  return (
    <>
     <main className='app'>
        <Routes>
          <Route index element={<Todo 
           title={title}
           body={body}
           setTitle={setTitle}
           setBody={setBody}
           handleSubmit={handleSubmit}
           getAllTodos={getAllTodos}
           handleGetATodo={handleGetATodo}
           msg={msg}
           isLoading={isLoading}
           errorMsg={errorMsg}
          />} />

          <Route exact path={`/tododetails/:id`} element={<Details 
           isLoading={isLoading}
           msg={msg}
           errorMsg={errorMsg}
           getTodo={getTodo} 
           handleDelete={handleDelete} />}
            />

          <Route exact path={`/editTodo/:id`} element={<EditTodo 
           editTitle={editTitle}
           editBody={editBody}
           editChecked={editChecked}
           setEditTitle={setEditTitle}
           setEditBody={setEditBody}
           setEditChecked={setEditChecked}
           handleEditTodo={handleEditTodo}
           getTodo={getTodo}
           isLoading={isLoading}
           msg={msg}
           errorMsg={errorMsg}
          />} />
        </Routes>
     </main>  
    </>
  )
}

export default App
