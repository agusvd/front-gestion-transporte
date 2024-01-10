import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavbarNormal = () => {


    return (
        <div className='h-screen font-primary'>
            <div className='border-2 h-screen w-[120px] bg-gray-100'>
                <div className="flex items-center gap-2 px-1 py-3">
                    <span className="text-xl p-2 text-black hover:text-[#00a6ce] font-bold">Methanex</span>
                </div>
                <div className='py-4 flex flex-1 flex-col gap-4 m-2'>
                    <Link className='text-md text-black hover:text-[#00a6ce]'>Inicio</Link>
                    <Link className='text-md text-black hover:text-[#00a6ce]'>Reportes</Link>
                    <Link className='text-md text-black hover:text-[#00a6ce]'>Transporte</Link>
                    <Link className='text-md text-black hover:text-[#00a6ce]'>Panel</Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarNormal;
