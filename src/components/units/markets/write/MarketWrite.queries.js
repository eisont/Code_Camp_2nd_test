// 중고마켓 등록 queries

import { gql } from "@apollo/client";

// 등록하기
export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
      images
    }
  }
`;

// 수정하기
export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput, useditemId: $useditemId) {
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
      createdAt
    }
  }
`;
