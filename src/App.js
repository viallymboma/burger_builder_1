
import React, { useState } from 'react';
import './assets/css/style.css';
import Layout from './components/layout/Layout';
import Burgerbuilder from './containers/burger_builder/BurgerBuilder';

function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [toggleDropshadow, setToggleDropshadow] = useState(false)

  const toggleSideBarHandler = () => {
      setToggleSideBar (!toggleSideBar);
      setToggleDropshadow (!toggleDropshadow)
      console.log(toggleSideBar)
  }

  const toggleDropshadowHandler = () => {
    setToggleDropshadow (!toggleDropshadow)
  }

  return (
    <div className='OverAllContainer'>
      <Layout 
        passtogglestateDown={toggleSideBarHandler}
        passtogglestate={toggleSideBar}
        passdropshadowState={toggleDropshadow} >
        <Burgerbuilder passtogglestate={toggleSideBar} />
      </Layout>
    </div>
  );
}

export default App;
