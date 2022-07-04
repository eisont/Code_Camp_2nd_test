// 중고마켓 댓글 등록 presenter

import * as S from "./MarketCommentWrite.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <S.Wrapper>
      <>
        <S.Span>댓글</S.Span>
        <S.Hr/>
      </>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          value={props.contents}
        />
        <S.BottomWrapper>
          {/* 글자 갯수를 보여주는 역할 */}
          <S.Button onClick={props.onClickWrite}>작성하기</S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
