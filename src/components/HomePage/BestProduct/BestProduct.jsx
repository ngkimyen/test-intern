import classes from "./BestProduct.module.scss";
import background from "../../../Image/bes-bg.png";

import BestProductList from "./BestProductList";
import HeaderContent from "../../UI/HeaderContent";
import clsx from "clsx";

const BestProduct = ({isMobile}) => {
  return (
    <div className={clsx(classes.bestProduct, {[classes.isMobile]: isMobile})}>
      <div className={classes.backgroundWrapper}>
        <img className={classes.backgroundImage} src={background} />
        <HeaderContent
          isMobile={isMobile}
          className='layer-top'
          marginTop= {isMobile ? '20px' : '150px'}
          color="var(--primary-color)"
          title="Best Product"
          content="How to create mobile-optimized videos in minutes. Not a designer, 
        every team makes a lot of videos Can be trimmed. Take the first "
        />
        <BestProductList isMobile={isMobile}/>
      </div>
    </div>
  );
};

export default BestProduct;
