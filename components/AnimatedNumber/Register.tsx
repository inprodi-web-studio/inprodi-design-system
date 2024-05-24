import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

const AnimatedNumberConfig : ExtendedCodeComponentMeta = {
    id            : "animated-number",
    name          : "AnimatedNumber",
    importPath    : "/components/AnimatedNumber/AnimatedNumber.tsx",
    isDefaultExport : true,
    displayName   : "Animated Number",
    props : {
        value : {
            type         : "number",
            displayName  : "Value",
            defaultValue : 0,
        },
    }
};

export default AnimatedNumberConfig;