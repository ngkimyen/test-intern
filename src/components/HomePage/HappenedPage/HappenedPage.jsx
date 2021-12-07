import clsx from "clsx";
import React from "react";
import HeaderContent from "../../UI/HeaderContent";
import SeeMoreBtn from "../../UI/SeeMoreBtn";
import HappenedFooter from "./HappenedFooter";
import classes from "./HappenedPage.module.scss";

const HappenedPage = ({ isMobile }) => {
  return (
    <div
      className={clsx(classes.happenedPage, { [classes.isMobile]: isMobile })}
    >
      <div className={classes.happenedHeader}>
        <HeaderContent
          isMobile={isMobile}
          title="what happened"
          content="How to create mobile-optimized videos in minutes. Not a designer, 
         every team makes a lot of videos Can be trimmed. Take the first "
        />

        <SeeMoreBtn isMobile={isMobile} />
        <img
          className={clsx({ [classes.image]: !isMobile }, classes.videoImg)}
          src="./Image/HappenedPage/video.png"
        />
        {!isMobile && (
          <>
            <img
              className={clsx(classes.image, classes.object1)}
              src="./Image/HappenedPage/video-object-01.png"
            />
          <img
            className={clsx(classes.image, classes.object2)}
            src="./Image/HappenedPage/video-object-02.png"
          />

            <img
              className={clsx(classes.image, classes.object3)}
              src="./Image/HappenedPage/video-object-03.png"
            />
            <img
              className={clsx(classes.image, classes.object4)}
              src="./Image/HappenedPage/video-object-04.png"
            />
            <img
              className={clsx(classes.image, classes.object5)}
              src="./Image/HappenedPage/video-object-05.png"
            />
            <img
              className={clsx(classes.image, classes.object6)}
              src="./Image/HappenedPage/video-object-06.png"
            />
            <img
              className={clsx(classes.image, classes.object7)}
              src="./Image/HappenedPage/video-object-07.png"
            />
            <img
              className={clsx(classes.image, classes.object8)}
              src="./Image/HappenedPage/video-object-08.png"
            />
            <img
              className={clsx(classes.image, classes.object9)}
              src="./Image/HappenedPage/video-object-09.png"
            />
          </>
        )}
      </div>
      <HappenedFooter isMobile={isMobile}/>
    </div>
  );
};

export default HappenedPage;
