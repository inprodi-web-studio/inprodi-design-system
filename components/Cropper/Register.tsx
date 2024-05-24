import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
    styleSections?: any[] | boolean;
}

const CropperConfig : ExtendedCodeComponentMeta = {
    id          : "cropper",
    name        : "Cropper",
    importPath  : "/components/Cropper/Cropper.tsx",
    isDefaultExport : true,
    displayName : "Cropper",
    styleSections : true,
    states : {
        file : {
            type         : "writable",
            variableType : "object",
            valueProp    : "value",
            onChangeProp : "onChange",
        },
    },
    props : {
        value : {
            type        : "object",
            displayName : "Value",
            advanced    : true,
        },
        onChange : {
            type        : "eventHandler",
            displayName : "On Change",
            argTypes    : [
                {
                    name : "file",
                    type : "object",
                },
            ],
            advanced    : true,
        },
        content : {
            type         : "slot",
            displayName  : "Content",
            defaultValue : [
                {
                    type  : "text",
                    value : "Cropper",
                },
            ],
        },
    }
};

export default CropperConfig;