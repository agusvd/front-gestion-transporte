import React from 'react'

const Button = (props) => {
    return (
        <button className='block bg-blue-500 hover:bg-blue-700 rounded-xl duration-500 ease-in-out text-white p-2 text-md font-primary' 
        {...props}>
        </button>
    )
}

export default Button