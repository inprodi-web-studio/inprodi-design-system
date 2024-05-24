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
import TextInput from "~/components/TextInput/TextInput.tsx"; // plasmic-import: jViHg3nb4YL3/codeComponent
import PasswordInput from "~/components/PasswordInput/PasswordInput.tsx"; // plasmic-import: Tuix-QVl_vRD/codeComponent
import Button from "~/components/Button/Button.tsx"; // plasmic-import: kQTcb2I1HqhX/codeComponent
import SelectInput from "../../SelectInput"; // plasmic-import: fGNBuRZSQyEi/component
import SelectItem from "../../SelectItem"; // plasmic-import: hGFiaPJ3TZ_p/component
import NumberInput from "~/components/NumberInput/NumberInput.tsx"; // plasmic-import: FFfQSUkjlypg/codeComponent
import Cropper from "~/components/Cropper/Cropper.tsx"; // plasmic-import: 8amRQDDyzNMI/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5nPYJMkHKsudqrrya3SLGq/projectcss
import sty from "./PlasmicForms.module.css"; // plasmic-import: KNXf3kuM8MY0/css

import WarningDiamondsvgIcon from "./icons/PlasmicIcon__WarningDiamondsvg"; // plasmic-import: qLqG6TErDgjs/icon

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
  passwordInput?: Flex__<typeof PasswordInput>;
  selectBeta?: Flex__<typeof SelectInput>;
  textInput2?: Flex__<typeof TextInput>;
  numberInput?: Flex__<typeof NumberInput>;
  cropper?: Flex__<typeof Cropper>;
  selectInput?: Flex__<typeof SelectInput>;
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
        path: "form.validation",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({
          test1: { isRequired: true },
          test2: { isRequired: true }
        })
      },
      {
        path: "formField.error",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.form?.errors.test1;
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
              return $state.form?.errors.test2;
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
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.user.phone.number;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "undefined";
              }
              throw e;
            }
          })()
      },
      {
        path: "cropper.file",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "selectBeta.size",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "large"
      },
      {
        path: "selectBeta.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "numberInput.value",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $ctx.user.phone.number;
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
        path: "selectBeta.searchValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "selectInput.size",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "selectInput.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({})
      },
      {
        path: "selectInput.searchValue",
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
            sty.mainSection
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
                  help={"This is help por the user"}
                  input={(() => {
                    const child$Props = {
                      allowClear: false,
                      className: classNames("__wab_instance", sty.textInput),
                      debounce: 0,
                      defaultValue: "",
                      disabled: false,
                      leftIcon: (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__qEd4A
                          )}
                        >
                          {"Drop Icon"}
                        </div>
                      ),

                      onChange: async (...eventArgs: any) => {
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
                      },
                      placeholder: "Placeholder",
                      rightIcon: (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__n1OZe
                          )}
                        >
                          {"Drop Icon"}
                        </div>
                      ),

                      showLeftIcon: false,
                      showRightIcon: false,
                      size: "large",
                      status: (() => {
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
                      })(),
                      value: generateStateValueProp($state, [
                        "textInput",
                        "value"
                      ]),
                      variant: "outlined"
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "textInput.value"
                        }
                      ],

                      [],
                      undefined ?? {},
                      child$Props
                    );
                    initializePlasmicStates(
                      $state,
                      [
                        {
                          name: "textInput.value",
                          initFunc: ({ $props, $state, $queries }) =>
                            (() => {
                              try {
                                return $ctx.user.phone.number;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "undefined";
                                }
                                throw e;
                              }
                            })()
                        }
                      ],

                      []
                    );
                    return (
                      <TextInput
                        data-plasmic-name={"textInput"}
                        data-plasmic-override={overrides.textInput}
                        {...child$Props}
                      />
                    );
                  })()}
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
                  description2={``}
                  error={generateStateValueProp($state, [
                    "formField2",
                    "error"
                  ])}
                  input={
                    <PasswordInput
                      data-plasmic-name={"passwordInput"}
                      data-plasmic-override={overrides.passwordInput}
                      allowClear={false}
                      className={classNames(
                        "__wab_instance",
                        sty.passwordInput
                      )}
                      defaultValue={""}
                      disabled={false}
                      leftIcon={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__bMp6F
                          )}
                        >
                          {"Drop Icon"}
                        </div>
                      }
                      onChange={generateStateOnChangeProp($state, [
                        "passwordInput",
                        "value"
                      ])}
                      placeholder={"••••••••••••"}
                      rightIcon={
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__znKdL
                          )}
                        >
                          {"Drop Icon"}
                        </div>
                      }
                      showLeftIcon={false}
                      showRightIcon={false}
                      size={"large"}
                      value={generateStateValueProp($state, [
                        "passwordInput",
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

                <Button
                  block={true}
                  className={classNames("__wab_instance", sty.button__wqHp1)}
                  danger={false}
                  ghost={false}
                  icon={null}
                  iconPosition={"start"}
                  isSubmit={true}
                  label={"Submit Form"}
                  loading={false}
                  size={"middle"}
                  variant={"primary"}
                  withIcon={false}
                />
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

          <div className={classNames(projectcss.all, sty.freeBox__d9Skc)}>
            <SelectInput
              data-plasmic-name={"selectBeta"}
              data-plasmic-override={overrides.selectBeta}
              dropdownStyle={{
                width: "100%",
                padding: "4px",
                overflow: "hidden"
              }}
              isLoading={false}
              isSearchable={true}
              menu={(_par =>
                !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                (() => {
                  try {
                    return Array.from({ length: 30 });
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return [];
                    }
                    throw e;
                  }
                })()
              ).map((__plasmic_item_0, __plasmic_idx_0) => {
                const currentItem = __plasmic_item_0;
                const currentIndex = __plasmic_idx_0;
                return (
                  <SelectItem
                    className={classNames(
                      "__wab_instance",
                      sty.selectItem___7BcHs
                    )}
                    key={currentIndex}
                  />
                );
              })}
              onOpenChange={async () => {
                const $steps = {};
              }}
              onSearch={async value => {
                const $steps = {};

                $steps["runCode"] = true
                  ? (() => {
                      const actionArgs = {
                        customFunction: async () => {
                          return (() => {
                            return console.log($state.selectBeta.searchValue);
                          })();
                        }
                      };
                      return (({ customFunction }) => {
                        return customFunction();
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["runCode"] != null &&
                  typeof $steps["runCode"] === "object" &&
                  typeof $steps["runCode"].then === "function"
                ) {
                  $steps["runCode"] = await $steps["runCode"];
                }
              }}
              onSearchValueChange={generateStateOnChangeProp($state, [
                "selectBeta",
                "searchValue"
              ])}
              onSizeChange={generateStateOnChangeProp($state, [
                "selectBeta",
                "size"
              ])}
              onValueChange={generateStateOnChangeProp($state, [
                "selectBeta",
                "value"
              ])}
              searchValue={generateStateValueProp($state, [
                "selectBeta",
                "searchValue"
              ])}
              size={generateStateValueProp($state, ["selectBeta", "size"])}
              value={generateStateValueProp($state, ["selectBeta", "value"])}
              width={"100%"}
            />

            {(() => {
              const child$Props = {
                allowClear: false,
                className: classNames("__wab_instance", sty.textInput2),
                debounce: 1000,
                defaultValue: "",
                disabled: false,
                leftIcon: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___33PZp
                    )}
                  >
                    {"Drop Icon"}
                  </div>
                ),

                mask: "99 9999 9999",
                onChange: generateStateOnChangeProp($state, [
                  "textInput2",
                  "value"
                ]),
                placeholder: "Placeholder",
                rightIcon: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xkcyd
                    )}
                  >
                    {"Drop Icon"}
                  </div>
                ),

                showLeftIcon: false,
                showRightIcon: false,
                size: "large",
                value: generateStateValueProp($state, ["textInput2", "value"]),
                variant: "outlined"
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "value",
                    plasmicStateName: "textInput2.value"
                  }
                ],

                [],
                undefined ?? {},
                child$Props
              );
              initializePlasmicStates(
                $state,
                [
                  {
                    name: "textInput2.value",
                    initFunc: ({ $props, $state, $queries }) =>
                      (() => {
                        try {
                          return $ctx.user.phone.number;
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
                  }
                ],

                []
              );
              return (
                <TextInput
                  data-plasmic-name={"textInput2"}
                  data-plasmic-override={overrides.textInput2}
                  {...child$Props}
                />
              );
            })()}
            <NumberInput
              data-plasmic-name={"numberInput"}
              data-plasmic-override={overrides.numberInput}
              className={classNames("__wab_instance", sty.numberInput)}
              defaultValue={""}
              disabled={false}
              leftIcon={null}
              onChange={generateStateOnChangeProp($state, [
                "numberInput",
                "value"
              ])}
              placeholder={"0.00"}
              precision={2}
              showLeftIcon={false}
              size={"large"}
              step={1}
              value={generateStateValueProp($state, ["numberInput", "value"])}
              variant={"outlined"}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__fGbcu)}>
            <SelectItem
              className={classNames("__wab_instance", sty.selectItem__ir86N)}
              isActive={true}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ieyl4
                  )}
                >
                  {"Select Item"}
                </div>
              }
            />
          </div>
          <Cropper
            data-plasmic-name={"cropper"}
            data-plasmic-override={overrides.cropper}
            className={classNames("__wab_instance", sty.cropper)}
            content={
              <Button
                block={false}
                className={classNames("__wab_instance", sty.button__e1Je2)}
                danger={false}
                ghost={false}
                iconPosition={"start"}
                isSubmit={false}
                label={"Button"}
                loading={false}
                size={"middle"}
                variant={"primary"}
                withIcon={false}
              />
            }
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["cropper", "file"]).apply(
                null,
                eventArgs
              );
              (async file => {
                const $steps = {};

                $steps["updateCropperValue"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["cropper", "value"]
                        },
                        operation: 0,
                        value: {
                          tester: "hello world"
                        }
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
                  $steps["updateCropperValue"] != null &&
                  typeof $steps["updateCropperValue"] === "object" &&
                  typeof $steps["updateCropperValue"].then === "function"
                ) {
                  $steps["updateCropperValue"] = await $steps[
                    "updateCropperValue"
                  ];
                }
              }).apply(null, eventArgs);
            }}
            value={generateStateValueProp($state, ["cropper", "file"])}
          />

          <SelectInput
            data-plasmic-name={"selectInput"}
            data-plasmic-override={overrides.selectInput}
            className={classNames("__wab_instance", sty.selectInput)}
            onSearchValueChange={generateStateOnChangeProp($state, [
              "selectInput",
              "searchValue"
            ])}
            onSizeChange={generateStateOnChangeProp($state, [
              "selectInput",
              "size"
            ])}
            onValueChange={generateStateOnChangeProp($state, [
              "selectInput",
              "value"
            ])}
            searchValue={generateStateValueProp($state, [
              "selectInput",
              "searchValue"
            ])}
            size={generateStateValueProp($state, ["selectInput", "size"])}
            value={generateStateValueProp($state, ["selectInput", "value"])}
            width={"100%"}
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
    "passwordInput",
    "selectBeta",
    "textInput2",
    "numberInput",
    "cropper",
    "selectInput"
  ],

  form: ["form", "formField", "textInput", "formField2", "passwordInput"],
  formField: ["formField", "textInput"],
  textInput: ["textInput"],
  formField2: ["formField2", "passwordInput"],
  passwordInput: ["passwordInput"],
  selectBeta: ["selectBeta"],
  textInput2: ["textInput2"],
  numberInput: ["numberInput"],
  cropper: ["cropper"],
  selectInput: ["selectInput"]
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
  passwordInput: typeof PasswordInput;
  selectBeta: typeof SelectInput;
  textInput2: typeof TextInput;
  numberInput: typeof NumberInput;
  cropper: typeof Cropper;
  selectInput: typeof SelectInput;
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
    passwordInput: makeNodeComponent("passwordInput"),
    selectBeta: makeNodeComponent("selectBeta"),
    textInput2: makeNodeComponent("textInput2"),
    numberInput: makeNodeComponent("numberInput"),
    cropper: makeNodeComponent("cropper"),
    selectInput: makeNodeComponent("selectInput"),

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
