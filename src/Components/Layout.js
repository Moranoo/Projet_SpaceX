import React from 'react'
import Routeur from '../Router/Routeur'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <h1>Dragon's Crew</h1>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer>&copy; 2023 IPSSI SQY</footer>
        </>
    )
}

export default Layout
