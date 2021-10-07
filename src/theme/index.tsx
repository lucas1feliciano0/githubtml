import { DefaultTheme } from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const theme: DefaultTheme = {
  borderRadius: {
    small: 12,
    medium: 16,
    big: 28,
  },

  wp,
  hp,

  padding: {
    small: 8,
    medium: 12,
    big: 24,
  },

  colors: {
    primary: "#9466ff",

    secondary: "#7954ce",

    background: {
      primary: "#010409",
      secondary: "#0D1117",
    },

    texts: {
      primary: "#c9d1d9",
      white: "#8b949e",
    },

    border: "#30363d",
  },
};

export default theme;
