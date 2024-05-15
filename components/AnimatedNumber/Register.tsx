import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    states?: Record<string, any>;
}

const AnimatedNumberConfig : ExtendedCodeComponentMeta = {
    id            : "animated-number",
    name          : "AnimatedNumber",
    importPath    : "./AnimatedNumber.tsx",
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