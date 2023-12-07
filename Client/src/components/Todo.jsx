import { useTodo } from "../context";
import InputField from "./InputField";
import TaskLists from "./TaskLists";


const Todo = () => {
  
  const {getAllTodos} = useTodo()

  return (
    <>
      <h1 className="heading">📰 Todo App 🚀</h1>
      <InputField />
      <hr />
      <h3>Task Lists - [{!getAllTodos.length ? 0 : getAllTodos.length}]</h3>
      <TaskLists/>
    </>
  );
};

export default Todo;
