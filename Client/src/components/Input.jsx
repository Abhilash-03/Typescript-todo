import { forwardRef } from "react"

const Input = ({label, type, className= '', placeholder, value, ...props }, ref) => {
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
       ref={ref}
       {...props}
      />

      </div>
  )
}

export default forwardRef(Input)
