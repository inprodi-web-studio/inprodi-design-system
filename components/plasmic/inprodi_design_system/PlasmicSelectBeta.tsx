// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nPYJMkHKsudqrrya3SLGq
// Component: fGNBuRZSQyEi

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import DropdownConfig from "~/components/Dropdown/Dropdown.tsx"; // plasmic-import: 2FAf85kMy1wq/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5nPYJMkHKsudqrrya3SLGq/projectcss
import sty from "./PlasmicSelectBeta.module.css"; // plasmic-import: fGNBuRZSQyEi/css

import CaretUpDownsvgIcon from "./icons/PlasmicIcon__CaretUpDownsvg"; // plasmic-import: HuxtV9vRFLhq/icon

createPlasmicElementProxy;

export type PlasmicSelectBeta__VariantMembers = {
  size: "small" | "middle" | "large";
  isFocus: "isFocus";
};
export type PlasmicSelectBeta__VariantsArgs = {
  size?: SingleChoiceArg<"small" | "middle" | "large">;
  isFocus?: SingleBooleanChoiceArg<"isFocus">;
};
type VariantPropType = keyof PlasmicSelectBeta__VariantsArgs;
export const PlasmicSelectBeta__VariantProps = new Array<VariantPropType>(
  "size",
  "isFocus"
);

export type PlasmicSelectBeta__ArgsType = {
  onSizeChange?: (val: any) => void;
  value?: any;
  onValueChange?: (val: string) => void;
  placeholder?: string;
  menu?: React.ReactNode;
  width?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
};
type ArgPropType = keyof PlasmicSelectBeta__ArgsType;
export const PlasmicSelectBeta__ArgProps = new Array<ArgPropType>(
  "onSizeChange",
  "value",
  "onValueChange",
  "placeholder",
  "menu",
  "width",
  "isSearchable",
  "isLoading"
);

export type PlasmicSelectBeta__OverridesType = {
  dropdown?: Flex__<typeof DropdownConfig>;
  inputContainer?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultSelectBetaProps {
  onSizeChange?: (val: any) => void;
  value?: any;
  onValueChange?: (val: string) => void;
  placeholder?: string;
  menu?: React.ReactNode;
  width?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
  size?: SingleChoiceArg<"small" | "middle" | "large">;
  isFocus?: SingleBooleanChoiceArg<"isFocus">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelectBeta__RenderFunc(props: {
  variants: PlasmicSelectBeta__VariantsArgs;
  args: PlasmicSelectBeta__ArgsType;
  overrides: PlasmicSelectBeta__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Seleccionar...",
          isSearchable: false,
          isLoading: false
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "dropdown.isLoading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props["isLoading"]
      },
      {
        path: "size",
        type: "writable",
        variableType: "variant",

        valueProp: "size",
        onChangeProp: "onSizeChange"
      },
      {
        path: "value",
        type: "writable",
        variableType: "object",

        valueProp: "value",
        onChangeProp: "onValueChange"
      },
      {
        path: "isFocus",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isFocus
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <DropdownConfig
      data-plasmic-name={"dropdown"}
      data-plasmic-override={overrides.dropdown}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.dropdown,
        {
          [sty.dropdownisFocus]: hasVariant($state, "isFocus", "isFocus"),
          [sty.dropdownsize_large]: hasVariant($state, "size", "large"),
          [sty.dropdownsize_middle]: hasVariant($state, "size", "middle"),
          [sty.dropdownsize_small]: hasVariant($state, "size", "small")
        }
      )}
      content={
        <Stack__
          as={"div"}
          data-plasmic-name={"inputContainer"}
          data-plasmic-override={overrides.inputContainer}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.inputContainer,
            hasVariant($state, "isFocus", "isFocus")
              ? "vizion-select focused"
              : "vizion-select",
            {
              [sty.inputContainerisFocus]: hasVariant(
                $state,
                "isFocus",
                "isFocus"
              ),
              [sty.inputContainersize_large]: hasVariant(
                $state,
                "size",
                "large"
              ),
              [sty.inputContainersize_middle]: hasVariant(
                $state,
                "size",
                "middle"
              ),
              [sty.inputContainersize_small]: hasVariant(
                $state,
                "size",
                "small"
              )
            }
          )}
          style={(() => {
            try {
              return {
                width: $props.width ?? "100%"
              };
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        >
          {(() => {
            try {
              return !$state.value?.value;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nsUnA,
                {
                  [sty.textsize_large__nsUnAPp0Zg]: hasVariant(
                    $state,
                    "size",
                    "large"
                  ),
                  [sty.textsize_small__nsUnAp4Z2B]: hasVariant(
                    $state,
                    "size",
                    "small"
                  )
                }
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.placeholder;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          ) : null}
          {(() => {
            try {
              return $state.value?.value;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qnukJ,
                {
                  [sty.textsize_large__qnukJPp0Zg]: hasVariant(
                    $state,
                    "size",
                    "large"
                  )
                }
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $state.value?.label;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          ) : null}
          <CaretUpDownsvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </Stack__>
      }
      dropdownContent={renderPlasmicSlot({
        defaultContents: (
          <div className={classNames(projectcss.all, sty.freeBox__eMmBl)} />
        ),

        value: args.menu
      })}
      dropdownStyle={{ width: "auto", padding: "4px" }}
      isLoading={generateStateValueProp($state, ["dropdown", "isLoading"])}
      isSearchable={args.isSearchable}
      onIsLoadingChange={generateStateOnChangeProp($state, [
        "dropdown",
        "isLoading"
      ])}
      onOpenChange={async value => {
        const $steps = {};

        $steps["updateIsFocus"] = true
          ? (() => {
              const actionArgs = { vgroup: "isFocus", operation: 2 };
              return (({ vgroup, value }) => {
                if (typeof value === "string") {
                  value = [value];
                }

                const oldValue = $stateGet($state, vgroup);
                $stateSet($state, vgroup, !oldValue);
                return !oldValue;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateIsFocus"] != null &&
          typeof $steps["updateIsFocus"] === "object" &&
          typeof $steps["updateIsFocus"].then === "function"
        ) {
          $steps["updateIsFocus"] = await $steps["updateIsFocus"];
        }
      }}
      trigger={"click"}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  dropdown: ["dropdown", "inputContainer", "svg"],
  inputContainer: ["inputContainer", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  dropdown: typeof DropdownConfig;
  inputContainer: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelectBeta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelectBeta__VariantsArgs;
    args?: PlasmicSelectBeta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelectBeta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelectBeta__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSelectBeta__ArgProps,
          internalVariantPropNames: PlasmicSelectBeta__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelectBeta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dropdown") {
    func.displayName = "PlasmicSelectBeta";
  } else {
    func.displayName = `PlasmicSelectBeta.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectBeta = Object.assign(
  // Top-level PlasmicSelectBeta renders the root element
  makeNodeComponent("dropdown"),
  {
    // Helper components rendering sub-elements
    inputContainer: makeNodeComponent("inputContainer"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSelectBeta
    internalVariantProps: PlasmicSelectBeta__VariantProps,
    internalArgProps: PlasmicSelectBeta__ArgProps
  }
);

export default PlasmicSelectBeta;
/* prettier-ignore-end */
