// import React, { useId, forwardRef } from 'react'


// const Input = forwardRef(function Input({
//     label, 
//     type = "text",
//     className = "",
//     ...props

// }, ref) {
//     const id = useId();
//     return (
//       <div className='w-full'>
//             {
//                 label &&
//                 <label className = "mb-2 font-semibold" htmlFor={props.id}>
//                     {label}
//                 </label>
//             }
//             <input
//                 type={type}
//                 className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//                 ref={ref}
//                 {...props}
//                 id = {id}
//             />
//       </div>
//     );
// })

// export default Input



// in recact 19 no forwardRef is required for input component to work with react-hook-form.

// code the above in react 19 without forwardRef and useId.
function Input({
    label, 
    type = "text",
    className = "",
    ...props
}) {
    return (
      <div className={`flex flex-col ${className}`}>
            {label &&
                <label className="mb-2 font-semibold"
                    htmlFor={id}>
                    {label}
          </label>
        }
        <input
          type={type}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...props}
            id = {id}
        />
      </div>
    );
}