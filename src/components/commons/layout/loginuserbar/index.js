// 유저 정보 컴포넌트

import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const Info = styled.div`
  font-size: 2vh;
  text-align: center;
`;
const Span = styled.span`
  font-size: 2.5vh;
  font-weight: 700;
`;
const Text = styled.div`
font-size: 2vh;`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`;


export default function LoginUserbar() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <Info>
      {data?.fetchUserLoggedIn.name ? <Text><Span>{data?.fetchUserLoggedIn.name}</Span> 환영해요!!!</Text> : "" }
    </Info>
  );
}
