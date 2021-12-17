import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import SideDrawer from '../navigation/sideDrawer/SideDrawer';
import ToolBar from '../navigation/ToolBar';

const Layout = (props) => {

    // const [toggleSideBar, setToggleSideBar] = useState(false);

    // const toggleSideBarHandler = () => {
    //     setToggleSideBar (!toggleSideBar)
    //     console.log(toggleSideBar)
    // }

    return (
        <Aux>
            {/* <nav>ToolBar</nav> */}
            <ToolBar passtogglestateDown={props.passtogglestateDown} />
            {/* <aside>SideBar</aside> */}
            <SideDrawer 
                passtogglestateDown={props.passtogglestateDown} 
                passtogglestate={props.passtogglestate}
                passdropshadowState={props.passdropshadowState} />
            <main className='Content'>
                { props.children }
            </main>
        </Aux>
    )
}

export default Layout
