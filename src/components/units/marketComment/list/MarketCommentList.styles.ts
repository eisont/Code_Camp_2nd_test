// 중고마켓 댓글 목록 styles

import styled from "@emotion/styled";
import { Rate } from "antd";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

export const ItemWrapper = styled.div`
  width: 385px;
  margin: 18px auto;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

export const FlexWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #888;
`;
export const SecondBox = styled.div`
  margin-left: 16px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserName = styled.div`
  font-size: 24px;
`;
export const CreateAt = styled.div`
font-size: 15px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div`
  font-size: 24px;
  background: rgba(0,0,0,.1)
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UpdateIcon = styled(EditOutlined)`
  font-size: 24px;
  cursor: pointer;
  color: #888;
`;
export const DeleteIcon = styled(CloseOutlined)`
  font-size: 24px;
  color: #888;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  padding-top: 15px;
  padding-left: 60px;
`;

export const Star = styled(Rate)`
  padding-left: 20px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
