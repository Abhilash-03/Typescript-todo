import List from "./List"

const TaskLists = ({ getAllTodos, handleDelete }) => {
  return (
    <ul>
      <List getAllTodos={getAllTodos} handleDelete={handleDelete} />
    </ul>
  )
}

export default TaskLists
