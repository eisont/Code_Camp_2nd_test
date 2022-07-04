// 중고마켓 목록 presenter

import * as S from "./MarketList.styles";
import { getDateDot } from "../../../../commons/libraries/utils";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function MarketListUI(props) {
  if (!props.data) return <div />;
  return (
    <S.Wrapper>
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
          <S.TableTop>
            {props.data?.fetchUseditems.map((el) => (
              <S.Row key={uuidv4()}>
                <S.Image 
                  id={el._id} 
                  onClick={props.onClickMoveToMarketDetail(el)}
                  src={ el.images[0] ?
                    `https://storage.googleapis.com/${el.images[0]}`
                  : "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
                  }
                />
                
                <S.ColumnBox>
                  <S.ColumnName onClick={props.onClickWatch(props.data?.fetchUseditems)}> {el.name} </S.ColumnName>
                  <S.FlexBox>
                    <S.ColumnPrice> {el.price}원 </S.ColumnPrice>
                    <S.ColumnCreateAt> {getDateDot(el.createdAt)} </S.ColumnCreateAt>
                  </S.FlexBox>
                </S.ColumnBox>
              </S.Row>
            ))}
          </S.TableTop>
        </InfiniteScroll>
    </S.Wrapper>
  );
}
