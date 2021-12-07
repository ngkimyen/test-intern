import React from "react";
import useViewPort from "../../custom hooks/useViewPort";
import BestProduct from "./BestProduct/BestProduct";
import BrandStory from "./BrandStory/BrandStory";
import HappenedPage from "./HappenedPage/HappenedPage";
import classes from "./HomePage.module.scss";
import Introduction from "./Introduction";
import IssuesPage from "./IssuesPage/IssuesPage";
import MainBanner from "./MainBanner";
import ProductPage from "./ProductPage/ProductPage";

const HomePage = () => {
  const { isMobile, isSmallDesktop } = useViewPort();
  return (
    <section className={classes.homePage}>
      <MainBanner />
      <Introduction isMobile={isMobile} isSmallDesktop={isSmallDesktop}/>
      <BestProduct isMobile={isMobile} isSmallDesktop={isSmallDesktop}/>
      <ProductPage isMobile={isMobile} isSmallDesktop={isSmallDesktop}/>
      <BrandStory isMobile={isMobile} isSmallDesktop={isSmallDesktop}/>
      <IssuesPage isMobile={isMobile} isSmallDesktop={isSmallDesktop}/>
      <HappenedPage isMobile={isMobile} isSmallDesktop={isSmallDesktop}/>
    </section>
  );
};

export default HomePage;
