// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InvoiceDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InvoiceDuotonesvgIcon(props: InvoiceDuotonesvgIconProps) {
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

      <path d={"M224 104v88a8 8 0 01-8 8h-48v-96z"} opacity={".2"}></path>

      <path
        d={
          "M28 128a8 8 0 010-16h28a8 8 0 000-16H40a24 24 0 010-48 8 8 0 0116 0h8a8 8 0 010 16H40a8 8 0 000 16h16a24 24 0 010 48 8 8 0 01-16 0zm204-72v136a16 16 0 01-16 16H40a16 16 0 01-16-16v-40a8 8 0 0116 0v40h120v-32H80a8 8 0 010-16h80v-32h-56a8 8 0 010-16h112V64H96a8 8 0 010-16h128a8 8 0 018 8zm-56 88h40v-32h-40zm40 48v-32h-40v32z"
        }
      ></path>
    </svg>
  );
}

export default InvoiceDuotonesvgIcon;
/* prettier-ignore-end */
