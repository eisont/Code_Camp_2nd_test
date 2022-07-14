// 중고마컷 상세보기 container

import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import MarketDetailUI from "./MarketDetail.presenter";
import { Modal } from "antd";
import {
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USED_ITEMS_COUNT_IPICKED,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./MarketDetail.queries";
import { useRecoilState } from "recoil";
import { BasketCountState } from "../../../../commons/store";
import { withAuth } from "../../../commons/hocs/withAuth";

function MarketDetail() {
  const router = useRouter();

  // 조회
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) }
  });
  
  
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  // 삭제
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);
  // 찜하기

  // 찜하기
  const onClickPickedCount = () => {
    toggleUseditemPick({
      variables: { useditemId: String(router.query.useditemId) },
      refetchQueries: [{query: FETCH_USED_ITEMS_COUNT_IPICKED,FETCH_USED_ITEM,}],
      refetchQueries: [{
        query: FETCH_USED_ITEM,
        variables: { useditemId: String(router.query.useditemId) },
      }],
    });
  };
  
  // 수정하기 버튼
  const onClickMoveToMarketEdit = () => {
    router.push(`/markets/${router.query.useditemId}/edit`);
  };
  // 삭제 버튼
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      Modal.success({ content: "게시물이 삭제되었습니다." });
      router.push("/");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  const [,setBasketCount] = useRecoilState(BasketCountState);
  
  // 장바구니 버튼
  // el은 parameter 에서 데이터를 가지고 옵니다. (el)은 parameter 부분에 작성되어 있음
  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");  // json.pase가 undefined이면? 설정
    // 담은 물건인지 파악하는 코드
    const temp = baskets.filter((basketEl) => basketEl._id === el._id);

    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      return;
    }
    // __typename 을 없앤 배열 생성
    const { __typename, ...newEl } = el;
    baskets.push(newEl);   // __typename을 없앤 배열 newEl에 배열을 쌓이게 해줘
    setBasketCount(localStorage.setItem("baskets", JSON.stringify(baskets)));
    alert("장바구니에 담았습니다.")
  };
  // 구매 버튼
  const onClickBuy = async () => { 
    try{
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(router.query.useditemId)
        },
      })
      alert(`${data?.fetchUseditem?.name}을 구매하셨습니다.`)
      alert("새로고침 후 포인트 차감 확인 가능합니다.")
    }
    catch(errors){
      alert(errors.message)
    }
  };

  return (
    <MarketDetailUI
      // 게시판의 정보를 담은 객체 data
      data={data}
      // pickedCount 버튼
      onClickPickedCount={onClickPickedCount}
      // 장바구니 버튼
      onClickBasket={onClickBasket}
      // 수정하기로 버튼
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
      // 삭제 버튼
      onClickDelete={onClickDelete}
      // 구매 버튼
      onClickBuy={onClickBuy}
    />
  );
}

export default withAuth(MarketDetail)