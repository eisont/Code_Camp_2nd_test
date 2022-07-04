// 중고마켓 댓글 목록 presenter

import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";
import {v4 as uuidv4} from "uuid"

export default function MarketCommentListUI(props) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <MarketCommentListUIItem data={props.data} key={uuidv4()} el={el} />
      ))}
    </InfiniteScroll>
  );
}
