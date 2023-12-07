import { useTodo } from "../context"
import List from "./List"

const TaskLists = () => {
  const {getAllTodos, isLoading} = useTodo();

  return (
    <ul>
      {
        !isLoading && getAllTodos.length === 0 ? <h2 className="list-msg">Todo list is empty!</h2> : null
      }
      {
        isLoading ? <h1 className="loader">Loading...</h1> :
        <List/>
      }
     
    </ul>
  )
}

export default TaskLists
