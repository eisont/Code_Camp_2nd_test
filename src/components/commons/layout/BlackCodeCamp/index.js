// 블랙 메뉴바

import styled from '@emotion/styled';
import { useRouter } from 'next/router';


const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: #000;
  display: flex;
  align-items: center;
`;
const RBox = styled.div``;
const Img = styled.img`
  margin-left: 64px;
  cursor: pointer;
`;

export default function LayoutBlack() {
  const router = useRouter()

  const onClickMain = () =>{
    router.push("/")
  }

  return (
    <Wrapper>
        <RBox><Img onClick={onClickMain} src='../image/whitelogo.png'/></RBox>
    </Wrapper>
  );
}
