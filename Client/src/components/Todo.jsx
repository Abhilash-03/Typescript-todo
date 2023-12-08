import { useTodo } from "../context";
import InputField from "./InputField";
import TaskLists from "./TaskLists";


const Todo = () => {
  
  const {filtered, handleSelect} = useTodo()


  return (
    <>
      <h1 className="heading">📰 Todo App 🚀</h1>
      <InputField />
      <hr />
      <h3>Task Lists - [{!filtered.length ? 0 : filtered.length}]</h3>
      <div className="tabBtns">
          <button className="tab" onClick={()=>handleSelect('all')}>All</button>
          <button className="tab" onClick={()=>handleSelect('pending')}>Pending</button>
          <button className="tab" onClick={()=>handleSelect('completed')}>Completed</button>
      </div>
      <TaskLists/>
    </>
  );
};

export default Todo;
