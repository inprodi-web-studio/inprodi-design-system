// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nPYJMkHKsudqrrya3SLGq
// Component: dV7kERlv_9b4

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

import Card from "~/components/Card/Card.tsx"; // plasmic-import: nDtozaD8mTAX/codeComponent
import Divider from "~/components/Divider/Divider.tsx"; // plasmic-import: 7-ylPAFdGTBs/codeComponent
import AnimatedNumber from "~/components/AnimatedNumber/AnimatedNumber.tsx"; // plasmic-import: qbYBio9o21Vq/codeComponent
import Statistic from "../../Statistic"; // plasmic-import: XTNsZrFRrZal/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import Avatar from "~/components/Avatar/Avatar.tsx"; // plasmic-import: tNcz9rhbc3sz/codeComponent
import DropdownItem from "../../DropdownItem"; // plasmic-import: XOGoYay1a3bq/component
import DropdownConfig from "~/components/Dropdown/Dropdown.tsx"; // plasmic-import: 2FAf85kMy1wq/codeComponent

import {
  ColorSchemeValue,
  useColorScheme
} from "./PlasmicGlobalVariant__ColorScheme"; // plasmic-import: gdgBwRVFC7MJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5nPYJMkHKsudqrrya3SLGq/projectcss
import sty from "./PlasmicComponents.module.css"; // plasmic-import: dV7kERlv_9b4/css

import InfosvgIcon from "./icons/PlasmicIcon__Infosvg"; // plasmic-import: 2_kwtnaSzZgd/icon

createPlasmicElementProxy;

export type PlasmicComponents__VariantMembers = {};
export type PlasmicComponents__VariantsArgs = {};
type VariantPropType = keyof PlasmicComponents__VariantsArgs;
export const PlasmicComponents__VariantProps = new Array<VariantPropType>();

export type PlasmicComponents__ArgsType = {};
type ArgPropType = keyof PlasmicComponents__ArgsType;
export const PlasmicComponents__ArgProps = new Array<ArgPropType>();

export type PlasmicComponents__OverridesType = {
  mainSection?: Flex__<"div">;
  card?: Flex__<typeof Card>;
  divider?: Flex__<typeof Divider>;
  animatedNumber?: Flex__<typeof AnimatedNumber>;
  statistic?: Flex__<typeof Statistic>;
  button?: Flex__<typeof AntdButton>;
  avatar?: Flex__<typeof Avatar>;
  svg?: Flex__<"svg">;
  dropdownItem?: Flex__<typeof DropdownItem>;
  dropdown?: Flex__<typeof DropdownConfig>;
};

export interface DefaultComponentsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicComponents__RenderFunc(props: {
  variants: PlasmicComponents__VariantsArgs;
  args: PlasmicComponents__ArgsType;
  overrides: PlasmicComponents__OverridesType;
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
        path: "dropdown.isLoading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "dropdownItem.isSelected",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "dropdown.searchValue",
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
        <title key="title">{PlasmicComponents.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicComponents.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicComponents.pageMetadata.title}
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
          <Card
            data-plasmic-name={"card"}
            data-plasmic-override={overrides.card}
            className={classNames("__wab_instance", sty.card)}
            description={"description"}
            loading={false}
            padding={"20px"}
            shadow={"lg"}
            showTitle={true}
            title={"Tester"}
            width={"450px"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nl7Ac,
              {
                [sty.textglobal_colorScheme_dark__nl7AcOuga]: hasVariant(
                  globalVariants,
                  "colorScheme",
                  "dark"
                )
              }
            )}
          >
            {"Enter some text"}
          </div>
          <Divider
            data-plasmic-name={"divider"}
            data-plasmic-override={overrides.divider}
            className={classNames("__wab_instance", sty.divider, {
              [sty.dividerglobal_colorScheme_dark]: hasVariant(
                globalVariants,
                "colorScheme",
                "dark"
              )
            })}
            dashed={true}
            direction={"horizontal"}
            margin={"0px"}
            orientation={"left"}
            orientationMargin={"0px"}
            plain={false}
            text={"Text"}
          />

          <AnimatedNumber
            data-plasmic-name={"animatedNumber"}
            data-plasmic-override={overrides.animatedNumber}
            className={classNames("__wab_instance", sty.animatedNumber)}
            value={600}
          />

          <Statistic
            data-plasmic-name={"statistic"}
            data-plasmic-override={overrides.statistic}
            className={classNames("__wab_instance", sty.statistic)}
            prefix={``}
          />

          <AntdButton
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button, {
              [sty.buttonglobal_colorScheme_dark]: hasVariant(
                globalVariants,
                "colorScheme",
                "dark"
              ),
              [sty.buttonglobal_colorScheme_light]: hasVariant(
                globalVariants,
                "colorScheme",
                "light"
              )
            })}
            onClick={async () => {
              const $steps = {};
            }}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vhJs4
              )}
            >
              {"Button"}
            </div>
          </AntdButton>
          <Avatar
            data-plasmic-name={"avatar"}
            data-plasmic-override={overrides.avatar}
            bordered={true}
            circular={true}
            className={classNames("__wab_instance", sty.avatar)}
            color={"#868E96"}
            content={"Avatar"}
            icon={
              <svg
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            }
            image={
              "/plasmic/inprodi_design_system/images/colomos00HuevosDePascua202424Ff3F4472Jpg.jpg"
            }
            size={"md"}
            type={"text"}
            variant={"filled"}
          />

          <DropdownItem
            data-plasmic-name={"dropdownItem"}
            data-plasmic-override={overrides.dropdownItem}
            className={classNames("__wab_instance", sty.dropdownItem)}
            isSelected={generateStateValueProp($state, [
              "dropdownItem",
              "isSelected"
            ])}
            leftSection={(() => {
              try {
                return undefined;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return true;
                }
                throw e;
              }
            })()}
            onIsSelectedChange={generateStateOnChangeProp($state, [
              "dropdownItem",
              "isSelected"
            ])}
          />

          <DropdownConfig
            data-plasmic-name={"dropdown"}
            data-plasmic-override={overrides.dropdown}
            className={classNames("__wab_instance", sty.dropdown, {
              [sty.dropdownglobal_colorScheme_dark]: hasVariant(
                globalVariants,
                "colorScheme",
                "dark"
              )
            })}
            content={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kW8If
                )}
              >
                {"Dropdown Content"}
              </div>
            }
            dropdownContent={null}
            dropdownStyle={{ width: "auto", padding: "4px" }}
            isLoading={generateStateValueProp($state, [
              "dropdown",
              "isLoading"
            ])}
            isSearchable={true}
            onIsLoadingChange={generateStateOnChangeProp($state, [
              "dropdown",
              "isLoading"
            ])}
            onSearchValueChange={generateStateOnChangeProp($state, [
              "dropdown",
              "searchValue"
            ])}
            searchValue={generateStateValueProp($state, [
              "dropdown",
              "searchValue"
            ])}
            trigger={"click"}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  mainSection: [
    "mainSection",
    "card",
    "divider",
    "animatedNumber",
    "statistic",
    "button",
    "avatar",
    "svg",
    "dropdownItem",
    "dropdown"
  ],

  card: ["card"],
  divider: ["divider"],
  animatedNumber: ["animatedNumber"],
  statistic: ["statistic"],
  button: ["button"],
  avatar: ["avatar", "svg"],
  svg: ["svg"],
  dropdownItem: ["dropdownItem"],
  dropdown: ["dropdown"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  mainSection: "div";
  card: typeof Card;
  divider: typeof Divider;
  animatedNumber: typeof AnimatedNumber;
  statistic: typeof Statistic;
  button: typeof AntdButton;
  avatar: typeof Avatar;
  svg: "svg";
  dropdownItem: typeof DropdownItem;
  dropdown: typeof DropdownConfig;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComponents__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicComponents__VariantsArgs;
    args?: PlasmicComponents__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicComponents__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicComponents__ArgsType,
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
          internalArgPropNames: PlasmicComponents__ArgProps,
          internalVariantPropNames: PlasmicComponents__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicComponents__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "mainSection") {
    func.displayName = "PlasmicComponents";
  } else {
    func.displayName = `PlasmicComponents.${nodeName}`;
  }
  return func;
}

export const PlasmicComponents = Object.assign(
  // Top-level PlasmicComponents renders the root element
  makeNodeComponent("mainSection"),
  {
    // Helper components rendering sub-elements
    card: makeNodeComponent("card"),
    divider: makeNodeComponent("divider"),
    animatedNumber: makeNodeComponent("animatedNumber"),
    statistic: makeNodeComponent("statistic"),
    button: makeNodeComponent("button"),
    avatar: makeNodeComponent("avatar"),
    svg: makeNodeComponent("svg"),
    dropdownItem: makeNodeComponent("dropdownItem"),
    dropdown: makeNodeComponent("dropdown"),

    // Metadata about props expected for PlasmicComponents
    internalVariantProps: PlasmicComponents__VariantProps,
    internalArgProps: PlasmicComponents__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Components",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicComponents;
/* prettier-ignore-end */
