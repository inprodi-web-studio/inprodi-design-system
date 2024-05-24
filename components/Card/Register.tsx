import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

const CardConfig : ExtendedCodeComponentMeta = {
    id          : "card",
    name        : "Card",
    importPath  : "/components/Card/Card.tsx",
    isDefaultExport : true,
    displayName : "Card",
    props : {
        width: {
            type: "string",
            displayName: "Width",
            defaultValue: "100%",
        },
        showTitle: {
            type: "boolean",
            displayName: "Show Title",
            defaultValue: true,
        },
        title: {
            type: "string",
            displayName: "Title",
            defaultValue: "Card Title",
            hidden: ({ showTitle } : any) => !showTitle,
        },
        description: {
            type: "string",
            displayName: "Description",
            defaultValue: "Card description",
            hidden: ({ showTitle } : any) => !showTitle,
        },
        padding: {
            type        : "string",
            displayName : "Padding",
            defaultValue : "20px",
        },
        shadow: {
            type: "choice",
            displayName: "Shadow",
            options: [
                { label: "None", value: "none" },
                { label: "Small", value: "sm" },
                { label: "Medium", value: "md" },
                { label: "Large", value: "lg" },
            ],
            defaultValue: "sm",
        },
        content: {
            type: "slot",
            displayName: "Content",
            defaultValue: [
                {
                    type: "text",
                    value: "Card Content",
                },
            ]
        },
        loading: {
            type: "boolean",
            displayName: "Loading",
            defaultValue: false,
            advanced: true,
        },
    }
};

export default CardConfig;