// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nPYJMkHKsudqrrya3SLGq
// Component: Inphc4Lb7s0U

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

import TitleText from "../../TitleText"; // plasmic-import: NxJEJ3yCzHgk/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5nPYJMkHKsudqrrya3SLGq/projectcss
import sty from "./PlasmicTypographies.module.css"; // plasmic-import: Inphc4Lb7s0U/css

createPlasmicElementProxy;

export type PlasmicTypographies__VariantMembers = {};
export type PlasmicTypographies__VariantsArgs = {};
type VariantPropType = keyof PlasmicTypographies__VariantsArgs;
export const PlasmicTypographies__VariantProps = new Array<VariantPropType>();

export type PlasmicTypographies__ArgsType = {};
type ArgPropType = keyof PlasmicTypographies__ArgsType;
export const PlasmicTypographies__ArgProps = new Array<ArgPropType>();

export type PlasmicTypographies__OverridesType = {
  mainSection?: Flex__<"div">;
  texts?: Flex__<"div">;
  xsText?: Flex__<"div">;
  smText?: Flex__<"div">;
  smText2?: Flex__<"div">;
  smText3?: Flex__<"div">;
  smText4?: Flex__<"div">;
  titles?: Flex__<"div">;
  titleText?: Flex__<"div">;
};

export interface DefaultTypographiesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTypographies__RenderFunc(props: {
  variants: PlasmicTypographies__VariantsArgs;
  args: PlasmicTypographies__ArgsType;
  overrides: PlasmicTypographies__OverridesType;
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

  return (
    <React.Fragment>
      <Head></Head>

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
          <Stack__
            as={"div"}
            data-plasmic-name={"texts"}
            data-plasmic-override={overrides.texts}
            hasGap={true}
            className={classNames(projectcss.all, sty.texts)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"xsText"}
              data-plasmic-override={overrides.xsText}
              hasGap={true}
              className={classNames(projectcss.all, sty.xsText)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jirpu
                )}
              >
                {"XS Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9G3GY
                )}
              >
                {"XS Light Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cPsob
                )}
              >
                {"XS Bold Text"}
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"smText"}
              data-plasmic-override={overrides.smText}
              hasGap={true}
              className={classNames(projectcss.all, sty.smText)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wzMp
                )}
              >
                {"SM Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__smz8V
                )}
              >
                {"SM Light Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8QzBa
                )}
              >
                {"SM Bold Text"}
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"smText2"}
              data-plasmic-override={overrides.smText2}
              hasGap={true}
              className={classNames(projectcss.all, sty.smText2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p58MT
                )}
              >
                {"MD Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kOLii
                )}
              >
                {"MD Light Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z7OZk
                )}
              >
                {"MD Bold Text"}
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"smText3"}
              data-plasmic-override={overrides.smText3}
              hasGap={true}
              className={classNames(projectcss.all, sty.smText3)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yCp3Y
                )}
              >
                {"LG Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xsi1
                )}
              >
                {"LG Light Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gY2L
                )}
              >
                {"LG Bold Text"}
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"smText4"}
              data-plasmic-override={overrides.smText4}
              hasGap={true}
              className={classNames(projectcss.all, sty.smText4)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__n1Nh
                )}
              >
                {"XL Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__d3AHq
                )}
              >
                {"XL Light Text"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tE6Zi
                )}
              >
                {"XL Bold Text"}
              </div>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"titles"}
            data-plasmic-override={overrides.titles}
            hasGap={true}
            className={classNames(projectcss.all, sty.titles)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__z80Y
              )}
            >
              {"SM Title"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eKaaQ
              )}
            >
              {"MD Title"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gr11
              )}
            >
              {"LG Title"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"titleText"}
            data-plasmic-override={overrides.titleText}
            hasGap={true}
            className={classNames(projectcss.all, sty.titleText)}
          >
            <TitleText
              className={classNames("__wab_instance", sty.titleText__qO2Gx)}
              direction={"left"}
              secondaryText={"Complementary Text"}
              size={"md"}
              title={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__sai38
                  )}
                >
                  {"Small Title"}
                </div>
              }
            />
          </Stack__>
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  mainSection: [
    "mainSection",
    "texts",
    "xsText",
    "smText",
    "smText2",
    "smText3",
    "smText4",
    "titles",
    "titleText"
  ],

  texts: ["texts", "xsText", "smText", "smText2", "smText3", "smText4"],
  xsText: ["xsText"],
  smText: ["smText"],
  smText2: ["smText2"],
  smText3: ["smText3"],
  smText4: ["smText4"],
  titles: ["titles"],
  titleText: ["titleText"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  mainSection: "div";
  texts: "div";
  xsText: "div";
  smText: "div";
  smText2: "div";
  smText3: "div";
  smText4: "div";
  titles: "div";
  titleText: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTypographies__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTypographies__VariantsArgs;
    args?: PlasmicTypographies__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTypographies__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTypographies__ArgsType,
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
          internalArgPropNames: PlasmicTypographies__ArgProps,
          internalVariantPropNames: PlasmicTypographies__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTypographies__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "mainSection") {
    func.displayName = "PlasmicTypographies";
  } else {
    func.displayName = `PlasmicTypographies.${nodeName}`;
  }
  return func;
}

export const PlasmicTypographies = Object.assign(
  // Top-level PlasmicTypographies renders the root element
  makeNodeComponent("mainSection"),
  {
    // Helper components rendering sub-elements
    texts: makeNodeComponent("texts"),
    xsText: makeNodeComponent("xsText"),
    smText: makeNodeComponent("smText"),
    smText2: makeNodeComponent("smText2"),
    smText3: makeNodeComponent("smText3"),
    smText4: makeNodeComponent("smText4"),
    titles: makeNodeComponent("titles"),
    titleText: makeNodeComponent("titleText"),

    // Metadata about props expected for PlasmicTypographies
    internalVariantProps: PlasmicTypographies__VariantProps,
    internalArgProps: PlasmicTypographies__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTypographies;
/* prettier-ignore-end */
