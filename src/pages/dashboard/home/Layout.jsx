import React from 'react'
import Sidebar from '../../../components/nav/Sidebar'
import Home from './home'


const Layout = () => {
    return (
        <div className='flex bg-white w-full'>
            <Sidebar />
            <Home />
        </div>
    )
}

export default Layout