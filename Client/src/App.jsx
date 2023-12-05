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

    const navigate = useNavigate();

    const getTodos = async () => {
        try {
          const response = await axios.get('/');
          const data = response.data.todos;
          setGetAllTodos([...data]);
          // console.log(data);
        } catch (error) {
          console.log(error.response.data);
        }
     }
 
     useEffect(() => {
        getTodos();  

     }, [getAllTodos]);
 
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        const response = await axios.post('/', {title, body});
        console.log(response?.data);
        setTitle('');
        setBody('');
      } catch(err) {
        console.log(err?.response?.data?.msg);
      }
  
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/${id}`);
            console.log(response.data.todo)
            navigate('/');
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const handleGetATodo = async (id) => {
        try {
          const response = await axios.get(`/${id}`);
          console.log(response.data.todo);
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
        console.log(response.data.todo);
        setEditTitle('');
        setEditBody('');
        navigate('/');

      } catch (error) {
        console.log(error.response.data);
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
          />} />

          <Route exact path={`/tododetails/:id`} element={<Details  getTodo={getTodo} handleDelete={handleDelete} />} />
          <Route exact path={`/editTodo/:id`} element={<EditTodo 
           editTitle={editTitle}
           editBody={editBody}
           editChecked={editChecked}
           setEditTitle={setEditTitle}
           setEditBody={setEditBody}
           setEditChecked={setEditChecked}
           handleEditTodo={handleEditTodo}
           getTodo={getTodo}
          />} />
        </Routes>
     </main>  
    </>
  )
}

export default App
