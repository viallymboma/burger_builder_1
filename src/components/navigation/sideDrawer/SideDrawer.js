import React, { useState } from 'react'
import Aux from '../../../hoc/Aux';
import Logo from '../../logo/Logo'
import Backdrop from '../../ui/backdrop/Backdrop';
import NavItems from '../navItems/NavItems'

const SideDrawer = (props) => {
    console.log("Side Nav toggle: ", props.passtogglestate);
    // console.log(props.passtogglestateDown)

    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow (!show)
    }
    const turnall = () => {
        props.passtogglestateDown();
        setShow (false);
    }

    return (
        <Aux>
            <Backdrop show={props.passdropshadowState} clicked={props.passtogglestateDown} />
            <div className={props.passtogglestate ? `SideDrawer Open` : `SideDrawer Close` }>
                <div className='CloseIt' onClick={() => turnall()}>X</div>
                {/* <div className='LogoContainer'>
                    <Logo />
                </div> */}
                <Logo height="10%" />
                <nav className='SideNavItemWrapper'>
                    <NavItems color="black" />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer
