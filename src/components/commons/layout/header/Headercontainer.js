// 헤더 container

import * as S from "./Headerstyles";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { BasketCountState } from "../../../../commons/store";
import { useEffect, useState } from "react";
import Script from "next/script";
import { PointComma } from "../../../../commons/libraries/point";

// 찜하기
const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
// 회원정보 확인
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
      createdAt
    }
  }
`;

// 포인트 충전
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;

// 로그아웃
const LOGOUTUSER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const [chargePrice] = useState(100);
  const [basketCount, setBasketCount] = useRecoilState(BasketCountState);
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS_COUNT_IPICKED);
  const { data: loggedIn } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const onClickMain = () => {
    router.push("/");
  };

  const onClickSell = () => {
    router.push("/markets/new");
  };

  // login 하러가기
  const onClickLogin = () => {
    router.push("../login");
  };

  const [logoutUser] = useMutation(LOGOUTUSER);

  const onClickLogout = async () => {
    try {
      await logoutUser();
      location.reload();
    } catch (error) {
      alert(error.message);
    }
  };
  // 회원가입 하러 가기
  const onClickJoin = () => {
    router.push("../join");
  };

  useEffect(() => {
    setBasketCount(JSON.parse(localStorage.getItem("baskets") || "[]").length);
  });

  // 충전
  const onClickPoint = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp48430943
    // IMP.request_pay(param, callback) // 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: chargePrice,
        buyer_email: "rlaclgns321@naver.com",
        buyer_name: `${loggedIn?.fetchUserLoggedIn?.name}`,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/",
      },
      (rsp) => {
        console.log(rsp);
        // callback
        if (rsp.success) {
          createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          alert("충전 완료!");
        } else {
          // 결제 실패 시 로직
          alert(rsp.error_msg);
        }
      }
    );
  };

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
          <S.RBox onClick={onClickMain} src="/image/blacklogo.png"></S.RBox>
          {/* <LoginUserbar /> */}
          <S.LBox>
            <S.Img src="/image/sell.png" />
            <S.SellBt onClick={onClickSell}>판매하기</S.SellBt>
          </S.LBox>
        </S.LeftBox>
        <S.RightBox>
          {loggedIn?.fetchUserLoggedIn._id ? (
            <>
              <S.Point>
                <S.Text>
                  {loggedIn?.fetchUserLoggedIn?.name}{" "}
                  <S.PointNum>
                    {PointComma(loggedIn?.fetchUserLoggedIn?.userPoint?.amount)}
                  </S.PointNum>
                  P 님의 포인트{" "}
                </S.Text>
              </S.Point>
              <S.Menu>
                <S.MenuBt onClick={onClickPoint}>충전</S.MenuBt>
              </S.Menu>
              <S.Menu>
                <S.MenuBt onClick={onClickLogout}>로그아웃</S.MenuBt>
              </S.Menu>
            </>
          ) : (
            <>
              <S.Menu>
                <S.MenuBt onClick={onClickLogin}>로그인</S.MenuBt>
              </S.Menu>
              <S.Menu>
                <S.MenuBt onClick={onClickJoin}>회원가입</S.MenuBt>
              </S.Menu>
            </>
          )}
          <S.MenuBasketBt>
            찜<S.BasketNum>{data?.fetchUseditemsCountIPicked}</S.BasketNum>
          </S.MenuBasketBt>
          <S.MenuBasketBt>
            장바구니<S.BasketNum>{basketCount}</S.BasketNum>
          </S.MenuBasketBt>
        </S.RightBox>
      </S.Wrapper>
    </>
  );
}
