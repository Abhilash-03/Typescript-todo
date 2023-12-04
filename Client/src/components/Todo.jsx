import InputField from "./InputField";
import TaskLists from "./TaskLists";
import axios from "../axios/axios";
import { useState, useEffect } from "react";

const Todo = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [getAllTodos, setGetAllTodos] = useState([]);

    
    const getTodos = async () => {
        try {
          const response = await axios.get('/');
          const data = response.data.todos;
          console.log(data);
          setGetAllTodos([...data]);
        } catch (error) {
          console.log(error.response.data);
        }
     }
 
     useEffect(() => {
        getTodos();  
     }, []);
 
  
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
            console.log(response.data.msg);
        } catch (error) {
            console.log(error.response.data);
        }
    }

  return (
    <>
      <h1 className="heading">Todo App</h1>
      <InputField title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit} />
      <hr />
      <h3>Task Lists</h3>
      <TaskLists getAllTodos={getAllTodos} handleDelete={handleDelete} />
    </>
  );
};

export default Todo;
