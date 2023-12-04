
const Input = ({label, type, className= '', placeholder, value, ...props }) => {
  return (
    <div className="inputArea">
        {
            label && (
                <label htmlFor={label}>{label}: </label>
            )
        }
      <input type={type}
       className={className}
       placeholder={placeholder}
       value={value}
       {...props}
       required
      />

      </div>
  )
}

export default Input
