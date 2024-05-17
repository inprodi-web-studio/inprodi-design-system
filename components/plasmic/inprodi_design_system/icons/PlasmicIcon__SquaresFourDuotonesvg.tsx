// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquaresFourDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquaresFourDuotonesvgIcon(
  props: SquaresFourDuotonesvgIconProps
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
        d={
          "M112 56v48a8 8 0 01-8 8H56a8 8 0 01-8-8V56a8 8 0 018-8h48a8 8 0 018 8zm88-8h-48a8 8 0 00-8 8v48a8 8 0 008 8h48a8 8 0 008-8V56a8 8 0 00-8-8zm-96 96H56a8 8 0 00-8 8v48a8 8 0 008 8h48a8 8 0 008-8v-48a8 8 0 00-8-8zm96 0h-48a8 8 0 00-8 8v48a8 8 0 008 8h48a8 8 0 008-8v-48a8 8 0 00-8-8z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M200 136h-48a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16v-48a16 16 0 00-16-16zm0 64h-48v-48h48v48zM104 40H56a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16V56a16 16 0 00-16-16zm0 64H56V56h48v48zm96-64h-48a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16V56a16 16 0 00-16-16zm0 64h-48V56h48v48zm-96 32H56a16 16 0 00-16 16v48a16 16 0 0016 16h48a16 16 0 0016-16v-48a16 16 0 00-16-16zm0 64H56v-48h48v48z"
        }
      ></path>
    </svg>
  );
}

export default SquaresFourDuotonesvgIcon;
/* prettier-ignore-end */
