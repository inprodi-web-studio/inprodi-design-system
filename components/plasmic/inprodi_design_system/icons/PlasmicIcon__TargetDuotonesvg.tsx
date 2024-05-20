// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TargetDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TargetDuotonesvgIcon(props: TargetDuotonesvgIconProps) {
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
        d={"M176 128a48 48 0 11-48-48 48 48 0 0148 48z"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M221.87 83.16A104.1 104.1 0 11195.67 49l22.67-22.68a8 8 0 0111.32 11.32l-96 96a8 8 0 01-11.32-11.32l27.72-27.72a40 40 0 1017.87 31.09 8 8 0 1116-.9 56 56 0 11-22.38-41.65l22.75-22.75a87.88 87.88 0 1023.13 29.67 8 8 0 0114.44-6.9z"
        }
      ></path>
    </svg>
  );
}

export default TargetDuotonesvgIcon;
/* prettier-ignore-end */
