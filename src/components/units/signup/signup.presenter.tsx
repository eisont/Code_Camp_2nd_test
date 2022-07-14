// Signup Presenter

import * as S from "./signup.styles"


export const SignupUI = (props: any) => {


return (

    <S.Wrapper>

        <S.Box>
            <S.SecondBox>
                <S.Header>
                    <S.SignupTitle>회원가입</S.SignupTitle>
                    <S.SignupText>Sign up</S.SignupText>
                </S.Header>
                <S.Hr/>
            
                <S.InputBx>
                    <S.InputSCBx>
                    아이디 <S.Input type="name" onChange={props.onChangeEmail} placeholder="이메일 아이디를 @까지 정확하게 입력하세요."
                    />
                    </S.InputSCBx>
                    <S.InputSCBx>
                    비밀번호 <S.Input
                        type="password"
                        onChange={props.onChangePassword}
                        placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                        />
                    </S.InputSCBx>
                    <S.InputSCBx>
                        비밀번호 확인 <S.Input type="password" onChange={props.onChangePasswordCK} placeholder="영문+숫자 조합 8~16자리를 입력해주세요."/>
                    </S.InputSCBx>
                    <S.InputSCBx>
                        이름 <S.Input type="text" onChange={props.onChangeName} placeholder="ex) 홍길동" />
                    </S.InputSCBx>
                </S.InputBx>


                <S.ButtonBox>
                    <S.SignupButton onClick={props.onClickCreateUser}>회원가입하기</S.SignupButton>
                    <S.CancelButton onClick={props.onClickCancel}>취소</S.CancelButton>
                </S.ButtonBox>
                <S.SignupBox> 이미 아이디가 있으신가요? <S.Login onClick={props.onClickLogin}><u>로그인</u></S.Login></S.SignupBox>
            </S.SecondBox>
        </S.Box>
    </S.Wrapper>
)
}

export default SignupUI