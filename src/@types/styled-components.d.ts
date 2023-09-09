// create styled-components.d.ts in your project source
// if it isn't being picked up, check tsconfig compilerOptions.types
import type { CSSProp } from 'styled-components/native'
import { theme } from '../styles/theme'

type ThemeType = typeof theme

declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp
  }
}
