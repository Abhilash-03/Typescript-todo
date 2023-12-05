import Input from "./Input"

const EditTodo = ({
    editTitle, editBody, editChecked, setEditTitle, setEditBody, setEditChecked, handleEditTodo, getTodo
}) => {
  return (
    <section className="edit-todo">
      <h2 className="heading">Edit Todo ✏️</h2>
      {
        getTodo.map((todo) => (
            <div key={todo._id}>
       
            <Input label="Title" type="text" placeholder="Edit your title" className="edit-title" value={editTitle} onChange={(e)=> setEditTitle(e.target.value)} required />
            <Input label="Body" type="text" placeholder="Edit your body" className="edit-body" value={editBody} onChange={(e)=> setEditBody(e.target.value)} required />
            <Input label="Completed" type="checkbox" className="edit-checkbox" checked={editChecked} onChange={()=> setEditChecked(!editChecked)} />
            <div className="savebtn">
              <button type="submit" className="btn saveBtn" onClick={() => handleEditTodo(todo._id)}>Save</button>
            </div>
         </div>
        ))
      }
   
    </section>
  )
}

export default EditTodo
