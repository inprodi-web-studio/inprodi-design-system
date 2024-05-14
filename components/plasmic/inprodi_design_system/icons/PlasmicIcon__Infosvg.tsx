// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfosvgIcon(props: InfosvgIconProps) {
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
          "M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zm0 192a88 88 0 1188-88 88.1 88.1 0 01-88 88zm16-40a8 8 0 01-8 8 16 16 0 01-16-16v-40a8 8 0 010-16 16 16 0 0116 16v40a8 8 0 018 8zm-32-92a12 12 0 1112 12 12 12 0 01-12-12z"
        }
      ></path>
    </svg>
  );
}

export default InfosvgIcon;
/* prettier-ignore-end */
