// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ColorSchemeValue = "light" | "dark";
export const ColorSchemeContext = React.createContext<
  ColorSchemeValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useColorScheme() {
  return React.useContext(ColorSchemeContext);
}

export default ColorSchemeContext;
/* prettier-ignore-end */
