// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftsvgIcon(props: ArrowLeftsvgIconProps) {
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
          "M224 128a8 8 0 01-8 8H59.31l58.35 58.34a8 8 0 01-11.32 11.32l-72-72a8 8 0 010-11.32l72-72a8 8 0 0111.32 11.32L59.31 120H216a8 8 0 018 8z"
        }
      ></path>
    </svg>
  );
}

export default ArrowLeftsvgIcon;
/* prettier-ignore-end */
