// 헤더 styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100px;
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;

export const RBox = styled.img`
  font-size: 30px;
  font-weight: 900;
`;
export const LBox = styled.div`
  display: flex;
  algin-items: center;
`;
export const Img = styled.img`
  width: 30px;
  margin-right: 10px;
`;
export const SellBt = styled.div`
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #6400ff;
    border-bottom: 1px solid #6400ff;
  }
`;
export const MenuBt = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
`;
export const Point = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
`;
export const PointNum = styled.span`
  text-decoration: underline;
`;
export const Text = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: default;
`;
export const MenuBasketBt = styled.div`
  margin: 0 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
`;
export const BasketNum = styled.div`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  font-weight: 900;
  color: #f00;
  background: yellow;
  border-radius: 50%;
`;
