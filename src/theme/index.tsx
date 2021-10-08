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
    small: wp('1%'),
    medium: wp('3%'),
    big: wp('5%'),
  },

  colors: {
    primary: "#07A0C3",

    secondary: "#086788",

    background: {
      primary: "#010409",
      secondary: "#0D1117",
    },

    texts: {
      primary: "#c9d1d9",
      secondary: "#8b949e",
    },

    border: "#30363d",
  },
};

export default theme;
