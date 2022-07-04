// 중고마켓 댓글 목록 수정창 component

import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import MarketCommentWrite from "../write/MarketCommentWrite.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./MarketCommentList.queries";
import * as S from "./MarketCommentList.styles";
import {FETCH_USER_LOGGED_IN} from "../list/MarketCommentList.queries"
import {getDate} from "../../../../commons/libraries/utils"
import { notification } from "antd";

export default function MarketCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const {data} = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      notification.error({
        message: `삭제되었습니다.`,
        placement: "topLeft",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };


  return (
    <>
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>

            <S.Box>
              <S.Avatar />
              <S.SecondBox>
                <S.UserName>{data?.fetchUserLoggedIn?.name}</S.UserName>
                <S.CreateAt>{getDate(props.data.fetchUseditemQuestions[0].createdAt)}</S.CreateAt>
              </S.SecondBox> 
            </S.Box>

            <S.OptionWrapper>
              <S.UpdateIcon onClick={onClickUpdate} />
              <S.DeleteIcon onClick={onClickDelete} />
            </S.OptionWrapper>

          </S.FlexWrapper>

          <S.Contents>{props.el?.contents}</S.Contents>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <MarketCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
