import React from 'react'

const Button = (props) => {
    return (
        <button className='block bg-blue-500 hover:bg-blue-700 rounded-xl text-center duration-500 ease-in-out text-white p-2 text-md font-secondary' 
        {...props}>
        </button>
    )
}

export default Button