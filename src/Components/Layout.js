import React from 'react'
import Routeur from '../Router/Routeur'

const Layout = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <header className='container-layout flex-centre'>
                <title>Space X</title>
            </header>
            <main className='flex-centre'>{children}</main>
            <footer>footer</footer>
        </div>
    )
}

export default Layout
