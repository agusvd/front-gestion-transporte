import React from 'react'
import Sidebar from '../../../components/nav/Sidebar'
import Employees from './Employees'

const Layout = () => {
    return (
        <div className='flex bg-white w-full'>
            <Sidebar />
            <Employees />
        </div>
    )
}

export default Layout