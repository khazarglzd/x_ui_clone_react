import React from 'react'
import Footer from './footer'
import Premium from './premium'
import Search from './search'
import Topics from './topics'
import StickyBox from "react-sticky-box";


const RightSideBar = () => {
    return (
        <StickyBox className='self-start' offsetBottom={80}>
            <aside className="w-[350px] mr-2.5">
                <Search />
                <Premium />
                <Topics />
                <Footer />
            </aside>
        </StickyBox>

    )
}

export default RightSideBar