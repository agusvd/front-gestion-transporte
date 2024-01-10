import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt, BiCar, BiCheckCircle } from "react-icons/bi";

const NavMobileTransporte = () => {
    return (
        <div className='sticky bottom-0'>
            <div className='flex w-full justify-around bg-gray-200'>
                <Link className=''>
                    <BiCar size={40} className='text-black' />
                </Link>
                <Link className=''>
                    <BiHomeAlt size={40} className='text-black' />
                </Link>
                <Link className=''>
                    <BiCheckCircle size={40} className='text-black' />
                </Link>
            </div>
        </div>
    )
}

export default NavMobileTransporte