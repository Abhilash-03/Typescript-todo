import List from "./List"

const TaskLists = ({ getAllTodos, handleDelete, handleGetATodo }) => {
  return (
    <ul>
      <List getAllTodos={getAllTodos} handleDelete={handleDelete}  handleGetATodo={handleGetATodo}/>
    </ul>
  )
}

export default TaskLists
