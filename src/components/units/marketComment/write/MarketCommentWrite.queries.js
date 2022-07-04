// 중고마켓 댓글 등록 queries

import { gql } from "@apollo/client";



// 댓글 조회
export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      createdAt 
    }
  }
`;


// 댓글 생성
export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      user{
        _id
        email
        name
        createdAt
      }
      contents
      createdAt
    }
  }
`;

export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestion: $updateUseditemQuestion
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      useditem{
        _id
        name
        remarks
        contents
        price
        tags
        images
        pickedCount
        useditemAddress{
          _id
          zipcode
          address
          addressDetail
          lat
          lng
          createdAt
        }
      }
      user{
        _id
        email
        name
        createdAt
      }
      createdAt
    }
  }
`;
