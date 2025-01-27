import Logo from './logo'
import React from 'react'
import Search from './search'
import Profile from './profile'

export default function Navbar() {
    return (
        <nav className='p-6 border-b'>
            <div className='flex justify-between items-center'>
                <Logo />
                <Search />
                <Profile />
            </div>
        </nav>
    )
}