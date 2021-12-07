import clsx from "clsx";
import React from "react";
import classes from "./HeaderNavigation.module.scss";

const HeaderNavigation = ({ isOverlay, onClose }) => {
  return (
    <div
      className={clsx(classes.navigationWrap, {
        [classes.isOverlay]: isOverlay,
      })}
    >
      {isOverlay && (
        <button onClick={onClose} className={classes.closeBtn}>
          <i className="fas fa-times"></i>
        </button>
      )}
      <nav className={classes.navigation}>
        <a href="" className={classes.navItem}>
          Introduction
        </a>
        <a href="" className={classes.navItem}>
          Solution
        </a>
        <a href="" className={classes.navItem}>
          Rate plan
        </a>
      </nav>

      <nav className={classes.headerAction}>
        <a href="" className={classes.actionItem}>
          Login
        </a>
        <a href="" className={classes.actionItem}>
          Apply for free use
        </a>
      </nav>
    </div>
  );
};

export default HeaderNavigation;
