// 오늘 본 상품
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { WatchProductState } from "../../../../commons/store";


const Wrapper = styled.div`
  width: 155px;
  padding: 10px 0;

  text-align: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;

`;
const RBox = styled.div`
  font-size: 20px;
  padding: 20px 0;
  font-weight: 900;
`;
const Best=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Product=styled.img`
  margin: 5px 0;
  width: 85px;
  height: 85px;
  background: #C4C4C4;
`
export default function WatchProduct() {
  const [watchProduct] = useRecoilState(WatchProductState);
  
  useEffect(() => {
    JSON.parse(localStorage.getItem("watch") || "[]");
  },[]);

  return (
    <Wrapper>
        <RBox>오늘 본 상품</RBox>
        {watchProduct.map((el) => (
          <Best key={el._id}>
            <Product src= { el.images[0] ? 
                `https://storage.googleapis.com/${el.images[0]}`
                :
                'http://eumseongcci.korcham.net/images/no-image01.gif'
            }/>
          </Best>
        ))}
    </Wrapper>
  );
}
