import styled from "@emotion/styled";
import LayoutHeader from "./header/Header.container";
import { useRouter } from "next/router";
import LayoutBlack from "./BlackCodeCamp";
import WatchProduct from "./WatchProduct";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Body = styled.div``;
const Fixed = styled.div`
  position: fixed;
  right: 0;
  top: 257px;
`;

export default function Layout(props) {
  const router = useRouter();

  const MainPage = ["/"];
  const LoginPage = ["/login"];
  const SignupPage = ["/signup"];
  const MarketWrite = ["/markets/new"];
  const MarketDetail = [`/markets/${router.query.useditemId}`];
  const MarketEdit = [`/markets/${router.query.useditemId}/edit`];

  const isMainPage = MainPage.includes(router.asPath);
  const isLoginPage = LoginPage.includes(router.pathname);
  const isSignupPage = SignupPage.includes(router.asPath);
  const isMarketWrite = MarketWrite.includes(router.asPath);
  const isMarketDetail = MarketDetail.includes(router.asPath);
  const isMarketEdit = MarketEdit.includes(router.asPath);

  return (
    <>
      <Wrapper>
        {!isMainPage && !isMarketDetail && !isMarketWrite && !isMarketEdit && (
          <LayoutBlack />
        )}
        {!isLoginPage && !isSignupPage && <LayoutHeader />}
        <Fixed>
          {!isLoginPage &&
            !isSignupPage &&
            !isMarketDetail &&
            !isMarketWrite &&
            !isMarketEdit && <WatchProduct />}
        </Fixed>
        <Body>{props.children}</Body>
      </Wrapper>
    </>
  );
}
