import InputField from "./InputField";
import TaskLists from "./TaskLists";


const Todo = ({
  title, setTitle, body, setBody, handleSubmit, getAllTodos, handleGetATodo
}) => {
  
  return (
    <>
      <h1 className="heading">📰 Todo App 🚀</h1>
      <InputField title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit} />
      <hr />
      <h3>Task Lists</h3>
      <TaskLists getAllTodos={getAllTodos}  handleGetATodo={handleGetATodo}/>
    </>
  );
};

export default Todo;
