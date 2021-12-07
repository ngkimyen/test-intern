import React from 'react';
import mainBanner from '../../Image/main-banner.png';
import classes from './MainBanner.module.scss';

const MainBanner = () => {
   return (
      <div className={classes.mainBanner}>
         <img src={mainBanner} alt='main banner' />
      </div>
   );
};

export default MainBanner;