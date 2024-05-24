import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

const NumberInputConfig : ExtendedCodeComponentMeta = {
    id          : "number-input",
    name        : "NumberInput",
    importPath  : "/components/NumberInput/NumberInput.tsx",
    isDefaultExport : true,
    displayName : "Number Input",
    states : {
        value : {
          type         : "writable",
          variableType : "number",
          valueProp    : "value",
          onChangeProp : "onChange",
        },
    },
    props : {
        placeholder : {
            type         : "string",
            displayName  : "Placeholder",
            defaultValue : "0.00",
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
            ],
            hidden       : ({ showLeftIcon } : any) => !showLeftIcon,
        },
        addonAfter : {
            type        : "string",
            displayName : "Addon After",
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
        precision : {
            type         : "number",
            displayName  : "Precision",
            defaultValue : 2,
        },
        min : {
            type         : "number",
            displayName  : "Min",
        },
        max : {
            type         : "number",
            displayName  : "Max",
        },
        step : {
            type         : "number",
            displayName  : "Step",
            defaultValue : 1,
        },
        defaultValue : {
            type         : "string",
            displayName  : "Default Value",
            defaultValue : "",
            advanced     : true,
        },
        value : {
            type         : "number",
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
        onChange : {
            type        : "eventHandler",
            displayName : "On Change",
            argTypes    : [{ name: "value", type: "number" }],
            advanced    : true,
        },
    }
};

export default NumberInputConfig;