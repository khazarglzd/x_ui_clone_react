import React from 'react'
import LeftSideBar from './leftsidebar'
import { Outlet } from 'react-router-dom'
import RightSideBar from './rightsidebar'

const MainLayout = () => {
    return (
        <div className='w-[1256px] mx-auto flex'>
            <LeftSideBar />
            <main className="flex-1 flex gap-[30px]">
                <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
                    <Outlet />
                </main>
                <RightSideBar />
            </main>
        </div>
    )
}

export default MainLayout