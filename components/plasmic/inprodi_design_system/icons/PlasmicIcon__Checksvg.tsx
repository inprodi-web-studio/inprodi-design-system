// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChecksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChecksvgIcon(props: ChecksvgIconProps) {
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
          "M229.66 77.66l-128 128a8 8 0 01-11.32 0l-56-56a8 8 0 0111.32-11.32L96 188.69 218.34 66.34a8 8 0 0111.32 11.32z"
        }
      ></path>
    </svg>
  );
}

export default ChecksvgIcon;
/* prettier-ignore-end */
