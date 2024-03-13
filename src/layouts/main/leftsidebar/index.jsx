import React from 'react'
import Logo from '../leftsidebar/logo/index'
import Menu from '../leftsidebar/menu/index'

const LeftSideBar = () => {
    return (
        <aside className="w-[275px] min-h-screen px-2">
            <Logo />
            <Menu />
        </aside>
    )
}

export default LeftSideBar