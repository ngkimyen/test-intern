import React from "react";
import classes from "./BestProductList.module.scss";

import product1 from "../../../Image/best-image-01.png";
import product2 from "../../../Image/best-image-02.png";
import product3 from "../../../Image/best-image-03.png";



import BestItem from "./BestItem";
import clsx from "clsx";

const BestProductList = ({isMobile}) => {
  return (
    <div className={clsx(classes.bestProductList, 'layer-top',{[classes.isMobile]: isMobile}) }>
      <BestItem isMobile={isMobile} icon='./Image/BestProduct/producticon-01.png'  productImage={product1}/>
      <BestItem isMobile={isMobile} icon='./Image/BestProduct/producticon-02.png'  productImage={product2}/>
      <BestItem isMobile={isMobile} icon='./Image/BestProduct/producticon-03.png'  productImage={product3}/>
    
    </div>
  );
};

export default BestProductList;
