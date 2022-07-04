// 회원가입 페이지
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const Wrapper = styled.div`
  margin: 143px 0;
  width: 1920px;
  height: 1188px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 742px;
  height: 802px;
  border-radius: 10px;
  background: #fff;
  display: flex; 
  align-items: center;
  justify-content: center;
`
const SecondBox = styled.div`
  flex-direction: column;
`
const Header = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: end;
`
const LoginTitle = styled.div`
  font-size: 50px;
  font-weight: 900;
`
const LoginText = styled.div`
  margin-left: 12.41px; 
  font-size: 32px;
`
const Hr = styled.div`
  width: 597px;
  border-bottom: 1px solid #C9C9C9;
  margin-bottom: 81px;
`
const InputBx = styled.div`
  width: 600px;
  margin-bottom: 97px;
`
const Input = styled.input`
  width: 600px;
  height: 77.48px;
  margin: 35px 0;
  font-size: 18px;
  border-radius: 10px;
  padding: 29px 29px;
  border: 1px solid #999;
`;
const Button = styled.button`
  width: 600px;
  height: 88px;
  border: none;
  font-size: 20px;
  background: #FFE004;
  font-weight: 900;
  border-radius: 10px;
  text-align: center;
  line-height: 88px;
`;
const JoinBox = styled.div`
  width: 600px;
  margin-top: 39px;
  display: flex;
  color: #888888;
  font-size: 18px;
  justify-content: center;
`;
const Join = styled.div`
  margin-left: 22px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  color: #000;
`;


export default function LoginPage() {
  const router = useRouter()
  const [loginUser] = useMutation(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event?.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event?.target.value);
  };
  const onClickJoin = () => {
    router.push("/join")
  };

  const onClickCreateUser = async () => {
    if (email && password) {
      try {
        // 1. 로그인하기
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        // accessToken 생성
        const accessToken = result.data.loginUser.accessToken;
        // AccessToken 에 담기
        setAccessToken(accessToken);
        alert(`${email} 어서와요!!!`);
        router.push("/");
      } catch (error) {
        alert(error.message);
      }
    } else alert("회원 정보를 입력 부탁드립니다.");
  };

  return (
    <Wrapper>
      <Box>
        <SecondBox>
          <Header>
            <LoginTitle>로그인</LoginTitle>
            <LoginText>Login</LoginText>
          </Header>
          <Hr/>
          
          <InputBx>
            <Input type="name" onChange={onChangeEmail} placeholder="아이디" />
            <Input type="password" onChange={onChangePassword} placeholder="비밀번호" />
          </InputBx>
            <Button onClick={onClickCreateUser}>로그인</Button>
            <br />
            <JoinBox> 아직 계정이 없으신가요? <Join onClick={onClickJoin}><u>회원가입</u></Join></JoinBox>
        </SecondBox>
      </Box>
    </Wrapper>
  );
}
