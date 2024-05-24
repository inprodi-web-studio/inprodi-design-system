import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

const PasswordInputConfig : ExtendedCodeComponentMeta = {
    id          : "password-input",
    name        : "PasswordInput",
    importPath  : "/components/PasswordInput/PasswordInput.tsx",
    isDefaultExport : true,
    displayName : "Password Input",
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
            defaultValue : "••••••••••••",
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

export default PasswordInputConfig;