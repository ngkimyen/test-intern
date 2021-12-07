import React from "react";
import classes from "./Introduction.module.scss";
import introBg from "../../Image/introduction-bg.png";
import clsx from "clsx";

const Introduction = ({ isMobile }) => {
  return (
    <div className={clsx(classes.introduction, {[classes.isMobile] : isMobile})}>
      <div className={classes.backgroundWrapper}>
        <img className={classes.backgroundImage} src={introBg} />
        <div
          className={clsx(classes.contentWrapper, {
            [classes.isMobile]: isMobile,
          })}
        >
          <h3
            className={clsx(classes.introductionHeading, "big-heading", {
              ["big-heading-mobile"]: isMobile,
            })}
          >
            What Happened!
          </h3>
          <p
            className={clsx(classes.content, "big-content", {
              ["big-content-mobile"]: isMobile,
            })}
          >
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand's success. How to create mobile-optimized videos in
            minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
