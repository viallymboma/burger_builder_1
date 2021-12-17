import React from 'react'
import Logo from '../logo/Logo'
import NavItems from './navItems/NavItems'

const ToolBar = (props) => {
    return (
        <header className='Toolbar'>
            <div onClick={props.passtogglestateDown}>MENU</div>
            {/* <div>LOGO</div> */}
            <Logo height="70%" />
            {/* <nav>
                ...
            </nav> */}
            <NavItems />
        </header>
    )
}

export default ToolBar
