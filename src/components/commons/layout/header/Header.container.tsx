// Header Conatainer

import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { BasketCountState } from "../../../../commons/store";
import { useEffect, useState } from "react";
import { CREATE_POINT_TRANSACTION_OF_LOADING, FETCH_USED_ITEMS_COUNT_IPICKED, FETCH_USER_LOGGED_IN, LOGOUTUSER } from "./Header.queries";
import HeaderUI from "./Header.presenter";


export const HeaderContainer = () => {
  const [chargePrice] = useState(100);
  const [, setBasketCount] = useRecoilState(BasketCountState);
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
  const onClickSignup = () => {
    router.push("../signup");
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
  <HeaderUI
  data={data}
  loggedIn={loggedIn}
  onClickMain={onClickMain}
  onClickSell={onClickSell}
  onClickLogin={onClickLogin}
  onClickLogout={onClickLogout}
  onClickSignup={onClickSignup}
  onClickPoint={onClickPoint}
  />
  );
}


export default HeaderContainer