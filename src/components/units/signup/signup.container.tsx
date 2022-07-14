// Signup Container

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import SignupUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queries";



export const SignupContainer = () => {

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
        await createUser({
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
    <SignupUI 
    onChangeName={onChangeName}
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onChangePasswordCK={onChangePasswordCK}
    onClickCreateUser={onClickCreateUser}
    onClickCancel={onClickCancel}
    onClickLogin={onClickLogin}
    />
    )
}

export default SignupContainer