import List from "./List"

const TaskLists = ({ getAllTodos, handleGetATodo, isLoading}) => {
  return (
    <ul>
      {
        !isLoading && getAllTodos.length === 0 ? <h2 className="list-msg">Todo list is empty!</h2> : null
      }
      {
        isLoading ? <h1 className="loader">Loading...</h1> :
        <List getAllTodos={getAllTodos} handleGetATodo={handleGetATodo} />
      }
     
    </ul>
  )
}

export default TaskLists
