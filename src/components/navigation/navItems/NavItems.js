import React from 'react'
import NavItem from './navItem/NavItem'

const NavItems = (props) => {

    const linkArray = ["Home", "Summary", "About"];

    return (
        <ul className='NavigationItems'>
            {/* {
                // linkArray.map(link => <NavItem link={link} child={link} />)
                linkArray.map(link => <NavItem link={link} active>
                                        {link}
                                    </NavItem>)
            } */}

            <NavItem link="/home" active> Burger Builder </NavItem>
            <NavItem link="/home" color={ props.color } > Checkout </NavItem>
            
        </ul>
    )
}

export default NavItems
