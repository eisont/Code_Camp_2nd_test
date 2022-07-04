// 중고마켓 등록 container

import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { LatState, LngState } from "../../../../commons/store";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import { Modal } from "antd";
import "react-quill/dist/quill.snow.css";
import { withAuth } from "../../../commons/hocs/withAuth";

function MarketWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const [isOpen, setIsOpen] = useState(false);
  const [isActive] = useState(false);
  
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [lat] = useRecoilState(LatState);
  const [lng] = useRecoilState(LngState);
  const [hashArr, setHashArr] = useState([]);

  // 이미지
  const [fileUrls, setFileUrls] = useState(["", ""]);

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangRemarks = (event) => {
    setRemarks(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(parseInt(event.target.value));
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  // 태그
  const onChangeTags = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      // #해시태그
      event.target.value = "";
    }
  };

  // 주소
  const onCompleteAddressSearch = (data) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };
  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            contents,
            price: Number(price),
            tags: hashArr,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
              lat,
              lng,
            },
            images: fileUrls,
          },
        },
      });
      alert("상품 등록에 성공했습니다.");
      router.push(`/markets/${result.data?.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  // 수정하기 버튼
  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    // 문자열로 변환
    const defaultFiles = JSON.stringify(props.data.fetchUseditem.images);
    // 문자열로 변환
    const isChangedFiles = currentFiles !== defaultFiles;
    // 비교를 하기 위해 문자열로 변환한 것을 비교합니다.

    if (!remarks && !contents && !price) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    }
    const updateUseditemInput = {};
    if (name) updateUseditemInput.name = name;
    if (remarks) updateUseditemInput.remarks = remarks;
    if (contents) updateUseditemInput.contents = contents;
    if (price) updateUseditemInput.price = price;
    if (hashArr) updateUseditemInput.tags = hashArr;
    if (lat || lng ||address || addressDetail) {
      updateUseditemInput.useditemAddress = {};
      if (lat) updateUseditemInput.useditemAddress.lat = lat;
      if (lng) updateUseditemInput.useditemAddress.lat = lng;
      if (address) updateUseditemInput.useditemAddress.address = address;
      if (addressDetail) updateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateUseditemInput.images = fileUrls;

    try {
      await updateUseditem({
        variables: {
          updateUseditemInput,
          useditemId: String(router.query.useditemId),
        },
      });
      Modal.success({ content: "게시물 수정에 성공하였습니다!" });
      router.push(`/markets/${router.query.useditemId}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
      <MarketWriteUI
        isOpen={isOpen}
        isActive={isActive}
        address={address}
        hashArr={hashArr}
        fileUrls={fileUrls}
        onChangeName={onChangeName}
        onChangRemarks={onChangRemarks}
        onChangePrice={onChangePrice}
        onChangeContents={onChangeContents}
        onChangeTags={onChangeTags}
        onChangeAddress={onChangeAddress}
        onChangeAddressDetail={onChangeAddressDetail}
        onClickAddressSearch={onClickAddressSearch}
        onCompleteAddressSearch={onCompleteAddressSearch}
        onChangeFileUrls={onChangeFileUrls}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        value={""}
        data={props.data}
        zipcode={zipcode}
        addressDetail={undefined}
      />
  );
}



export default withAuth(MarketWrite)