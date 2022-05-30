import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    body: {
      main: {
        background: string
        color: string
      }
      sidebar: {
        background: string
        borderRight: string
        color: string
      }
    }
    footer: {
      background: string
      color: string
    }
    header: {
      background: string
      color: string
    }
  }
}
