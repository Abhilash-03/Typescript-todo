import InputField from "./InputField";
import TaskLists from "./TaskLists";


const Todo = ({
  title, setTitle, body, setBody, handleSubmit, getAllTodos, handleGetATodo, msg, errorMsg, isLoading
}) => {
  
  return (
    <>
      <h1 className="heading">📰 Todo App 🚀</h1>
      <InputField title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit} msg={msg} errorMsg={errorMsg} isLoading={isLoading} />
      <hr />
      <h3>Task Lists - [{!getAllTodos.length ? 0 : getAllTodos.length}]</h3>
      <TaskLists getAllTodos={getAllTodos} handleGetATodo={handleGetATodo} isLoading={isLoading} errorMsg={errorMsg} msg={msg} />
    </>
  );
};

export default Todo;
