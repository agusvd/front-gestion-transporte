import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiBox, FiGrid, FiLogOut, FiClipboard, FiUsers, FiCommand} from "react-icons/fi";

const Sidebar = () => {

    const location = useLocation()

    return (
        <div className=''>
            <div className={`font-primary bg-[#171717] text-black transition-all ease-in-out w-[300px] m-2 rounded-2xl h-screen`}>
                <div className='flex flex-col justify-between h-screen'>
                    <div className='flex flex-col'>
                        <div className='m-4 flex items-center gap-2'>
                            <FiBox size={20} className='text-white' />
                            <h2 className='text-white'>Methanex</h2>
                        </div>
                        <div>
                            <Link to='/dashboard'>
                                <div className={`flex items-center gap-4 m-4 rounded-xl p-2 text-white hover:bg-[#272829] duration-300 ease-in-out ${location.pathname === '/dashboard' && 'bg-[#272829]'}`}>
                                    <FiGrid size={25} />
                                    <h2>Dashboard</h2>
                                </div>
                            </Link>
                            <Link to='/dashboard/reportes'>
                                <div className={`flex items-center gap-4 m-4 rounded-xl p-2 text-white hover:bg-[#272829] duration-300 ease-in-out ${location.pathname === '/dashboard/reportes' && 'bg-[#272829]'}`}>
                                    <FiClipboard size={25} />
                                    <h2>Reportes</h2>
                                </div>
                            </Link>
                            <Link to='/dashboard/trabajadores'>
                                <div className={`flex items-center gap-4 m-4 rounded-xl p-2 text-white hover:bg-[#272829] duration-300 ease-in-out ${location.pathname === '/dashboard/trabajadores' && 'bg-[#272829]'}`}>
                                    <FiUsers size={25} />
                                    <h2>Trabajadores</h2>
                                </div>
                            </Link>
                            <Link to='/dashboard/gestión'>
                                <div className={`flex items-center gap-4 m-4 rounded-xl p-2 text-white hover:bg-[#272829] duration-300 ease-in-out ${location.pathname === '/dashboard/gestión' && 'bg-[#272829]'}`}>
                                    <FiCommand size={25} />
                                    <h2>Gestión</h2>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className='h-[80px] m-2'>
                        <div className='flex justify-between items-center w-full h-full p-2'>
                            <div className='flex items-center gap-4'>
                                <img className='rounded-full w-[40px] h-[40px]' src="https://picsum.photos/id/27/367/267" alt='Avatar' />
                                <div>
                                    <h2 className='text-md text-white'>Administrador</h2>
                                </div>
                            </div>
                            <button className='flex'>
                                <FiLogOut size={30} className='text-red-500' />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;
