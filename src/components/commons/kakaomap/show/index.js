import { useEffect } from "react";

export default function KakaoMapShowPage(props) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=5c7f2a4ed139b34fb703d663cc6f45a2&autoload=false&libraries=services";
    // ? & === 쿼리스트링
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션
          // window.kakao === window에서 kakao를 찾게끔 만들어줬습니다.
          center: new window.kakao.maps.LatLng(
            37.484820882502504,
            126.89621040296032), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        
        const map = new window.kakao.maps.Map(container, mapOption); // 지도를 생성합니다

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props?.data?.fetchUseditem?.useditemAddress?.address, function(result, status) {

            // 정상적으로 검색이 완료됐으면 
          if (status === window.kakao.maps.services.Status.OK) {

            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              // const infowindow = new window.kakao.maps.InfoWindow({
              //     content: '<div style="width:150px;text-align:center;padding:6px 0;">코드캠프</div>'
              // });
              // infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
          } 
        });    


        // 마커가 표시될 위치입니다 
        // const markerPosition  = new window.kakao.maps.LatLng(
        //   props.data?.fetchUseditem?.useditemAddress?.lat,
        //   props.data?.fetchUseditem?.useditemAddress?.lng
        //   ); 
        //   // 마커를 생성합니다
        //   const marker = new window.kakao.maps.Marker({
        //     position: markerPosition
        //   });
        //   // 마커가 지도 위에 표시되도록 설정합니다
        //   marker.setMap(map);
          
          // 마우스 드래그로 지도 이동 가능여부를 설정합니다
          map.setDraggable(false);
          // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
          map.setZoomable(false);
      });
    };
  }, [props.data?.fetchUseditem]);

  return (
    <>
      <div id="map" style={{ width: 860, height: 488 }}></div>
    </>
  );
}
