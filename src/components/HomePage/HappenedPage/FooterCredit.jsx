import clsx from "clsx";
import React from "react";
import classes from "./FooterCredit.module.scss";

const FooterCredit = ({ isMobile}) => {
  return (
    <div className={clsx(classes.footerCredit, {[classes.isMobile] : isMobile })}>
      <p className={classes.text}>
        © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
        사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
        서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
        이용약관 l 개인정보처리방침
      </p>
      <span className={classes.snsIcon}>
        <a href="" className={classes.icon}>
          <img src="./Image/Footer/snsicon-01.png" alt="sns icon" />
        </a>
        <a href="" className={classes.icon}>
          <img src="./Image/Footer/snsicon-02.png" alt="sns icon" />
        </a>
        <a href="" className={classes.icon}>
          <img src="./Image/Footer/snsicon-03.png" alt="sns icon" />
        </a>
      </span>
    </div>
  );
};

export default FooterCredit;
