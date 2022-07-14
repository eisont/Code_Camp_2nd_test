// Header Presenter

import * as S from "./Header.styles";
import Script from "next/script";
import { PointComma } from "../../../../commons/libraries/point";

export const HeaderUI = (props: any) => {
  

  return (
    <>
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      {/* <!-- iamport.payment.js --> */}
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      <S.Wrapper>
        <S.LeftBox>
          <S.RBox onClick={props.onClickMain} src="/image/blacklogo.png"></S.RBox>
          {/* <LoginUserbar /> */}
          <S.LBox>
            <S.Img src="/image/sell.png" />
            <S.SellBt onClick={props.onClickSell}>판매하기</S.SellBt>
          </S.LBox>
        </S.LeftBox>
        <S.RightBox>
          {props.loggedIn?.fetchUserLoggedIn._id ? (
            <>
              <S.Point>
                <S.Text>
                  {props.loggedIn?.fetchUserLoggedIn?.name}{" "}
                  <S.PointNum>
                    {PointComma(props.loggedIn?.fetchUserLoggedIn?.userPoint?.amount)}
                  </S.PointNum>
                  P 님의 포인트{" "}
                </S.Text>
              </S.Point>
              <S.Menu>
                <S.MenuBt onClick={props.onClickPoint}>충전</S.MenuBt>
              </S.Menu>
              <S.Menu>
                <S.MenuBt onClick={props.onClickLogout}>로그아웃</S.MenuBt>
              </S.Menu>
            </>
          ) : (
            <>
              <S.Menu>
                <S.MenuBt onClick={props.onClickLogin}>로그인</S.MenuBt>
              </S.Menu>
              <S.Menu>
                <S.MenuBt onClick={props.onClickSignup}>회원가입</S.MenuBt>
              </S.Menu>
            </>
          )}
          <S.MenuBasketBt>
            찜<S.BasketNum>{props.data?.fetchUseditemsCountIPicked}</S.BasketNum>
          </S.MenuBasketBt>
          <S.MenuBasketBt>
            장바구니<S.BasketNum>{props.basketCount}</S.BasketNum>
          </S.MenuBasketBt>
        </S.RightBox>
      </S.Wrapper>
    </>
  );
}

export default HeaderUI