import clsx from "clsx";
import React from "react";
import classes from "./HeaderContent.module.scss";

const HeaderContent = ({
  isMobile,
  isSmallDesktop,
  className,
  title,
  content,
  isSmallContent,
  contentWidth,
  color,
  marginTop,
}) => {
  return (
    <div
      className={clsx(classes.header, className, {
        [classes.isMobile]: isMobile,
        [classes.isSmallDesktop] : isSmallDesktop
      })}
      style={{ color: color, marginTop: (!isSmallDesktop && !isMobile) && marginTop }}
    >
      <h3
        className={clsx("big-heading", classes.heading, {
          "big-heading-mobile": isMobile,
        })}
      >
        {title}
      </h3>
      <p
        className={clsx("big-content", classes.content, {
          [classes.smallContent]: !isMobile && isSmallContent,
          "big-content-mobile": isMobile,
        })}
        style={{ width: !isMobile && contentWidth }}
      >
        {content}
      </p>
    </div>
  );
};

export default HeaderContent;
