import clsx from "clsx";
import React from "react";
import HeaderContent from "../../UI/HeaderContent";
import SeeMoreBtn from "../../UI/SeeMoreBtn";
import classes from "./BrandStory.module.scss";

const BrandStory = ({ isMobile }) => {
  return (
    <div className={clsx(classes.brandStory, { [classes.isMobile]: isMobile })}>
      <HeaderContent
        title="Brand Story"
        content="모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
         다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
        isSmallContent
        contentWidth="682px"
        color="var(--light-yellow-color)"
        isMobile={isMobile}
      />
      <div className={classes.contentWrapper}>
        <img src="./Image/BrandStory/window.png" />
        <div className={classes.contentContainer}>
          <h4 className={clsx("medium-heading", classes.heading)}>
            What Happened’s Brand story
          </h4>
          {!isMobile && (
            <p className={classes.content}>
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.{" "}
            </p>
          )}

          <SeeMoreBtn isSmall />
        </div>
      </div>
      {!isMobile && (
        <>
          <div className={classes.line}></div>
          <img
            className={clsx(classes.bookShelf, classes.svg)}
            src="./Image/BrandStory/object-06.png"
            alt="book shelf"
          />
          <img
            className={clsx(classes.book, classes.svg)}
            src="./Image/BrandStory/object-07.png"
            alt="book"
          />
          <img
            className={clsx(classes.note, classes.svg)}
            src="./Image/BrandStory/object-01.png"
            alt="note"
          />
          <img
            className={clsx(classes.picture, classes.svg)}
            src="./Image/BrandStory/object-02.png"
            alt="picture"
          />
          <img
            className={clsx(classes.plan, classes.svg)}
            src="./Image/BrandStory/object-03.png"
            alt="plan"
          />
          <img
            className={clsx(classes.vase, classes.svg)}
            src="./Image/BrandStory/object-04.png"
            alt="vase"
          />
          <img
            className={clsx(classes.calendar, classes.svg)}
            src="./Image/BrandStory/object-05.png"
            alt="calendar"
          />
        </>
      )}
    </div>
  );
};

export default BrandStory;
