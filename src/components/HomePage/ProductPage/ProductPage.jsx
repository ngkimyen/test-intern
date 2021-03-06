import React from "react";
import classes from "./ProductPage.module.scss";

import ProductItem from "./ProductItem";
import ProductItemList from "./ProductImageList";
import SeeMoreBtn from "../../UI/SeeMoreBtn";
import clsx from "clsx";

const ProductPage = ({isMobile , isSmallDesktop}) => {
  
  return (
    <div className={clsx(classes.productPage, {[classes.isMobile] : isMobile, [classes.isSmallDesktop] : isSmallDesktop})}>
      <div className={classes.productList}>
        {ProductItemList.map((img, index) => (
          <ProductItem key={index} image={img} isMobile={isMobile} isSmallDesktop={isSmallDesktop}/>
          ))}
      </div>
         <SeeMoreBtn  isMobile={isMobile}/>

    </div>
  );
};

export default ProductPage;
