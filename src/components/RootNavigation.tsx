import { SCREEN_IDENTIFIER, WEB_SERVICES } from "src/constants";
import {
  CommonActions,
  createNavigationContainerRef
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const logoutNavigation = () => {
  if (navigationRef.isReady()) {
    try {

    } catch (error) {
      // do nothing here
    }
   // logoutAPI();
   console.log("logout me")
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: SCREEN_IDENTIFIER.Login.identifier,
          }
        ]
      })
    );
  }
};
