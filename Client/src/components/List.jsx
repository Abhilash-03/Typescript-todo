import { Link } from 'react-router-dom';
import { useTodo } from '../context';

const List = () => {
  const { handleGetATodo, filtered } = useTodo();

  return (
    <>
    { filtered.map((todo) => (
            <li key={todo._id} className="lists-items">
            <div className="item">
           { todo.completed ?
           <span className="title">✅ <span className='checked'>{todo.title}</span></span>  
           : <span className="title">{todo.title}</span>
           }<span>
               <Link to={`/tododetails/${todo._id}`} onClick={() => handleGetATodo(todo._id)}> <button className="view viewBtn">👁️</button></Link>
            </span>
            </div>
            </li>
    ))
    
        }
    </>
  )
}

export default List
