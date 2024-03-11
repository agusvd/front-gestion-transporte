import React, { useState } from 'react'
import { BiBusSchool, BiCalendar, BiCheck,  BiGridAlt } from 'react-icons/bi'
import { FiUser } from "react-icons/fi";

import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'

const Nav = ({ toggleMenu }) => {

    return (
        <div className='fixed top-0 left-0 z-[100] bg-black/50 w-full'>
            <nav className='z-[99] w-[250px] h-screen animate-fade-in-right before:animate-fade-in-left'>
                <div className='flex flex-col justify-start items-center w-full h-full bg-black'>
                    <div className='h-[100px] w-full justify-between flex items-center p-4 bg-black z-[99]'>
                        <h2 className='text-2xl font-bold text-white'>Menu</h2>
                        <button onClick={toggleMenu}
                        className='hover:bg-[#444444] text-white rounded-md p-2 transition-all duration-300'>
                            <IoMdClose size={20}/>
                        </button>
                    </div>
                    <div className='flex flex-col gap-3 w-full p-2 h-full pl-4 pr-4'>
                        <Link to='/dashboard'
                            className={`w-full flex gap-4 items-center p-1 text-md rounded-lg text-white  hover:bg-[#444444] transition-all ease-in-out duration-100 ${location.pathname === '/dashboard' && 'bg-[#444444]'}`}>
                            <BiGridAlt size={20} />
                            <h3>Dashboard</h3>
                        </Link>
                        <Link to='/dashboard/trabajadores'
                            className={`w-full flex gap-4 items-center p-1 text-md rounded-lg text-white  hover:bg-[#444444] transition-all ease-in-out duration-100 ${location.pathname === '/dashboard/trabajadores' && 'bg-[#444444]'}`}>
                            <FiUser size={20} />
                            <h3>Trabajadores</h3>
                        </Link>
                        <Link to='/dashboard/gestion'
                            className={`w-full flex gap-4 items-center p-1 text-md rounded-lg text-white  hover:bg-[#444444] transition-all ease-in-out duration-100 ${location.pathname === '/dashboard/gestion' && 'bg-[#444444]'}`}>
                            <BiBusSchool size={20} />
                            <h3>Gestion</h3>
                        </Link>
                        <Link to='/dashboard/calendario'
                            className={`w-full flex gap-4 items-center p-1 text-md rounded-lg text-white  hover:bg-[#444444] transition-all ease-in-out duration-100 ${location.pathname === '/dashboard/calendario' && 'bg-[#444444]'}`}>
                            <BiCalendar size={20} />
                            <h3>Calendario</h3>
                        </Link>
                        <Link to='/dashboard/lista'
                            className={`w-full flex gap-4 items-center p-1 text-md rounded-lg text-white  hover:bg-[#444444] transition-all ease-in-out duration-100 ${location.pathname === '/dashboard/lista' && 'bg-[#444444]'}`}>
                            <BiCheck size={20} />
                            <h3>Lista</h3>
                        </Link>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav