import { Title, Subtitle, Bold, Italic, Text } from '@tremor/react'

const Layout = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <header className='container-layout flex-centre'>
                <Title>Space X</Title>
            </header>
            <main className='flex-centre'>{children}</main>
            <footer>footer</footer>
        </div>
    )
}

export default Layout
