import React, {  useRef } from "react";
import Button, { ButtonColor, ButtonType, ButtonShape, ButtonSize } from "../Button/Button";
const FileInput = ({accept,onChange,onClear}) => {


    const fileInputRef = useRef(null);
    const handleClearFile = () => {
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
            onClear();
        }
      };

    return (
        <div className={"file__input-container"}>
            <label htmlFor="file-upload" class="file__input">
             File upload
            </label>
            <input ref={fileInputRef} id={"file-upload"} type="file"  accept="video/mp4,video/x-m4v,video/*"  onChange={onChange} />
            <Button
          type={ButtonType.Filled}
          color={ButtonColor.Default}
          shape={ButtonShape.Rounded}
          size={ButtonSize.Compact}
          text={"Clear file"}
          onClick={handleClearFile}
        />
        </div> 
    );
};

export default FileInput;
