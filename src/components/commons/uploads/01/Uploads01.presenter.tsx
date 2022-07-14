import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styled";

export default function Uploads01UI(props) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload} type="button">
          <>Upload</>
        </UploadButton>
      )}
      {/* display: none */}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
