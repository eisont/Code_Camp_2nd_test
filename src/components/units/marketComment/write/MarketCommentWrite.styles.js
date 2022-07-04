// 중고마켓 댓글 등록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 379px;
  margin: 0px auto;
`;

export const Span = styled.div`
  font-size: 30px;
  font-weight: 900
`;
export const ContentsWrapper = styled.div`
  margin: 29px 0;
`;

export const Contents = styled.textarea`
  width: 379px;
  min-height: 147px;
  background: #dbdbdb;
  padding: 20px;
  border: none;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
export const Button = styled.button`
  width: 116px;
  height: 42px;
  border: none;
  font-size: 20px;
  background-color: #FFE004;
  font-weight: 900;
  cursor: pointer;
`;


export const Hr = styled.div`
  margin-top: 32px;
  width: 385px;
  border-bottom: 4px solid #000;
`;