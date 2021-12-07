import clsx from "clsx";
import React from "react";
import classes from "./SeeMoreBtn.module.scss";

const SeeMoreBtn = ({ isMobile, isSmall }) => {
  return (
    <button
      className={clsx(classes.seeMore, {
        [classes.isSmall]: isSmall,
        [classes.isMobile]: isMobile,
      })}
    >
      SEE MORE
    </button>
  );
};

export default SeeMoreBtn;
