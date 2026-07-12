import React, { useId } from 'react'

function Select({
    label,
    options, 
    className = "",
    ...props
}) {
    const id = useId();
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-2 font-semibold" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
       >
        {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select
