// 수정페이지

import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketWrite from "../../../../src/components/units/markets/write/MarketWrite.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
      }
      createdAt
    }
  }
`;

export default function MarketEditPage() {
  // 기능
  const router = useRouter();
  // 수정하기에서 사용하는 조회기능
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return <MarketWrite isEdit={true} data={data} />;
}
