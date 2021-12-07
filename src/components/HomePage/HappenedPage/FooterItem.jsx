import clsx from 'clsx';
import React from 'react';
import classes from './FooterItem.module.scss'

const FooterItem = ({isMobile,heading, content, width, marginRight, isCenter}) => {
   let style={};
   if (!isMobile) style={width:width, marginRight:marginRight}
   return (
      <div className={clsx(classes.footerItem, {[classes.isMobile] : isMobile, [classes.isCenter] : isCenter})} style={style}>
         <h4 className={classes.heading}>{heading}</h4>
         <p>{content}</p>
      </div>
   );
};

export default FooterItem;