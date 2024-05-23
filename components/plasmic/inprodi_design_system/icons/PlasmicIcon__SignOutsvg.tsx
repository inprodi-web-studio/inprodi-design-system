// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SignOutsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SignOutsvgIcon(props: SignOutsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M120 216a8 8 0 01-8 8H48a8 8 0 01-8-8V40a8 8 0 018-8h64a8 8 0 010 16H56v160h56a8 8 0 018 8zm109.66-93.66l-40-40a8 8 0 00-11.32 11.32L204.69 120H112a8 8 0 000 16h92.69l-26.35 26.34a8 8 0 0011.32 11.32l40-40a8 8 0 000-11.32z"
        }
      ></path>
    </svg>
  );
}

export default SignOutsvgIcon;
/* prettier-ignore-end */
