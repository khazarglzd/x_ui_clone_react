import React from 'react'
import Footer from './footer'
import Premium from './premium'
import Search from './search'
import Topics from './topics'


const RightSideBar = () => {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
            <Footer />

        </aside>
    )
}

export default RightSideBar