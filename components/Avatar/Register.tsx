import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

const AvatarConfig : ExtendedCodeComponentMeta = {
    id          : "avatar",
    name        : "Avatar",
    importPath  : "/components/Avatar/Avatar.tsx",
    isDefaultExport : true,
    displayName : "Avatar",
    props : {
        variant : {
            type         : "choice",
            displayName  : "Variant",
            options      : ["filled", "light"],
            defaultValue : "filled",
        },
        color : {
            type         : "color",
            displayName  : "Color",
            keepCssVar   : true,
            defaultValue : "#868E96",
        },
        type : {
            type         : "choice",
            displayName  : "Type",
            options      : ["text", "icon", "image"],
            defaultValue : "text",
        },
        circular : {
            type         : "boolean",
            displayName  : "Circular",
            defaultValue : false,
        },
        bordered : {
            type         : "boolean",
            displayName  : "Bordered",
            defaultValue : false,
        },
        size : {
            type         : "choice",
            displayName  : "Size",
            options      : ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
            defaultValue : "md",
        },
        content : {
            type         : "string",
            displayName  : "Content",
            defaultValue : "Avatar",
            hidden       : ({ type } : any) => type !== "text",
        },
        icon : {
            type         : "slot",
            displayName  : "Icon",
            hidden       : ({ type } : any) => type !== "icon",
        },
        image : {
            type         : "imageUrl",
            displayName  : "Image",
            hidden       : ({ type } : any) => type !== "image",
        },
    }
};

export default AvatarConfig;