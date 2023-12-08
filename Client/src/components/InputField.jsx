import { useTodo } from "../context"
import Input from "./Input"

const InputField = () => {

  const {title, setTitle, body, setBody, handleSubmit, msg, errorMsg, isLoading, inputRef} = useTodo();

  return (
    <form className="formBox" onSubmit={handleSubmit}>
       <Input
       label="Title"
        type="text"
        className="input"
        placeholder="Enter Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={inputRef}
        required
       />

       <Input
       label="Body"
        type="text"
        className="input"
        placeholder="Write Todo Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
       />
       {
        !errorMsg && !isLoading && msg && <p className={msg ? "successMsg" : "message"}>Success - {msg}</p>
       }
       {/* {
        errorMsg && !isLoading && <p className={errorMsg ? "errorMsg" : 'message'}>Fail: {errorMsg}</p>
       } */}
      
       <button type="submit" className="btn">Add</button>
       
    </form>


  )
}

export default InputField
