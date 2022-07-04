// 중고마켓 댓글 목록 queries

import { gql } from "@apollo/client";



// 로그인한 유저 정보 파악
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`;

// 댓글 조회
export const FETCH_USED_ITEM_QUESTIONS = gql`
query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
  fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      createdAt 
    }
  }
`;

// 댓글 삭제
export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

// 댓글 수정
export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateBoardCommentInput: $updateBoardCommentInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
