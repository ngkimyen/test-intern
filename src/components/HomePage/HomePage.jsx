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
  const { isMobile } = useViewPort();
  return (
    <section className={classes.homePage}>
      <MainBanner isMobile={isMobile} />
      <Introduction isMobile={isMobile} />
      <BestProduct isMobile={isMobile} />
      <ProductPage isMobile={isMobile} />
      <BrandStory isMobile={isMobile} />
      <IssuesPage isMobile={isMobile} />
      <HappenedPage isMobile={isMobile} />
    </section>
  );
};

export default HomePage;
