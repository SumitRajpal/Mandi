import { navigationRef } from 'src/components/RootNavigation';
import AuthProvider from 'src/context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { SCREENS, StackParamList } from 'src/screens';
import React, { Suspense, useEffect } from 'react';
import _ from "lodash";
import {LogBox, Platform, SafeAreaView} from 'react-native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import KeyboardManager from 'react-native-keyboard-manager';
import SplashScreen from 'react-native-splash-screen';
import { LocalizationProvider } from 'src/context/LocalizationProvider';
import { ProgressView } from 'src/components';


LogBox.ignoreAllLogs(false);
const { Navigator, Screen } = createStackNavigator<StackParamList>();


function App(): JSX.Element {

  useEffect(() => {
    if (Platform.OS === "ios") {
      KeyboardManager.setEnable(true);
    }
    SplashScreen.hide();
    return () => {
      if (Platform.OS === "ios") {
        KeyboardManager.setEnable(false);
      }
    };
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1
      }
    }
  });
  return (
    <Suspense fallback={<ProgressView/>}>
      <LocalizationProvider>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
                <NavigationContainer ref={navigationRef}>
                  <Navigator
                    screenOptions={{
                      headerShown: false,
                      gestureEnabled: false
                    }} 
                    initialRouteName={SCREENS.Splash.identifier}>
                    {_.toArray(SCREENS).map((item:any) => 
                      item.component ? (
                        <Screen
                          key={item.identifier}
                          name={item.identifier}
                          component={item.component}
                        />
                       
                      ) : null
                    )}
                    
                  </Navigator>
                </NavigationContainer>
              </QueryClientProvider>
              </AuthProvider>
              </LocalizationProvider>
    </Suspense>
  );
}

export default App;
