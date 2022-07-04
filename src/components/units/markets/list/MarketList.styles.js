// 중고마켓 목록 styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  margin: 50px auto;
`;

export const TableTop = styled.div`
  width: 1380px;
  margin: 0 auto;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 250px 250px 250px 250px 250px; 
`;

export const Row = styled.div`
  width: 250px;
  height: 320px;
  margin-bottom: 32px;
  text-align: center;
  background: #fff;
  border: 1px solid #000;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Image = styled.img`
  width: 248px;
  height: 221px;
  object-fit: contain;
  border: 1px solid #dbdbdb;
  background: #dbdbdb;

  &:hover {
    filter: invert;
  }
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
export const ColumnName = styled.div`
  height: 25px;
  overflow: hidden;
  text-align: start;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
`;
export const FlexBox = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;
export const ColumnRemarks = styled.div``;
export const ColumnContents = styled.div``;
export const ColumnPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const ColumnCreateAt = styled.div``;
