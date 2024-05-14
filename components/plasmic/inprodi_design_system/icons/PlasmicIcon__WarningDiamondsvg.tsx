// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WarningDiamondsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WarningDiamondsvgIcon(props: WarningDiamondsvgIconProps) {
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
          "M128 72a8 8 0 018 8v56a8 8 0 01-16 0V80a8 8 0 018-8zm-12 100a12 12 0 1012-12 12 12 0 00-12 12zm124-44a15.85 15.85 0 01-4.67 11.28l-96.05 96.06a16 16 0 01-22.56 0l-96-96.06a16 16 0 010-22.56l96.05-96.06a16 16 0 0122.56 0l96.05 96.06A15.85 15.85 0 01240 128zm-16 0l-96-96-96 96 96 96z"
        }
      ></path>
    </svg>
  );
}

export default WarningDiamondsvgIcon;
/* prettier-ignore-end */
