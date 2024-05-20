// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneCallDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneCallDuotonesvgIcon(props: PhoneCallDuotonesvgIconProps) {
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
          "M215.94 182.08A48.33 48.33 0 01168 224 136 136 0 0132 88a48.33 48.33 0 0141.92-47.94 8 8 0 018.3 4.8l21.13 47.2a8 8 0 01-.66 7.53L81.32 125a7.93 7.93 0 00-.54 7.81c8.27 16.93 25.77 34.22 42.75 42.41a7.92 7.92 0 007.83-.59l25-21.3a8 8 0 017.59-.69l47.16 21.13a8 8 0 014.83 8.31z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M144.27 45.93a8 8 0 019.8-5.66 86.22 86.22 0 0161.66 61.66 8 8 0 01-5.66 9.8 8.23 8.23 0 01-2.07.27 8 8 0 01-7.73-5.94 70.35 70.35 0 00-50.33-50.33 8 8 0 01-5.67-9.8zm-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 00176 120a8.23 8.23 0 002.07-.27 8 8 0 005.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 10-4.13 15.46zm81.94 95.35A56.26 56.26 0 01168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0148.92-55.88 16 16 0 0116.62 9.52l21.12 47.15v.12a16 16 0 01-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 01.75-.56 16 16 0 0115.17-1.4l.13.06 47.11 21.11a16 16 0 019.55 16.62zm-15.88-2h-.11l-47-21.05-24.35 20.71a8.44 8.44 0 01-.74.56 16 16 0 01-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 011-15.7 6.13 6.13 0 01.57-.77L96 95.15l-21-47a.61.61 0 010-.12A40.2 40.2 0 0040 88a128.14 128.14 0 00128 128 40.21 40.21 0 0040-34.93z"
        }
      ></path>
    </svg>
  );
}

export default PhoneCallDuotonesvgIcon;
/* prettier-ignore-end */
