// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretUpDownsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretUpDownsvgIcon(props: CaretUpDownsvgIconProps) {
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
          "M181.66 170.34a8 8 0 010 11.32l-48 48a8 8 0 01-11.32 0l-48-48a8 8 0 0111.32-11.32L128 212.69l42.34-42.35a8 8 0 0111.32 0zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0011.32-11.32l-48-48a8 8 0 00-11.32 0l-48 48a8 8 0 0011.32 11.32z"
        }
      ></path>
    </svg>
  );
}

export default CaretUpDownsvgIcon;
/* prettier-ignore-end */
