import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

// AccessToken
export const accessTokenState = atom({
  key: "AccessToken",
  default: "",
});

export const userInfoState = atom({
  key: "userInfo",
  default: {
    emmail: "",
    name: "",
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

// 주소
export const zipcodeState = atom({
  key: "zipcode",
  default: "",
});
export const addressState = atom({
  key: "address",
  default: "",
});
export const addressDetailState = atom({
  key: "addressDetail",
  default: "",
});

export const writerErrorState = atom({
  key: "writerError",
  default: "",
});
export const passwordErrorState = atom({
  key: "passwordError",
  default: "",
});
export const titleErrorState = atom({
  key: "titleError",
  default: "",
});
export const contentsErrorState = atom({
  key: "contentsError",
  default: "",
});

// market Error
export const nameErrorState = atom({
  key: "nameError",
  default: "",
});
export const remarksErrorState = atom({
  key: "remarksError",
  default: "",
});
export const priceErrorState = atom({
  key: "priceError",
  default: "",
});

// 위도, 경도
export const LatState = atom({
  key: "lat",
  default: 0,
});
export const LngState = atom({
  key: "lng",
  default: 0,
});

export const valueState = atom({
  key: "value",
  default: "",
});


export const CountState = atom({
  key: "count",
  default: 0,
})


export const BasketCountState = atom({
  key: "basketCount",
  default: "",
})
export const WatchProductState = atom({
  key: "WatchProduct",
  default: [],
})



export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});

// 같은 함수를 여러 컴포넌트에서 공유합니다.  === 글로벌 함수
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});