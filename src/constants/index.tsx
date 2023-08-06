
import ApiConfig from "src/constants/env";
import { FONT_NAME, FONT_SIZE, FONT_WEIGHT,COLORS } from "src/constants/font";
import LANGUAGES from "src/constants/language";
import REACT_QUERY_KEYS from "src/constants/reactQuery";
import REGEX from "src/constants/regex";
import SCREEN_IDENTIFIER from "src/constants/screens";
import STORAGE_KEYS from "src/constants/storageKey";
import STRING from "src/constants/strings";
import {
  DATE_FORMAT,
  KEYBOARD_TYPE,
  PAGINATION_SIZE,
  STATUSBAR_CONTENT,
  TEXTFILED,
} from "src/constants/utils";
import {  WEB_SERVICES } from "src/constants/webServices";
import { Dimensions } from "react-native";
import { PERMISSIONS_KEYS } from "src/constants/role";

export {
  ApiConfig,
  WEB_SERVICES,
  STORAGE_KEYS,
  REACT_QUERY_KEYS,
  REGEX,
  STRING,
  SCREEN_IDENTIFIER,
  KEYBOARD_TYPE,
  STATUSBAR_CONTENT,
  FONT_NAME,
  FONT_WEIGHT,
  FONT_SIZE,
  TEXTFILED,
  LANGUAGES,
  DATE_FORMAT,
  PAGINATION_SIZE,
  PERMISSIONS_KEYS,
  COLORS
};



export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Math.floor(Dimensions.get("window").height);
export const screenRatio = Number((1024 / screenHeight).toFixed(1));
