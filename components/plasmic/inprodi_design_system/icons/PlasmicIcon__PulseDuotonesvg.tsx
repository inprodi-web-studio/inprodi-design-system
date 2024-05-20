// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PulseDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PulseDuotonesvgIcon(props: PulseDuotonesvgIconProps) {
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
        d={"M96 40l33.52 88H56zm104 88h-70.48L160 208z"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M240 128a8 8 0 01-8 8h-27.06l-37.78 75.58A8 8 0 01160 216h-.4a8 8 0 01-7.08-5.14L95.35 60.76l-32.07 70.55A8 8 0 0156 136H24a8 8 0 010-16h26.85l37.87-83.31a8 8 0 0114.76.46l57.51 151 31.85-63.71A8 8 0 01200 120h32a8 8 0 018 8z"
        }
      ></path>
    </svg>
  );
}

export default PulseDuotonesvgIcon;
/* prettier-ignore-end */
