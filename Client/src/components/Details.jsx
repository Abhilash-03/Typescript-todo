import { Link } from "react-router-dom"
import { useTodo } from "../context"

const Details = () => {
  const { getTodo, handleDelete, isLoading, msg, errorMsg }  = useTodo();
  
  return (
    <section className="dtls">
      {
        !isLoading && msg && <p className={msg ? "successMsg" : "message"}>Success - {msg}</p>
      }
       {
        errorMsg && !isLoading && <p className={errorMsg ? "errMsg" : 'message'}>Message: {errorMsg}</p>
       }
       {
        getTodo.map((todo) => (
            <div key={todo._id} className="todoInfo">
                <h2>Todo Details 📑</h2>
                <p className="title info"><b>Title: </b> {todo.title}</p>
                <p className="body info"><b>Body: </b> {todo.body}</p>
                <p className="status info"><b>Status: </b> {todo.completed? 'Completed' : "Incomplete"}</p>
                <p className="date info"><b>Created: </b> {(todo.createdAt).slice(0, 10)}</p>
                <div className="btns">
                    <button className="btn deleteBtn" onClick={() => handleDelete(todo._id)}>🗑️</button>
                  <Link to={`/editTodo/id=${todo._id}`}><button className="btn editBtn">📝</button> </Link>
                </div>
            </div>
        ))
       }
    </section>
  )
}

export default Details
