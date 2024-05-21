import { Upload, UploadFile } from "antd";
import ImgCrop from "antd-img-crop";

export interface CropperProps {
    content  : JSX.Element;
    onChange : (file : UploadFile) => void;
};

export default function Cropper({
    content,
    onChange,
} : CropperProps) {
    return (
        <ImgCrop
            showGrid
            showReset
            rotationSlider
            cropShape="round"
            modalOk="Recortar"
            modalCancel="Cancelar"
            resetText="Restablecer"
        >
            <Upload
                accept="image/*"
                multiple={false}
                showUploadList={false}
                onChange={ ({ file }) => {
                    onChange(file);
                }}
            >
                {content}
            </Upload>
        </ImgCrop>
    );
};