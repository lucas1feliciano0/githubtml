import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      small: number;
      medium: number;
      big: number;
    };

    wp: (widthPercent: string | number) => number;
    hp: (heightPercent: string | number) => number;

    padding: {
      small: number;
      medium: number;
      big: number;
    };

    colors: {
      primary: string;
      secondary: string;

      background: {
        primary: string;
        secondary: string;
      };

      texts: {
        primary: string;
        secondary: string;
      };

      border: string;
    };
  }
}
