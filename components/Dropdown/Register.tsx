import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";
import PhoneOutgoingDuotonesvgIcon from "../plasmic/inprodi_design_system/icons/PlasmicIcon__PhoneOutgoingDuotonesvg";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
    styleSections?: any[] | boolean;
}

const DropdownConfig : ExtendedCodeComponentMeta = {
    id            : "dropdown-config",
    name          : "DropdownConfig",
    importPath    : "/components/Dropdown/Dropdown.tsx",
    // styleSections : true,
    isDefaultExport : true,
    displayName   : "Dropdown",
    states : {
        isLoading : {
          type         : "writable",
          variableType : "boolean",
          valueProp    : "isLoading",
          onChangeProp : "onIsLoadingChange",
        },
        searchValue : {
            type         : "writable",
            variableType : "text",
            valueProp    : "searchValue",
            onChangeProp : "onSearchValueChange",
        },
    },
    props : {
        isLoading : {
            type         : "boolean",
            displayName  : "Is Loading",
            defaultValue : false,
        },
        content : {
            type          : "slot",
            displayName   : "Content",
        },
        dropdownContent : {
            type         : "slot",
            displayName  : "Dropdown Content",
        },
        dropdownStyle : {
            type         : "object",
            displayName  : "Dropdown Style",
            defaultValue : {
                width   : "auto",
                padding : "4px",
            }
        },
        trigger : {
            type         : "choice",
            displayName  : "Trigger",
            options      : ["click", "hover", "contextMenu"],
            defaultValue : "click",
        },
        isSearchable : {
            type         : "boolean",
            displayName  : "Is Searchable",
            defaultValue : false,
        },
        searchValue : {
            type         : "string",
            displayName  : "Search Value",
        },
        onOpenChange : {
            type        : "eventHandler",
            displayName : "On Open Change",
            argTypes    : [{ name: "value", type: "string" }],
            advanced    : true,
        },
        onSearchValueChange : {
            type        : "eventHandler",
            displayName : "On Search",
            argTypes    : [{ name: "value", type: "string" }],
            advanced    : true,
        },
        onIsLoadingChange : {
            type        : "eventHandler",
            displayName : "On Is Loading Change",
            argTypes    : [{ name: "value", type: "boolean" }],
            advanced    : true,
        },
    }
};

export default DropdownConfig;