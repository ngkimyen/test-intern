import React from "react";
import MainHeader from "./MainHeader";
import classes from './Layout.module.scss';
import useViewPort from "../../custom hooks/useViewPort";
import clsx from "clsx";

const Layout = ({ children }) => {
  const {isMobile} = useViewPort()
  return (
    <>
      <MainHeader />
      <main className={clsx(classes.mainWrapper, {[classes.isMobile] : isMobile})}>{children}</main>
    </>
  );
};

export default Layout;
