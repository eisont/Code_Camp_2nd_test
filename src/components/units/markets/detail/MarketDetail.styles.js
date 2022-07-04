// 중고마켓 상세보기 styles

import styled from "@emotion/styled";
import {EnvironmentOutlined} from "@ant-design/icons"

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #fff;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MarketNewTable = styled.div`
  width: 1920px;
  padding: 80px 0;
  background: #fff;
  box-shadow: 0px 0px 10px #bdbdbd;
`;
export const TopBox = styled.div`
  margin: 0 auto;
  width: 1372px;
  display: flex;
`;
export const ProductRBox = styled.div`
  width: 821px;
  margin: 0 auto;
`;
export const InfoHeaderBox = styled.div`
  width: 821px;
  display: flex;
  justify-content: space-between;
`;
export const InfoRightBox = styled.div`
  display: flex;
`;
export const UpdateBt = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: #BDBDBD;
`;
export const DeleteBt = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 16px;
  color: #BDBDBD;
`;


export const ProductName = styled.div`
  font-size: 24px;
  font-weight: 900;
`;
export const SectionPrice = styled.div`
  font-weight: 900;
  font-size: 48px;
`;
export const SectionRemarkText = styled.div`
  width: 821px;
  height: 130px;
  font-size: 20px;
  margin: 10px 0;
`;
export const SectionText = styled.div`
padding: 5px;
  color: #999;
`;
export const SectionTags = styled.div``;
export const Text = styled.span`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background: yellow;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  padding: 2px 10px;
  margin: 20px 5px 20px 0;
`;
  

export const Section = styled.div`
  width: 1372px;
  margin: 50px auto 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const LeftBox = styled.div`
  width: 925px;
  display: flex;
  flex-direction: column;
`;
export const Line = styled.div`
  height: 1170px;
  width: 2px;
  background: #555555;
`

export const ProductInfo = styled.div`
  font-size: 32px;
  margin-bottom: 32px;
  font-weight: 900;
`;
export const Body = styled.div`
  width: 925px;
  margin: 0 auto;
`;
export const SectionContent = styled.p`
  font-size: 16px;
  margin: 40px 0;
`;
export const Lotation = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
export const Icon = styled(EnvironmentOutlined)`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.4);
  margin-right: 10px;
`;
  
export const RightBox = styled.div`
  width: 385px;
  display: flex;
  flex-direction: column;
`;
export const UserProfile = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserProfilePhotoBx = styled.div`
  width: 75px;
  margin-right: 20px;
  height: 75px;
  border-radius: 50%;
  background: #dbdbdb;
`;
export const UserName = styled.div`
  font-size: 24px;
  font-weight: 900;
`;




export const TopBoxHr1 = styled.div`
  width: 821px;
  border-bottom: 4px solid #000;
`;
export const TopBoxHr2 = styled.div`
  width: 821px;
  border-bottom: 3px solid #000;
`;
export const LeftBoxHr = styled.div`
  width: 925px;
  border-bottom: 4px solid #000;
`;
export const RightBoxHr = styled.div`
  width: 385px;
  border-bottom: 4px solid #000;
`;
export const UserNameHr = styled.div`
  margin-bottom: 76px;
  width: 385px;
  border-bottom: 3px solid #000;
`;


export const ButtonBx = styled.div`
  width: 821px;

  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
export const PickButton = styled.div`
  width: 152px;
  height: 100px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  font-weight: 600;
  background: #C9C9C9;
  cursor: pointer;
  &:hover {
    background-color: gold;
    border-color: white;
  }
`;
export const BasketButton = styled.div`
  width: 312px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  display: inline;
  background: #A0A0A0;
  cursor: pointer;
  &:hover {
    background-color: gold;
    border-color: white;
  }
`;
export const SellButton = styled.div`
  width: 312px;
  height: 100px;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  font-weight: 600;
  display: inline;
  background: #000;
  cursor: pointer;
  color: #fff;
  &:hover {
    background-color: gold;
    border-color: white;
  }
`;