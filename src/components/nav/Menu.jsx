import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome ,FiSettings, FiClipboard } from "react-icons/fi";




const Menu = () => {
    return (
        <div className='sticky bottom-0'>
            <div className='flex w-full h-[50px] justify-around items-center bg-[#171717]'>
                <Link className=''>
                    <FiClipboard size={35} className='text-white' />
                </Link>
                <Link className=''>
                    <FiHome size={35} className='text-white' />
                </Link>
                <Link className=''>
                    <FiSettings size={35} className='text-white' />
                </Link>
            </div>
        </div>
    )
}

export default Menu