import clsx from "clsx";
import React from "react";
import classes from "./NewsItem.module.scss";

const NewsItem = ({ isNavigation, title, image, padding, color, width, marginLeft, isMobile, isSmallDesktop }) => {
  let itemStyle={}
  if (!isMobile && !isSmallDesktop) itemStyle={width: width, marginLeft: marginLeft}
  return (
    <div
      className={clsx(classes.newsItem, {
        [classes.isNavigation]: isNavigation,
        [classes.isMobile] : isMobile,
      })}
      style={itemStyle}
    >
      {isNavigation ? (
        <>
          <h4 className={clsx("big-heading", classes.navHeading)}>
            whpn issue
          </h4>
          <img src="./Image/IssuesPage/news-img-01.png" alt="arrow" />
        </>
      ) : (
        <>
          <p
            className={classes.title}
            style={{ padding: !isMobile && padding, background: color }}
          >
            {title}
          </p>
          <img className={classes.image} src={image} />
        </>
      )}
    </div>
  );
};

export default NewsItem;
