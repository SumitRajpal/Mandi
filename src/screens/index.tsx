import Splash from '@src/screens/Splash/Splash';
import {SCREEN_IDENTIFIER} from '@src/constants';
const SCREENS = {
  Splash: {
    key: SCREEN_IDENTIFIER.Splash.key,
    title: SCREEN_IDENTIFIER.Splash.title,
    identifier: SCREEN_IDENTIFIER.Splash.identifier,
    component: Splash,
  },
};

export {SCREENS};
