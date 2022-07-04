// 회원가입 페이지
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";


const Wrapper = styled.div`
  margin: 143px 0;
  width: 1920px;
  height: 1188px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 1200px;
  height: 903px;
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
const JoinTitle = styled.div`
  font-size: 50px;
  font-weight: 900;
`
const SignupText = styled.div`
  margin-left: 10px;
  font-size: 32px;
`
const Hr = styled.div`
  width: 1002.8px;
  border-bottom: 1px solid #C9C9C9;
  margin-bottom: 97px;
`
const InputBx = styled.div`
  width: 1002.8px;
  margin-bottom: 97px;
`
const InputSCBx =styled.div`
  width: 1002.8px;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
`
const Input = styled.input`
  width: 786.96px;
  height: 64px;
  padding: 10px 10px;
  border-radius: 10px;
  color: #A9A9A9;
  font-size: 15px;
  border: 1px solid #999;
`;
const ButtonBox = styled.div`
  width: 1002.8px;
  display: flex;
  color: #999;
  justify-content: center;
`;
const JoinButton = styled.button`
  width: 330px;
  height: 70px;
  color: #000;
  border-radius: 10px;
  margin: 0 21px 0 0;
  background: #FFE004;
  font-size: 20px;
  font-weight: 900;
  border: none;
`;
const CancelButton = styled.button`
  width: 330px;
  height: 70px;
  border-radius: 10px;
  color: #fff;
  background: black;
  font-weight: 900;
  font-size: 20px;
  border: none;
`;
const JoinBox = styled.div`
  width: 1002.8px;
  border-radius: 10px;
  margin-top: 47px;
  font-size: 18px;
  display: flex;
  color: #888888;
  justify-content: center;
`;
const Login = styled.div`
  margin-left: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;


const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      createdAt
    }
  }
`;

export default function JoinPage() {
  const router = useRouter()
  const [createUser] = useMutation(CREATE_USER);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (event) => {
    setName(event?.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event?.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event?.target.value);
  };
  const onChangePasswordCK = (event) => {
    setPassword(event?.target.value);
  };
  
  const onClickCreateUser = async () => {
    try {
      // 1. 가입하기
      const result = await createUser({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });
      // 2. 가입 성공 페이지로 이동하기
      alert(`${name}님 가입을 축하합니다.`);
      alert(`${email}으로 로그인해봐요!!!`);
      router.push("/login");
    } catch (errors) {
      alert(errors.message);
    }
  };
  const onClickCancel = () => {
    alert("실망이예요...")
    router.push("/")
  };
  const onClickLogin = () => {
    router.push("/login")
  };
  
  return (
    <Wrapper>
      
      <Box>
        <SecondBox>
          <Header>
            <JoinTitle>회원가입</JoinTitle>
            <SignupText>Sign up</SignupText>
          </Header>
          <Hr/>
          
          <InputBx>
            <InputSCBx>
              아이디 <Input type="name" onChange={onChangeEmail} placeholder="이메일 아이디를 @까지 정확하게 입력하세요."
              />
            </InputSCBx>
            <InputSCBx>
              비밀번호 <Input
                type="password"
                onChange={onChangePassword}
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
              />
            </InputSCBx>
            <InputSCBx>
              비밀번호 확인 <Input type="password" onChange={onChangePasswordCK} placeholder="영문+숫자 조합 8~16자리를 입력해주세요."/>
            </InputSCBx>
            <InputSCBx>
              이름 <Input type="text" onChange={onChangeName} placeholder="ex) 홍길동" />
            </InputSCBx>
          </InputBx>


          <ButtonBox>
            <JoinButton onClick={onClickCreateUser}>회원가입하기</JoinButton>
            <CancelButton onClick={onClickCancel}>취소</CancelButton>
          </ButtonBox>
          <JoinBox> 이미 아이디가 있으신가요? <Login onClick={onClickLogin}><u>로그인</u></Login></JoinBox>
        </SecondBox>
      </Box>
    </Wrapper>
  );
}
