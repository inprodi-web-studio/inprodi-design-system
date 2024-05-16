// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeOpenDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeOpenDuotonesvgIcon(
  props: EnvelopeOpenDuotonesvgIconProps
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

      <path d={"M224 96l-78.55 56h-34.9L32 96l96-64z"} opacity={".2"}></path>

      <path
        d={
          "M228.44 89.34l-96-64a8 8 0 00-8.88 0l-96 64A8 8 0 0024 96v104a16 16 0 0016 16h176a16 16 0 0016-16V96a8 8 0 00-3.56-6.66zM96.72 152L40 192v-80.47zm16.37 8h29.82l56.63 40H56.46zm46.19-8L216 111.53V192zM128 41.61l81.91 54.61-67 47.78h-29.8l-67-47.78z"
        }
      ></path>
    </svg>
  );
}

export default EnvelopeOpenDuotonesvgIcon;
/* prettier-ignore-end */
