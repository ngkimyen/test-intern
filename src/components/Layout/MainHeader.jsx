import React, { useState } from "react";
import classes from "./MainHeader.module.scss";
import logo from "../../Image/logo.png";
import useViewPort from "../../custom hooks/useViewPort";
import clsx from "clsx";
import HeaderNavigation from "./HeaderNavigation";
import Modal from "../UI/Modal";

const MainHeader = () => {
  const { isMobile, isSmallDesktop } = useViewPort();
  const [click, setClick] = useState();

  const handleClick = () => {
    setClick(true);
    document.body.style.overflow = 'hidden';
  }

  const handleClose = () => {
    setClick(false);
    document.body.style.overflow = 'unset';

  }

  return (
    <header
      className={clsx(classes.mainHeader, { [classes.isMobile]: isMobile })}
    >
      <img src={logo} alt="logo header" className={classes.logo} />
      {!isMobile && !isSmallDesktop ? (
        <HeaderNavigation isMobile={isMobile || isSmallDesktop} />
      ) : click && (
        <Modal overlay={<HeaderNavigation isOverlay onClose={handleClose}/>} onClose={handleClose}/>
      )}
      {(isMobile || isSmallDesktop) && !click && (
        <button onClick={handleClick}>
          <i className={clsx("fas fa-bars", classes.navIcon)}></i>
        </button>
      )}
    </header>
  );
};

export default MainHeader;
