import React from 'react'
import { SearchBar, SideCategories, SidePopularBets } from './'

const Sidebar = () => {
    return (
        <div className='sidebar-over'>
            <div className='sidebar-container'>
                <SearchBar />
                <SidePopularBets />
                <SideCategories />
            </div>
        </div>
    )
}

export default Sidebar
