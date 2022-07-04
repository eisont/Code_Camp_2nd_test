// 게시판 등록 styles

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  border: 1px solid black;
  margin: 10px auto;
  padding: 80px 102px 100px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: none;
  box-shadow: 0px 0px 10px gray;
  background: #fff;
`;
export const ISWrapper = styled.div`
  width: 1372px;
  margin: 10px auto;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;
export const Hr = styled.div`
  width: 1372px;
  border-bottom: 3px solid #000;
`;

export const InputWrapper = styled.div`
width: 1372px;
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 40px;
`;
export const InputContentsrapper = styled.div`
width: 1372px;
display: flex;
justify-content: space-between;
align-items: start;
padding-top: 40px;
`;
export const Contents = styled.textarea`
  width: 1117px;
  height: 480px;
  padding: 14px 14px 14px 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  width: 96px;
  font-size: 24px;
  font-weight: 900;
`;
export const Subject = styled.input`
  width: 1117px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;


export const TagWrapper = styled.div`
width: 1372px;
display: flex;
justify-content: space-between;
align-items: start;
padding-top: 40px;
`;
export const TagRBox = styled.div`
display:flex;
flex-direction: column;
`;

export const Address = styled.div`
width: 1372px;
margin-top: 20px;
`;
export const AddressWrapper = styled.div`
width: 1372px;
display: flex;

justify-content: space-between;
align-items: center;
`;
export const InputInfo = styled.div`
width: 962px;
`;
export const ZonecodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const AddressHeader = styled.div`display: flex;`;
export const Longitude = styled.input``;
export const Latitude = styled.input``;
export const Zoncode = styled.input``;
export const Span = styled.div`
`;
export const Text = styled.span`
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background: yellow;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  padding: 2px 10px;
  margin: 20px 5px 20px 0;
`;

export const Zonecode = styled.input`
  width: 77px;
  height: 52px;
  line-height: 33px;
  border: 1px solid #bdbdbd;
  font-size: 18px;
  padding: 10px 10px;
  cursor: default;
  outline: none;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  line-height: 32px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const Addressbasic = styled.input`
width: 962px;
  height: 52px;
  line-height: 32px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  padding: 10px 10px;
  outline: none;
`;

export const AddressDetail = styled.input`
width: 962px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  padding: 10px 10px;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding: 40px 0;
`;
export const ImageTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
`;


export const ButtonWrapper = styled.div`
  width: 1372px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const CanselButton = styled.button`
width: 195px;
height: 77px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background: #000;
  color: #000;

  background-color: ${(props) =>
    props.isActive ? "none" : "yellow"};
`;
export const SubmitButton = styled.button`
  width: 195px;
  height: 77px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  background: #000;
  color:  ${(props) =>
    props.isActive ? "#fff" : "none"};

  background-color: ${(props) =>
    props.isActive ? "none" : "yellow"};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
