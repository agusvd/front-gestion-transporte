import React from 'react'
import Sidebar from '../../../components/nav/Sidebar'
import Managment from './Managment'

const Layout = () => {
    return (
        <div className='flex bg-white w-full'>
            <Sidebar />
            <Managment/>
        </div>
    )
}

export default Layout