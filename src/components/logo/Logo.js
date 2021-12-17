import React from 'react';
import logo from "../../assets/images/logo.png"

const Logo = (props) => {
    return (
        <div className='Logo' style={{ height: props.height }}>
            <img src={logo} alt='Burger Logo' />
        </div>
    )
}

export default Logo
