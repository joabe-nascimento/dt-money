import { defaultTheme } from '../styles/themes/default'
import ThemeType = defaultTheme

type ThemeType = typeof defaultTheme

declare module 'styled-conponents' {
  export interface DefaultTheme extends ThemeType {}
}
