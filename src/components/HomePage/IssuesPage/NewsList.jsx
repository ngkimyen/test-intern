import clsx from "clsx";
import React from "react";
import NewsItem from "./NewsItem";
import classes from "./NewsList.module.scss";

const NewsList = ({isMobile}) => {
  return (
    <div className={clsx(classes.newsList, {[classes.isMobile] : isMobile})}>
     {!isMobile && <NewsItem isNavigation width='387px'/>}
      <NewsItem
        title="B BRAND"
        image="./Image/IssuesPage/news-img-04.png"
        padding="16px 125px 17px 105px"
        width='390px'
        isMobile={isMobile}
      />
       <NewsItem
        title="C BRAND"
        image="./Image/IssuesPage/news-img-03.png"
        padding="16px 115px 17px 113px"
        width='390px'
        isMobile={isMobile}

      />
      <NewsItem
        title="D BRAND"
        image="./Image/IssuesPage/news-img-04.png"
        padding="16px 115px 17px 113px"
        color="var(--bright-orange-color)"
        width='390px'
        marginLeft= '-7px'
        isMobile={isMobile}

      />
      <NewsItem
        title="E BRAND"
        image="./Image/IssuesPage/news-img-05.png"
        padding="16px 110px 17px 110px"
        width='383px'
        isMobile={isMobile}

      />
    </div>
  );
};

export default NewsList;
