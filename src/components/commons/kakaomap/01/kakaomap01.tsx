import { useEffect, useState } from "react";

export default function KakaoMapPage(props) {
  console.log(props.addrss)

  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=5c7f2a4ed139b34fb703d663cc6f45a2&autoload=false&libraries=services";
    // ? & === 쿼리스트링
    document.head.appendChild(script);

    // script가 로드가 되면?
    script.onload = () => {
      // .onload === ~라는 함수를 내가 다시 재정의한다!!!
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

        // 담지 않아도 되는데 map에 담은 이유는 나중에 map을 가지고 스타일 등등을 관리하기 위해 담아놓겠습니다.
        const map = new window.kakao.maps.Map(container, mapOption); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch("서울특별시 노원구 노원로 461", function(result, status) {

            // 정상적으로 검색이 완료됐으면 
            if (status === window.kakao.maps.services.Status.OK) {

              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        });    


        // // 지도를 클릭한 위치에 표출할 마커입니다
        // const marker = new window.kakao.maps.Marker({
        //   // 지도 중심좌표에 마커를 생성합니다
        //   position: map.getCenter(),
        // });

        // // 지도에 클릭 이벤트를 등록합니다
        // // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        // window.kakao.maps.event.addListener(
        //   map,
        //   "click",
        //   function (mouseEvent) {
        //     // 클릭한 위도, 경도 정보를 가져옵니다
        //     const latlng = mouseEvent.latLng;
        //     setLat(latlng.getLat());
        //     setLng(latlng.getLng());

        //     // 마커 위치를 클릭한 위치로 옮깁니다
        //     marker.setPosition(latlng);

        //     let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
        //     message += "경도는 " + latlng.getLng() + " 입니다";

        //     const resultDiv = document.getElementById("clickLatlng") || latlng;
        //     resultDiv.innerHTML = message;
        //   }
        // );

        // // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        // const mapTypeControl = new window.kakao.maps.MapTypeControl();

        // // 지도 타입 컨트롤을 지도에 표시합니다
        // map.addControl(
        //   mapTypeControl,
        //   window.kakao.maps.ControlPosition.TOPRIGHT
        // );

        // // 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
        // window.kakao.maps.event.addListener(
        //   map,
        //   "click",
        //   function (mouseEvent) {
        //     // 클릭한 위치에 마커를 표시합니다
        //     addMarker(mouseEvent.latLng);
        //   }
        // );

        // // 지도에 표시된 마커 객체를 가지고 있을 배열입니다
        // const markers= [];

        // // 마커를 생성하고 지도위에 표시하는 함수입니다
        // function addMarker() {
        //   // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
        //   function setMarkers(map) {
        //     for (let i = 0; i < markers.length; i++) {
        //       markers[i].setMap(map);
        //     }
        //   }

        //   // "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
        //   const showMarkers = () => {
        //     setMarkers(map);
        //   };

        //   // "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
        //   const hideMarkers = () => {
        //     setMarkers(null);
        //   };
        // }

        // // 마커가 지도 위에 표시되도록 설정합니다
        // marker.setMap(map);
        // // 마커가 드래그 가능하도록 설정합니다
        // marker.setDraggable(true);
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: 384, height: 252 }}></div>
    </>
  );
}
