// Login Container


import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { LoginUI } from "./login.presenter";
import { LOGIN_USER } from "./login.queries";


export const LoginContainer = () => {

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
    const onClickSignup = () => {
      router.push("/signup")
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
    <LoginUI
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onClickSignup={onClickSignup}
    onClickCreateUser={onClickCreateUser}
    />)
}