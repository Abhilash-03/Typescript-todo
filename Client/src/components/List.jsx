const List = ({ getAllTodos, handleDelete }) => {
  return (
    <>
    { getAllTodos.map((todo) => (
       
            <li key={todo._id} className="lists-items">
            <div className="item">
            <span className="title">{todo.title}</span> <span>
                <button className="delete delBtn" onClick={() => handleDelete(todo._id)}>🪣</button> <button className="view viewBtn">👁️</button>
            </span>
            </div>
            </li>
    ))
    
        }
    </>
  )
}

export default List
