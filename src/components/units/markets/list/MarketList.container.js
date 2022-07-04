// 중고마켓 목록 container

import MarketListUI from "./MarketList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { WatchProductState } from "../../../../commons/store";
import _ from "lodash"

export default function MarketList() {
  const [watchProduct, setWatchProduct] = useRecoilState(WatchProductState);
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const onClickMoveToMarketDetail = (el) =>(event) => {
    const watch = JSON.parse(localStorage.getItem("watch") || "[]");    
    const { __typename, ...newEl } = el;
    watch.unshift(newEl);
    localStorage.setItem("watch", JSON.stringify(watch));
    const removeid = _.uniqBy(watch, "_id");
    const result = removeid.slice(0, 3);
    setWatchProduct(result);
    if (event.target) router.push(`/markets/${event.target.id}`);
  };
  // infinite scroll
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      // 페이지를 받아오니 query에서 page를 리턴해야합니다.
      variables: { page: Math.ceil(data?.fetchUseditems.length /10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // 받아올 데이터가 없을 경우 return(기존 데이터 보여줘)
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            // 이전 뎃글 보여줘
            ...prev.fetchUseditems,
            // 다음 댓글 보여줘
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  
  // const [,setWatchProduct] = useRecoilState(WatchProductState);
// 장바구니 버튼
const onClickWatch = (el) => () => {
};

  return (
    <MarketListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickWatch={onClickWatch}
      onClickMoveToMarketDetail={onClickMoveToMarketDetail}
    />
  );
}
