import clsx from "clsx";
import React from "react";
import HeaderContent from "../../UI/HeaderContent";
import SeeMoreBtn from "../../UI/SeeMoreBtn";
import classes from "./IssuesPage.module.scss";
import NewsList from "./NewsList";

const IssuesPage = ({ isMobile }) => {
  return (
    <div className={clsx(classes.issuesPage, {[classes.isMobile] : isMobile})}>
      <HeaderContent
      isMobile={isMobile}
        title="Happened’s issue"
        content="모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요."
        color="var(--dark-brown-color)"
        isSmallContent
      />
      <SeeMoreBtn isMobile={isMobile}/>
      <NewsList isMobile={isMobile}/>
      <img
            className={clsx(classes.icon, classes.object4, {[classes.isMobile]: isMobile})}
            src="./Image/IssuesPage/news-object-04.png"
          />
      {!isMobile && (
        <>
          <img
            className={clsx(classes.icon, classes.object6)}
            src="./Image/IssuesPage/news-object-06.png"
          />
          <img
            className={clsx(classes.icon, classes.object5)}
            src="./Image/IssuesPage/news-object-05.png"
          />
        
          <img
            className={clsx(classes.icon, classes.object3)}
            src="./Image/IssuesPage/news-object-03.png"
          />
          <img
            className={clsx(classes.icon, classes.object2)}
            src="./Image/IssuesPage/news-object-02.png"
          />
        </>
      )}
    </div>
  );
};

export default IssuesPage;
