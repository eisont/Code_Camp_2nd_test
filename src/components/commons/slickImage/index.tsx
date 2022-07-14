import styled from '@emotion/styled';
import Slider from 'react-slick';

const Wrapper = styled.div`
  width: 480px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Slick = styled(Slider)`
  width: 100%;
  height: 100%;
  color: #fff;
`;

const Image = styled.img`
  width: 480px;
  height: 480px;
  object-fit: contain;
`;

export default function SectionPhoto(props) {
  const settings = {
    // 리스트 모양 보여주기
    dots: false,
    // 무제한으로 돌릴꺼야?
    infinite: true,
    // 넘어가는 속도
    speed: 3000,
    // 사진 몇개 보여줄꺼야?
    slidesToShow: 1,
    // 몇 개씩 넘길꺼야?
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0o0,
    // cssEase: 'ease',
  };

  return (
    <Wrapper>
        {/* {props.data?.fetchUseditems.map((el) => ( */}
      <Slick {...settings}>
          {/* <Box key={uuidv4()}> */}
          <Image src={ props.data?.fetchUseditem?.images[0] ? 
              `https://storage.googleapis.com/${props.data?.fetchUseditem?.images[0]}`
              :
              'http://eumseongcci.korcham.net/images/no-image01.gif'
          }/>
          <Image src={ props.data?.fetchUseditem?.images[1] ? 
              `https://storage.googleapis.com/${props.data?.fetchUseditem?.images[1]}`
              :
              'http://eumseongcci.korcham.net/images/no-image01.gif'
        }/>
        {/* </Box> */}

      </Slick>
        {/* ))} */}
    </Wrapper>
  );
}
