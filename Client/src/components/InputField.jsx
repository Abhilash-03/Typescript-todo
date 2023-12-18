import { useTodo } from "../context"
import Input from "./Input"
import { useState } from "react";

const InputField = () => {
  const {handleSubmit, msg, errorMsg, isLoading, inputRef} = useTodo();

  const [todo, setTodo] = useState({title: "", body: "", checked: false});

  const createTodo = (e) => {
    e.preventDefault();
    const {title, body, checked} = todo;
    handleSubmit(title, body, checked);
    setTodo({title: "", body: ""});
  }

  return (
    <form className="formBox" onSubmit={createTodo}>
       <Input
       label="Title"
        type="text"
        className="input"
        placeholder="Enter Todo Title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        ref={inputRef}
        required
       />

       <Input
       label="Body"
        type="text"
        className="input"
        placeholder="Write Todo Body"
        value={todo.body}
        onChange={(e) => setTodo({ ...todo, body: e.target.value })}
        required
       />
       {
        !errorMsg && !isLoading && msg && <p className={msg ? "successMsg" : "message"}>Success - {msg}</p>
       }
       {/* {
        errorMsg && !isLoading && <p className={errorMsg ? "errorMsg" : 'message'}>Fail: {errorMsg}</p>
       } */}
      
       <button type="submit" className="btn">Add</button>
       
    </form>


  )
}

export default InputField
