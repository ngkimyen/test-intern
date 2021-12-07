import clsx from 'clsx';
import React from 'react';
import FooterItem from './FooterItem';
import classes from "./FooterWrapper.module.scss";

const FooterWrapper = ({ isMobile}) => {
   return (
      <div className={clsx(classes.footerWrapper, {[classes.isMobile] : isMobile })}>
      <span>
        <FooterItem
          width="235px"
          heading="what happened"
          content="[공지] 개인 정보 처리 방침 변경 사전 안내
[공지] 29CM 강남 스토어 영업 종료
[공지] 개인 정보 처리 방침 변경 사전 안내
[공지] iOS 10 이하 버전 지원 중단 안내
[공지] 개인 정보 처리 방침 변경 사전 안내"
        />
      </span>
      <span className={classes.footerNavigation}>
        <FooterItem
        isMobile={isMobile}
          heading="about us"
          content="회사 소개
인재 채용
상시 할인 혜택"
          width="82px"
          marginRight="100px"
        />
        <FooterItem
        isMobile={isMobile}
          heading="my order"
          content="내 주문
주문 배송
취소 / 교환 / 반품 내역
상품 리뷰 내역
증빙 서류 발급"
          width="128px"
          marginRight="97px"
        />
        <FooterItem
        isMobile={isMobile}
          heading="my account"
          content="회원 정보 수정
회원 등급
마일리지 현황
쿠폰"
          width="90px"
          marginRight="116px"
        />
        <FooterItem
        isMobile={isMobile}
          heading="help"
          content="1 : 1 상담 내역
상품 Q & A 내역
공지 사항
자주하는 질문
고객의 소리"
          width="91px"
        />
      </span>
    </div>
   );
};

export default FooterWrapper;