// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FloppyDiskBacksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FloppyDiskBacksvgIcon(props: FloppyDiskBacksvgIconProps) {
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
          "M208 32H83.31A15.86 15.86 0 0072 36.69L36.69 72A15.86 15.86 0 0032 83.31V208a16 16 0 0016 16h160a16 16 0 0016-16V48a16 16 0 00-16-16zM88 48h80v32H88zm120 160H48V83.31l24-24V80a16 16 0 0016 16h80a16 16 0 0016-16V48h24zm-80-96a40 40 0 1040 40 40 40 0 00-40-40zm0 64a24 24 0 1124-24 24 24 0 01-24 24z"
        }
      ></path>
    </svg>
  );
}

export default FloppyDiskBacksvgIcon;
/* prettier-ignore-end */
