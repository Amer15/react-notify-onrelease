import React, { Fragment } from 'react';
import Navbar from '../navbar/Navbar';
import packageJson from '../../../package.json';
import { getBuildDate } from '../../utils/utils';
import './Home.css';


const Home = () => {
   return(
      <Fragment>
         <Navbar />
         <div id="Home">
          <h1>This is Home page</h1>
          <p>Build date: {getBuildDate(packageJson.buildDate)}</p>
         </div>
      </Fragment>
   )
}


export default Home;