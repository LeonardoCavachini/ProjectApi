import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      font: string
    }
    font: {
      default: string
    }
    sizes: {
      xsmall: string
      small: string
      medium: string
      large: string
    }
    media: {
      lteMedium: string
    }
  }
}
