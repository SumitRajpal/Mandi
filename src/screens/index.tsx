import SCREEN_IDENTIFIER from 'src/constants/screens';
import Splash from 'src/screens/Splash/Splash';
import Login from 'src/screens/Authorization/Login';
import Home from 'src/screens/Home/Home';
import Otp from 'src/screens/Authorization/Otp';
import ProductList from 'src/screens/Product/ProductList';

const SCREENS:any = {
  Splash: {
    key: SCREEN_IDENTIFIER.Splash.key,
    title: SCREEN_IDENTIFIER.Splash.title,
    identifier: SCREEN_IDENTIFIER.Splash.identifier,
    component: Splash,
  },
  Login: {
    key: SCREEN_IDENTIFIER.Login.key,
    title: SCREEN_IDENTIFIER.Login.title,
    identifier: SCREEN_IDENTIFIER.Login.identifier,
    component: Login
  },

  Home:{
    key: SCREEN_IDENTIFIER.Home.key,
    title: SCREEN_IDENTIFIER.Home.title,
    identifier: SCREEN_IDENTIFIER.Home.identifier,
    component:Home
  },
  Otp:{
    key: SCREEN_IDENTIFIER.Otp.key,
    title: SCREEN_IDENTIFIER.Otp.title,
    identifier: SCREEN_IDENTIFIER.Otp.identifier,
    component:Otp
  },
  ProductList:{
    key: SCREEN_IDENTIFIER.ProductList.key,
    title: SCREEN_IDENTIFIER.ProductList.title,
    identifier: SCREEN_IDENTIFIER.ProductList.identifier,
    component:ProductList
    
  }
};

export {SCREENS};