import React, { Fragment } from 'react';
import Navbar from '../navbar/Navbar';
import { getAppVersion } from '../../utils/utils';
import './Home.css';


const Home = () => {
   return(
      <Fragment>
         <Navbar />
         <div id="Home">
          <h1>This is Home page</h1>
          <p>App version: {getAppVersion()}</p>
         </div>
      </Fragment>
   )
}


export default Home;