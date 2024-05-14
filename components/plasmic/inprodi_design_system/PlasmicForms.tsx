// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nPYJMkHKsudqrrya3SLGq
// Component: KNXf3kuM8MY0

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

import Form from "../../Form"; // plasmic-import: rb5_PS-3AnYe/component
import FormField from "../../FormField"; // plasmic-import: yLHiIXcGvJuv/component
import { TextInput } from "../../../src/components/TextInput"; // plasmic-import: jViHg3nb4YL3/codeComponent
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import {
  ColorSchemeValue,
  useColorScheme
} from "./PlasmicGlobalVariant__ColorScheme"; // plasmic-import: xZl8SJOonq1s/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5nPYJMkHKsudqrrya3SLGq/projectcss
import sty from "./PlasmicForms.module.css"; // plasmic-import: KNXf3kuM8MY0/css

createPlasmicElementProxy;

export type PlasmicForms__VariantMembers = {};
export type PlasmicForms__VariantsArgs = {};
type VariantPropType = keyof PlasmicForms__VariantsArgs;
export const PlasmicForms__VariantProps = new Array<VariantPropType>();

export type PlasmicForms__ArgsType = {};
type ArgPropType = keyof PlasmicForms__ArgsType;
export const PlasmicForms__ArgProps = new Array<ArgPropType>();

export type PlasmicForms__OverridesType = {
  mainSection?: Flex__<"div">;
  form?: Flex__<typeof Form>;
  formField?: Flex__<typeof FormField>;
  textInput?: Flex__<typeof TextInput>;
  formField2?: Flex__<typeof FormField>;
  textInput2?: Flex__<typeof TextInput>;
  button?: Flex__<typeof AntdButton>;
};

export interface DefaultFormsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicForms__RenderFunc(props: {
  variants: PlasmicForms__VariantsArgs;
  args: PlasmicForms__ArgsType;
  overrides: PlasmicForms__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

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
        path: "form.values",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({
          test1: "",
          test2: ""
        })
      },
      {
        path: "form.errors",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "form.validation",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({
          test1: { isRequired: true },
          test2: { isRequired: true }
        })
      },
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "formField.error",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.form.errors.test1;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "formField2.error",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.form.errors.test2;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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

  const globalVariants = ensureGlobalVariants({
    colorScheme: useColorScheme()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicForms.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicForms.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicForms.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"mainSection"}
          data-plasmic-override={overrides.mainSection}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.mainSection,
            {
              [sty.mainSectionglobal_colorScheme_dark]: hasVariant(
                globalVariants,
                "colorScheme",
                "dark"
              ),
              [sty.mainSectionglobal_colorScheme_light]: hasVariant(
                globalVariants,
                "colorScheme",
                "light"
              )
            }
          )}
        >
          <Form
            data-plasmic-name={"form"}
            data-plasmic-override={overrides.form}
            className={classNames("__wab_instance", sty.form)}
            content={
              <React.Fragment>
                <FormField
                  data-plasmic-name={"formField"}
                  data-plasmic-override={overrides.formField}
                  className={classNames("__wab_instance", sty.formField)}
                  description2={"Input Description"}
                  error={generateStateValueProp($state, ["formField", "error"])}
                  input={
                    <TextInput
                      data-plasmic-name={"textInput"}
                      data-plasmic-override={overrides.textInput}
                      allowClear={false}
                      className={classNames("__wab_instance", sty.textInput)}
                      defaultValue={""}
                      disabled={false}
                      leftIcon={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qEd4A
                          )}
                        >
                          {"Drop Icon"}
                        </div>
                      }
                      onChange={async (...eventArgs: any) => {
                        generateStateOnChangeProp($state, [
                          "textInput",
                          "value"
                        ]).apply(null, eventArgs);
                        (async value => {
                          const $steps = {};

                          $steps["updateFormValuesTest1"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["form", "values", "test1"]
                                  },
                                  operation: 0,
                                  value: $state.textInput.value
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  $stateSet(objRoot, variablePath, value);
                                  return value;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateFormValuesTest1"] != null &&
                            typeof $steps["updateFormValuesTest1"] ===
                              "object" &&
                            typeof $steps["updateFormValuesTest1"].then ===
                              "function"
                          ) {
                            $steps["updateFormValuesTest1"] = await $steps[
                              "updateFormValuesTest1"
                            ];
                          }

                          $steps["updateFormErrorsTest1"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["form", "errors", "test1"]
                                  },
                                  operation: 1
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  $stateSet(objRoot, variablePath, undefined);
                                  return undefined;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateFormErrorsTest1"] != null &&
                            typeof $steps["updateFormErrorsTest1"] ===
                              "object" &&
                            typeof $steps["updateFormErrorsTest1"].then ===
                              "function"
                          ) {
                            $steps["updateFormErrorsTest1"] = await $steps[
                              "updateFormErrorsTest1"
                            ];
                          }
                        }).apply(null, eventArgs);
                      }}
                      placeholder={"Placeholder"}
                      rightIcon={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__n1OZe
                          )}
                        >
                          {"Drop Icon"}
                        </div>
                      }
                      showLeftIcon={false}
                      showRightIcon={false}
                      size={"large"}
                      status={(() => {
                        try {
                          return (() => {
                            if ($state.formField.error) return "error";
                          })();
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
                      value={generateStateValueProp($state, [
                        "textInput",
                        "value"
                      ])}
                      variant={"outlined"}
                    />
                  }
                  isRequired={true}
                  label2={"Form Input 1"}
                  onErrorChange={generateStateOnChangeProp($state, [
                    "formField",
                    "error"
                  ])}
                />

                <FormField
                  data-plasmic-name={"formField2"}
                  data-plasmic-override={overrides.formField2}
                  className={classNames("__wab_instance", sty.formField2)}
                  description2={"Input Description"}
                  error={generateStateValueProp($state, [
                    "formField2",
                    "error"
                  ])}
                  input={
                    <TextInput
                      data-plasmic-name={"textInput2"}
                      data-plasmic-override={overrides.textInput2}
                      allowClear={false}
                      className={classNames("__wab_instance", sty.textInput2)}
                      defaultValue={""}
                      disabled={false}
                      leftIcon={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tvaOy
                          )}
                        >
                          {"Drop Icon"}
                        </div>
                      }
                      onChange={async (...eventArgs: any) => {
                        generateStateOnChangeProp($state, [
                          "textInput2",
                          "value"
                        ]).apply(null, eventArgs);
                        (async value => {
                          const $steps = {};

                          $steps["updateFormValuesTest2"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["form", "values", "test2"]
                                  },
                                  operation: 0,
                                  value: $state.textInput2.value
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  $stateSet(objRoot, variablePath, value);
                                  return value;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateFormValuesTest2"] != null &&
                            typeof $steps["updateFormValuesTest2"] ===
                              "object" &&
                            typeof $steps["updateFormValuesTest2"].then ===
                              "function"
                          ) {
                            $steps["updateFormValuesTest2"] = await $steps[
                              "updateFormValuesTest2"
                            ];
                          }

                          $steps["updateFormErrorsTest2"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["form", "errors", "test2"]
                                  },
                                  operation: 1
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  $stateSet(objRoot, variablePath, undefined);
                                  return undefined;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateFormErrorsTest2"] != null &&
                            typeof $steps["updateFormErrorsTest2"] ===
                              "object" &&
                            typeof $steps["updateFormErrorsTest2"].then ===
                              "function"
                          ) {
                            $steps["updateFormErrorsTest2"] = await $steps[
                              "updateFormErrorsTest2"
                            ];
                          }
                        }).apply(null, eventArgs);
                      }}
                      placeholder={"Placeholder"}
                      rightIcon={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__pi6N
                          )}
                        >
                          {"Drop Icon"}
                        </div>
                      }
                      showLeftIcon={false}
                      showRightIcon={false}
                      size={"large"}
                      status={(() => {
                        try {
                          return (() => {
                            if ($state.formField2.error) return "error";
                          })();
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
                      value={generateStateValueProp($state, [
                        "textInput2",
                        "value"
                      ])}
                      variant={"outlined"}
                    />
                  }
                  isRequired={true}
                  label2={"Form Input 1"}
                  onErrorChange={generateStateOnChangeProp($state, [
                    "formField2",
                    "error"
                  ])}
                />

                <AntdButton
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  onClick={async () => {
                    const $steps = {};
                  }}
                  shape={"default"}
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lf72J
                    )}
                  >
                    {"Submit"}
                  </div>
                </AntdButton>
              </React.Fragment>
            }
            errors={generateStateValueProp($state, ["form", "errors"])}
            onErrorsChange={generateStateOnChangeProp($state, [
              "form",
              "errors"
            ])}
            onSubmit={async () => {
              const $steps = {};

              $steps["updateFormErrors"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["form", "errors"]
                      },
                      operation: 0,
                      value: (() => {
                        const validation = $state.form.validation;
                        const keys = Object.keys(validation);
                        const values = $state.form.values;
                        let errors = {};
                        for (const key of keys) {
                          if (validation[key].isRequired && !values[key]) {
                            errors[key] = "Este campo es obligatorio";
                          }
                        }
                        return errors;
                      })()
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateFormErrors"] != null &&
                typeof $steps["updateFormErrors"] === "object" &&
                typeof $steps["updateFormErrors"].then === "function"
              ) {
                $steps["updateFormErrors"] = await $steps["updateFormErrors"];
              }
            }}
            onValidationChange={generateStateOnChangeProp($state, [
              "form",
              "validation"
            ])}
            onValuesChange={generateStateOnChangeProp($state, [
              "form",
              "values"
            ])}
            validation={generateStateValueProp($state, ["form", "validation"])}
            values={generateStateValueProp($state, ["form", "values"])}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  mainSection: [
    "mainSection",
    "form",
    "formField",
    "textInput",
    "formField2",
    "textInput2",
    "button"
  ],
  form: [
    "form",
    "formField",
    "textInput",
    "formField2",
    "textInput2",
    "button"
  ],
  formField: ["formField", "textInput"],
  textInput: ["textInput"],
  formField2: ["formField2", "textInput2"],
  textInput2: ["textInput2"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  mainSection: "div";
  form: typeof Form;
  formField: typeof FormField;
  textInput: typeof TextInput;
  formField2: typeof FormField;
  textInput2: typeof TextInput;
  button: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicForms__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicForms__VariantsArgs;
    args?: PlasmicForms__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicForms__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicForms__ArgsType,
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
          internalArgPropNames: PlasmicForms__ArgProps,
          internalVariantPropNames: PlasmicForms__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicForms__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "mainSection") {
    func.displayName = "PlasmicForms";
  } else {
    func.displayName = `PlasmicForms.${nodeName}`;
  }
  return func;
}

export const PlasmicForms = Object.assign(
  // Top-level PlasmicForms renders the root element
  makeNodeComponent("mainSection"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    formField: makeNodeComponent("formField"),
    textInput: makeNodeComponent("textInput"),
    formField2: makeNodeComponent("formField2"),
    textInput2: makeNodeComponent("textInput2"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicForms
    internalVariantProps: PlasmicForms__VariantProps,
    internalArgProps: PlasmicForms__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Forms",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicForms;
/* prettier-ignore-end */
