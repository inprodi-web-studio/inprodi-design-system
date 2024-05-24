import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
    styleSections?: any[] | boolean;
}

const DividerConfig : ExtendedCodeComponentMeta = {
    id          : "divider",
    name        : "Divider",
    importPath  : "/components/Divider/Divider.tsx",
    isDefaultExport : true,
    displayName : "Divider",
    styleSections : true,
    props : {
        text : {
            type         : "string",
            displayName  : "Text",
        },
        dashed : {
            type         : "boolean",
            displayName  : "Dashed",
            defaultValue : false,
        },
        orientation : {
            type         : "choice",
            displayName  : "Orientation",
            options      : ["left", "right", "center"],
            defaultValue : "left",
        },
        direction : {
            type         : "choice",
            displayName  : "Direction",
            options      : ["horizontal", "vertical"],
            defaultValue : "horizontal",
        },
        margin : {
            type         : "string",
            displayName  : "Margin",
            defaultValue : "0px",
        },
        orientationMargin : {
            type         : "string",
            displayName  : "Orientation Margin",
            defaultValue : "0px",
            advanced     : true,
        },
        plain : {
            type         : "boolean",
            displayName  : "Plain",
            defaultValue : false,
            advanced     : true,
        },
    }
};

export default DividerConfig;