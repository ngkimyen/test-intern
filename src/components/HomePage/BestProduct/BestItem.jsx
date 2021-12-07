import clsx from "clsx";
import React from "react";
import goIcon from "../../../Image/go-icon.png";

import classes from "./BestItem.module.scss";

const BestItem = ({ productImage, icon, isMobile }) => {
  return (
    <div
      className={clsx(classes.bestProductItem, {
        [classes.isMobile]: isMobile,
      })}
    >
      <div className={classes.productIcon}>
        <img src={icon} alt="best product icon" />
      </div>
      <img src={productImage} />
      <div className={classes.description}>
       { !isMobile && <p className={clsx("big-content", classes.content)}>
          How to create mobile-optimized
        </p>}
        <button className={classes.goIcon}>
          <img src={goIcon} alt="go icon" />
        </button>
      </div>
    </div>
  );
};

export default BestItem;
