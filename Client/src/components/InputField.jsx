import Input from "./Input"

const InputField = ({
  title, setTitle, body, setBody, handleSubmit
}) => {


  return (
    <form className="formBox" onSubmit={handleSubmit}>
       <Input
       label="Title"
        type="text"
        className="input"
        placeholder="Enter Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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

       <button type="submit" className="btn">Add</button>
    </form>


  )
}

export default InputField