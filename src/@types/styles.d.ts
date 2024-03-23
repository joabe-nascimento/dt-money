import "styled-components";
import ThemeType = defaultTheme;
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-conponents" {
  export interface DefaultTheme extends ThemeType {}
}
