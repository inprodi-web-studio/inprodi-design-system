// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScrollDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScrollDuotonesvgIcon(props: ScrollDuotonesvgIconProps) {
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
          "M200 176h-96s8 6 8 16a24 24 0 01-48 0V64a24 24 0 00-24-24h136a24 24 0 0124 24z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M96 104a8 8 0 018-8h64a8 8 0 010 16h-64a8 8 0 01-8-8zm8 40h64a8 8 0 000-16h-64a8 8 0 000 16zm128 48a32 32 0 01-32 32H88a32 32 0 01-32-32V64a16 16 0 00-32 0c0 5.74 4.83 9.62 4.88 9.66A8 8 0 0124 88a7.89 7.89 0 01-4.79-1.61C18.05 85.54 8 77.61 8 64a32 32 0 0132-32h136a32 32 0 0132 32v104h8a8 8 0 014.8 1.6c1.2.86 11.2 8.79 11.2 22.4zM96.26 173.48A8.07 8.07 0 01104 168h88V64a16 16 0 00-16-16H67.69A31.71 31.71 0 0172 64v128a16 16 0 0032 0c0-5.74-4.83-9.62-4.88-9.66a7.82 7.82 0 01-2.86-8.86zM216 192a12.58 12.58 0 00-3.23-8h-94a26.92 26.92 0 011.21 8 31.82 31.82 0 01-4.29 16H200a16 16 0 0016-16z"
        }
      ></path>
    </svg>
  );
}

export default ScrollDuotonesvgIcon;
/* prettier-ignore-end */
