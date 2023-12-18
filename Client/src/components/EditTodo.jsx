import { useParams } from "react-router-dom";
import { useTodo } from "../context"
import Input from "./Input"
import { useEffect } from "react";

const EditTodo = () => {
  const {
      getTodo, isLoading, msg, errorMsg, handleGetATodo, handleUpdate, editTodo, setEditTodo,
} = useTodo();


  const {id} = useParams();
  useEffect(() => {
    handleGetATodo(id);
  }, [])

  return (
    <section className="edit-todo">
      <h2 className="heading">Edit Todo ✏️</h2>
      {
        !isLoading && msg && <p className={msg ? "successMsg" : "message"}>Success - {msg}</p>
      }
       {
        errorMsg && !isLoading && <p className={errorMsg ? "errMsg" : 'message'}>Fail: {errorMsg}</p>
       }
      {
        getTodo.map((todo) => (
            <div key={todo._id}>
       
            <Input label="Title" type="text" placeholder="Edit your title" className="edit-title" value={editTodo.title} onChange={(e)=> setEditTodo({...editTodo, title: e.target.value})} required />
            <Input label="Body" type="text" placeholder="Edit your body" className="edit-body" value={editTodo.body} onChange={(e)=> setEditTodo({...editTodo, body: e.target.value})} required />
            <Input label="Completed" type="checkbox" className="edit-checkbox" checked={editTodo.checked} onChange={(e)=> setEditTodo({ ...editTodo, checked: e.target.checked})} />
            <div className="savebtn">
              <button type="submit" className="btn saveBtn" onClick={handleUpdate}>Save</button>
            </div>
         </div>
        ))
      }
   
    </section>
  )
}

export default EditTodo
