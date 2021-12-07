import clsx from "clsx";
import React from "react";
import FooterCredit from "./FooterCredit";
import FooterWrapper from "./FooterWrapper";
import classes from "./HappenedFooter.module.scss";

const HappenedFooter = ({isMobile}) => {
  return (
    <div className={clsx(classes.happenedFooter, {[classes.isMobile] : isMobile})}>
      <FooterWrapper isMobile={isMobile}/>
      <FooterCredit isMobile={isMobile}/>
    </div>
  );
};

export default HappenedFooter;
