// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckCircleDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckCircleDuotonesvgIcon(
  props: CheckCircleDuotonesvgIconProps
) {
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
        d={"M224 128a96 96 0 11-96-96 96 96 0 0196 96z"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M173.66 98.34a8 8 0 010 11.32l-56 56a8 8 0 01-11.32 0l-24-24a8 8 0 0111.32-11.32L112 148.69l50.34-50.35a8 8 0 0111.32 0zM232 128A104 104 0 11128 24a104.11 104.11 0 01104 104zm-16 0a88 88 0 10-88 88 88.1 88.1 0 0088-88z"
        }
      ></path>
    </svg>
  );
}

export default CheckCircleDuotonesvgIcon;
/* prettier-ignore-end */
