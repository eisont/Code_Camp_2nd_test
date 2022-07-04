// 중고마켓 상세보기 presenter

// 댓글 입력창 컨테이너
import * as S from "./MarketDetail.styles";
// import Script from "next/script";
import KakaoMapShowPage from "../../../commons/kakaomap/show";
import MarketCommentWrite from "../../marketComment/write/MarketCommentWrite.container";
import MarketCommentList from "../../marketComment/list/MarketCommentList.container";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import SectionPhoto from "../../../commons/slickImage";
import Dompurify from "dompurify";

export default function MarketDetailUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.MarketNewTable>
          <S.TopBox>
            <SectionPhoto data={props.data} />

            <S.ProductRBox>
              <S.InfoHeaderBox>
                <S.ProductName>{props.data?.fetchUseditem?.name}</S.ProductName>
                <S.InfoRightBox>
                  <S.UpdateBt onClick={props.onClickMoveToMarketEdit}>
                    <EditOutlined />
                  </S.UpdateBt>
                  <S.DeleteBt onClick={props.onClickDelete}>
                    <CloseOutlined />
                  </S.DeleteBt>
                </S.InfoRightBox>
              </S.InfoHeaderBox>

              <S.SectionPrice>
                {" "}
                {props.data?.fetchUseditem?.price}원{" "}
              </S.SectionPrice>
              <S.TopBoxHr1 />
              <S.SectionRemarkText>
                {" "}
                {props.data?.fetchUseditem?.remarks}{" "}
              </S.SectionRemarkText>
              <S.SectionTags>
                {props.data?.fetchUseditem?.tags.map((el, idx) => (
                  <S.Text key={idx}>{el}</S.Text>
                ))}
              </S.SectionTags>
              <S.TopBoxHr2 />
              <S.ButtonBx>
                <S.PickButton onClick={props.onClickPickedCount}>
                  찜({props.data?.fetchUseditem?.pickedCount})
                </S.PickButton>
                <S.BasketButton
                  onClick={props.onClickBasket(props.data?.fetchUseditem)}
                >
                  장바구니
                </S.BasketButton>
                <S.SellButton onClick={props.onClickBuy}>바로구매</S.SellButton>
              </S.ButtonBx>
            </S.ProductRBox>
          </S.TopBox>

          <S.Section>
            <S.LeftBox>
              <S.ProductInfo>상품정보</S.ProductInfo>
              <S.LeftBoxHr />
              <S.Body>
                {typeof window !== "undefined" && (
                  <S.SectionContent
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(
                        props.data?.fetchUseditem?.contents
                      ),
                    }}
                  />
                )}
                <S.Lotation>
                  <S.Icon />
                  거래지역
                </S.Lotation>
                <KakaoMapShowPage data={props.data} />
              </S.Body>
            </S.LeftBox>

            <S.Line />

            <S.RightBox>
              <S.ProductInfo>상점정보</S.ProductInfo>

              <S.RightBoxHr />
              <S.UserProfile>
                <S.UserProfilePhotoBx>
                  {props.data?.fetchUseditem?.seller?.picture}
                </S.UserProfilePhotoBx>
                {/* seller */}
                <S.UserName>
                  {props.data?.fetchUseditem?.seller?.name}
                </S.UserName>
              </S.UserProfile>
              <S.UserNameHr />
              {/* 댓글 입력창과 연결 */}
              <MarketCommentWrite />
              {/* 댓글 리스트와 연결 */}
              <MarketCommentList />
            </S.RightBox>
          </S.Section>
        </S.MarketNewTable>
      </S.Wrapper>
    </>
  );
}
