import React from 'react';
import classes from './ProductItem.module.scss';

import heartIcon from '../../../Image/hearticon.png';
import clsx from 'clsx';

const ProductItem = ({image, isMobile, isSmallDesktop}) => {
   return (
      <div className={clsx(classes.productItem, {[classes.isMobile] : isMobile, [classes.isSmallDesktop] : isSmallDesktop})}>
         <img className={classes.productImage} src={image} />
         <h3 className={classes.title}>[what happen] How to create </h3>
         <span className={classes.info}>
            <p className={classes.price}>2,500 won</p>
            <span className={classes.likes}>
               <img  src={heartIcon} />
               236
            </span>
         </span>
      </div>
   );
};

export default ProductItem;