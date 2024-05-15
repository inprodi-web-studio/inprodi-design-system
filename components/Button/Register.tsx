import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    states?: Record<string, any>;
}

const ButtonConfig : ExtendedCodeComponentMeta = {
    id          : "button",
    name        : "Button",
    importPath  : "./Button.tsx",
    displayName : "Button",
    props : {
        label : {
            type         : "string",
            displayName  : "Label",
            defaultValue : "Button",
        },
        size : {
            type         : "choice",
            displayName  : "Size",
            options      : ["small", "middle", "large"],
            defaultValue : "middle",
        },
        variant : {
            type         : "choice",
            displayName  : "Variant",
            options      : ["primary", "dashed", "link", "text", "default"],
            defaultValue : "primary",
        },
        block : {
            type         : "boolean",
            displayName  : "Block",
            defaultValue : false,
        },
        ghost : {
            type         : "boolean",
            displayName  : "Ghost",
            defaultValue : false,
        },
        withIcon : {
            type         : "boolean",
            displayName  : "With Icon",
            defaultValue : false,
        },
        icon : {
            type         : "slot",
            displayName  : "Icon",
            hidden       : ({ withIcon } : any) => !withIcon,
        },
        iconPosition : {
            type         : "choice",
            displayName  : "Icon Position",
            options      : ["start", "end"],
            defaultValue : "start",
        },
        isSubmit : {
            type         : "boolean",
            displayName  : "Is Submit",
            defaultValue : false,
            advanced     : true,
        },
        loading : {
            type         : "boolean",
            displayName  : "Loading",
            defaultValue : false,
            advanced     : true,
        },
        danger : {
            type         : "boolean",
            displayName  : "Danger",
            defaultValue : false,
            advanced     : true,
        },
    }
};

export default ButtonConfig;