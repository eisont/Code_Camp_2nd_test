
// antd 를 사용하기 위해 전체에 적용을 시켜줍니다.
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        {/* 글로벌 스타일을 적용하기 위한 것 */}
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}
export default MyApp;
