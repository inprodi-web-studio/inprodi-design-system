import { CodeComponentMeta } from "@plasmicapp/cli/dist/api";
import PhoneOutgoingDuotonesvgIcon from "../plasmic/inprodi_design_system/icons/PlasmicIcon__PhoneOutgoingDuotonesvg";

interface ExtendedCodeComponentMeta extends CodeComponentMeta {
    props: Record<string, any>;
    isDefaultExport?: boolean;
    states?: Record<string, any>;
}

const DropdownConfig : ExtendedCodeComponentMeta = {
    id            : "dropdown-config",
    name          : "DropdownConfig",
    importPath    : "~/components/Dropdown/Dropdown.tsx",
    isDefaultExport : true,
    displayName   : "Dropdown",
    states : {
        isLoading : {
          type         : "writable",
          variableType : "boolean",
          valueProp    : "isLoading",
          onChangeProp : "onIsLoadingChange",
        },
    },
    props : {
        isLoading : {
            type         : "boolean",
            displayName  : "Is Loading",
            defaultValue : false,
        },
        content : {
            type         : "slot",
            displayName  : "Content",
        },
        dropdownContent : {
            type         : "slot",
            displayName  : "Dropdown Content",
        },
        dropdownStyle : {
            type         : "object",
            displayName  : "Dropdown Style",
            defaultValue : {
                width   : "100%",
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
        onOpenChange : {
            type        : "eventHandler",
            displayName : "On Open Change",
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