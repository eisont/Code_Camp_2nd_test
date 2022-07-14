// Login Presenter

import * as S from "./login.styles"

export const LoginUI = (props: any) => {

return (
    <S.Wrapper>
    <S.Box>
      <S.SecondBox>
        <S.Header>
          <S.LoginTitle>로그인</S.LoginTitle>
          <S.LoginText>Login</S.LoginText>
        </S.Header>
        <S.Hr/>
        
        <S.InputBx>
          <S.Input type="name" onChange={props.onChangeEmail} placeholder="아이디" />
          <S.Input type="password" onChange={props.onChangePassword} placeholder="비밀번호" />
        </S.InputBx>
          <S.Button onClick={props.onClickCreateUser}>로그인</S.Button>
          <S.SignupBox> 아직 계정이 없으신가요? <S.Signup onClick={props.onClickSignup}>회원가입</S.Signup></S.SignupBox>
      </S.SecondBox>
    </S.Box>
  </S.Wrapper>
  )

}