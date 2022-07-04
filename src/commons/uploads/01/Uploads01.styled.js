import styled from '@emotion/styled';

export const UploadImage = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  font-size: 3vh;
  color: #999;
  &: hover {
    color: #666;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
