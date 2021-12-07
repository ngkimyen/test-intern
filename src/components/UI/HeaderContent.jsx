import clsx from "clsx";
import React from "react";
import classes from "./HeaderContent.module.scss";

const HeaderContent = ({
  isMobile,
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
      })}
      style={{ color: color, marginTop: marginTop }}
    >
      <h3
        className={clsx("big-heading", classes.heading, {
          ["big-heading-mobile"]: isMobile,
        })}
      >
        {title}
      </h3>
      <p
        className={clsx("big-content", classes.content, {
          [classes.smallContent]: !isMobile && isSmallContent,
          ["big-content-mobile"]: isMobile,
        })}
        style={{ width: contentWidth }}
      >
        {content}
      </p>
    </div>
  );
};

export default HeaderContent;
