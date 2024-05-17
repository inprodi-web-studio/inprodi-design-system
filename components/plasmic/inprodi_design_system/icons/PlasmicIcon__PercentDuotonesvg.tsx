// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PercentDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PercentDuotonesvgIcon(props: PercentDuotonesvgIconProps) {
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
          "M95.8 56.2a28 28 0 11-39.6 0 28 28 0 0139.6 0zm104 104a28 28 0 100 39.6 28 28 0 000-39.6z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M205.66 61.64l-144 144a8 8 0 01-11.32-11.32l144-144a8 8 0 0111.32 11.31zm-155.12 39.8a36 36 0 0150.92-50.91 36 36 0 01-50.92 50.91zM56 76a20 20 0 1034.14-14.16A20 20 0 0056 76zm160 104a36 36 0 11-10.54-25.46A35.76 35.76 0 01216 180zm-16 0a20 20 0 10-5.86 14.14A19.87 19.87 0 00200 180z"
        }
      ></path>
    </svg>
  );
}

export default PercentDuotonesvgIcon;
/* prettier-ignore-end */
