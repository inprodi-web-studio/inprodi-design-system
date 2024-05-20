// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserFocusDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserFocusDuotonesvgIcon(props: UserFocusDuotonesvgIconProps) {
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
        d={"M160 112a32 32 0 11-32-32 32 32 0 0132 32z"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M224 40v36a8 8 0 01-16 0V48h-28a8 8 0 010-16h36a8 8 0 018 8zm-8 132a8 8 0 00-8 8v28h-28a8 8 0 000 16h36a8 8 0 008-8v-36a8 8 0 00-8-8zM76 208H48v-28a8 8 0 00-16 0v36a8 8 0 008 8h36a8 8 0 000-16zM40 84a8 8 0 008-8V48h28a8 8 0 000-16H40a8 8 0 00-8 8v36a8 8 0 008 8zm136 92a8 8 0 01-6.41-3.19 52 52 0 00-83.2 0 8 8 0 11-12.8-9.62A67.94 67.94 0 01101 141.51a40 40 0 1153.94 0 67.94 67.94 0 0127.43 21.68A8 8 0 01176 176zm-48-40a24 24 0 10-24-24 24 24 0 0024 24z"
        }
      ></path>
    </svg>
  );
}

export default UserFocusDuotonesvgIcon;
/* prettier-ignore-end */
