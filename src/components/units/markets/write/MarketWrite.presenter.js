// 중고마켓 등록 presenter

import * as S from "./MarketWrite.styles";
import { SmileOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import KakaoMapPage from "../../../commons/kakaomap/01/kakaomap01";

import Uploads01 from "../../../commons/uploads/01/Uploads01.containder";


export default function MarketWriteUI(props) {
  return (
    <S.Wrapper>
      <S.ISWrapper>

        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
        <S.Hr></S.Hr>

        {/* 상품명 */}
        <S.InputWrapper>
          <S.Label>상품명</S.Label>
          {props.isEdit ? 
            <S.Subject
              type="text"
              placeholder="(필수) 상품명을 작성해주세요."
              onChange={props.onChangeName}
              disabled value={props.data?.fetchUseditem?.name}
            /> 
            : 
            <S.Subject
            type="text"
            placeholder="(필수) 상품명을 작성해주세요."
            onChange={props.onChangeName}
            /> 
            }
        </S.InputWrapper>
        {/* 한줄요약 */}
        <S.InputWrapper>
          <S.Label>한줄요약</S.Label>
          <S.Subject
            type="text"
            placeholder="(필수) 한줄요약을 작성해주세요."
            onChange={props.onChangRemarks}
            defaultValue={props.data?.fetchUseditem?.remarks}
          />
        </S.InputWrapper>
        {/* 상품설명 */}
        <S.InputContentsrapper>
          <S.Label>상품설명</S.Label>
          <S.Contents
            placeholder="(필수) 내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchUseditem?.contents}
          />
        </S.InputContentsrapper>
        {/* 판매가격 */}
        <S.InputWrapper>
          <S.Label>판매가격</S.Label>
          <S.Subject
            type="number"
            placeholder="(필수) 판매가격을 작성해주세요."
            onChange={props.onChangePrice}
            defaultValue={props.data?.fetchUseditem?.price}
          />
        </S.InputWrapper>
        {/* 태그입력 */}
        <S.TagWrapper>
          <S.Label>태그입력</S.Label>
          <S.TagRBox>
            <S.Subject
              type="text"
              placeholder="(필수) 태그를 선택해주세요"
              onKeyUp={props.onChangeTags}
            />
            <S.Span>
              {props.hashArr.map((el, idx) => (
                <S.Text key={idx}>{el}</S.Text>
              ))}
              {props.data?.fetchUseditem?.tags.map((el, idx) => (
                  <S.Text key={idx}>{el}</S.Text>
                ))}
            </S.Span>
          </S.TagRBox>
        </S.TagWrapper>
        {/* 거래위치 */}
        <S.Address>
        <S.Label>거래위치</S.Label>
        <S.AddressWrapper>
          <KakaoMapPage address={props.address} />
          <S.InputInfo>
            <S.ZonecodeWrapper>
              <S.AddressHeader>
                <S.Zonecode
                  placeholder="00000"
                  readOnly
                  // value랑 defaultValue를 같이 작성합니다.
                  value={
                    props.zipcode || props.data?.fetchUseditem?.useditemAddress?.zipcode || "00000"
                  }
                />
                <S.SearchButton onClick={props.onClickAddressSearch} type="button">
                  우편번호 검색
                </S.SearchButton>
              </S.AddressHeader>
              {props.isOpen && (
                <Modal
                  visible={props.isOpen}
                  onOk={props.onClickAddressSearch}
                  onCancel={props.onClickAddressSearch}
                  width={800}
                  closeIcon={<SmileOutlined />}
                >
                  <DaumPostcode onComplete={props.onCompleteAddressSearch} />
                </Modal>
              )}
            </S.ZonecodeWrapper>
            <S.Addressbasic
              readOnly
              value={
                props.address ||
                props.data?.fetchUseditem?.useditemAddress?.address ||
                "(선택) 주소를 선택해주세요."
              }
            />
            <S.AddressDetail
              placeholder="(선택) 상세 주소를 입력해주세요."
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.addressDetail ||
                props.data?.fetchUseditem.useditemAddress?.addressDetail ||
                ""
              }
            />
          </S.InputInfo>
        </S.AddressWrapper>
        </S.Address>

        <S.ImageWrapper>
          <S.ImageTitle>사진 첨부</S.ImageTitle>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
          {/* <GraphqlMutationPageUI fileRef /> */}
        </S.ImageWrapper>

        <S.Hr></S.Hr>

        <S.ButtonWrapper>
          <S.CanselButton> 취소 </S.CanselButton>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.ISWrapper>
    </S.Wrapper>
  );
}
