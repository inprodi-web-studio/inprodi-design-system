// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserCircleDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserCircleDuotonesvgIcon(props: UserCircleDuotonesvgIconProps) {
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
          "M224 128a95.76 95.76 0 01-31.8 71.37A72 72 0 00128 160a40 40 0 10-40-40 40 40 0 0040 40 72 72 0 00-64.2 39.37A96 96 0 11224 128z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M128 24a104 104 0 10104 104A104.11 104.11 0 00128 24zM74.08 197.5a64 64 0 01107.84 0 87.83 87.83 0 01-107.84 0zM96 120a32 32 0 1132 32 32 32 0 01-32-32zm97.76 66.41a79.66 79.66 0 00-36.06-28.75 48 48 0 10-59.4 0 79.66 79.66 0 00-36.06 28.75 88 88 0 11131.52 0z"
        }
      ></path>
    </svg>
  );
}

export default UserCircleDuotonesvgIcon;
/* prettier-ignore-end */
