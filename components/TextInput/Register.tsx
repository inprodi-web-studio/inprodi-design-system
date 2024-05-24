import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

const TextInputConfig : ExtendedCodeComponentMeta = {
    id          : "text-input",
    name        : "TextInput",
    importPath  : "/components/TextInput/TextInput.tsx",
    isDefaultExport : true,
    displayName : "Text Input",
    states : {
        value : {
          type         : "writable",
          variableType : "text",
          valueProp    : "value",
          onChangeProp : "onChange",
        },
    },
    props : {
        placeholder : {
            type         : "string",
            displayName  : "Placeholder",
            defaultValue : "Placeholder",
        },
        size : {
            type         : "choice",
            displayName  : "Size",
            options      : ["small", "middle", "large"],
            defaultValue : "middle",
        },
        addonBefore : {
            type        : "string",
            displayName : "Addon Before",
        },
        showLeftIcon : {
            type        : "boolean",
            displayName : "Show Left Icon",
            defaultValue: false,
        },
        leftIcon : {
            type        : "slot",
            displayName : "Left Icon",
            defaultValue: [
                {
                    type: "text",
                    value: "Drop Icon",
                },
            ]
        },
        addonAfter : {
            type        : "string",
            displayName : "Addon After",
        },
        showRightIcon : {
            type        : "boolean",
            displayName : "Show Right Icon",
            defaultValue: false,
        },
        rightIcon : {
            type        : "slot",
            displayName : "Right Icon",
            defaultValue: [
                {
                    type: "text",
                    value: "Drop Icon",
                },
            ]
        },
        variant : {
            type         : "choice",
            displayName  : "Variant",
            options      : [
                { label : "Outlined", value : "outlined" },
                { label : "Borderless", value : "borderless" },
                { label : "Filled", value : "filled" },
            ],
            defaultValue : "outlined",
        },
        allowClear : {
            type         : "boolean",
            displayName  : "Allow Clear",
            defaultValue : false,
        },
        debounce : {
            type         : "number",
            displayName  : "Debounce",
            defaultValue : 0,
            advanced     : true,
        },
        mask : {
            type         : "string",
            displayName  : "Mask",
            advanced     : true,
        },
        defaultValue : {
            type         : "string",
            displayName  : "Default Value",
            defaultValue : "",
            advanced     : true,
        },
        value : {
            type         : "string",
            displayName  : "Value",
            advanced     : true,
        },
        status : {
            type         : "choice",
            displayName  : "Status",
            options      : ["error", "warning"],
            advanced     : true,
        },
        disabled : {
            type         : "boolean",
            displayName  : "Disabled",
            defaultValue : false,
            advanced     : true,
        },
        maxLength : {
            type         : "number",
            displayName  : "Max Length",
            advanced     : true,
        },
        onChange : {
            type        : "eventHandler",
            displayName : "On Change",
            argTypes    : [{ name: "value", type: "string" }],
            advanced    : true,
        },
        // onPressEnter : {
        //     type        : "eventHandler",
        //     displayName : "On Press Enter",
        //     argTypes    : [{ name: "value", type: "string" }],
        //     advanced    : true,
        // }
    }
};

export default TextInputConfig;