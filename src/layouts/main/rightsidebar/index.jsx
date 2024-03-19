import React from 'react'
import Premium from './premium'
import Search from './search'

const RightSideBar = () => {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />

        </aside>
    )
}

export default RightSideBar