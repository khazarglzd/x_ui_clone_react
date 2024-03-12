import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const LeftSideBar = () => {
    return (
        <aside className="w-[275px] min-h-screen px-2">
            <Logo />
            <Menu />
        </aside>
    )
}

export default LeftSideBar