import SCREEN_IDENTIFIER from 'src/constants/screens';
import Splash from 'src/screens/Splash/Splash';
import Login from 'src/screens/Authorization/Login';
import Home from 'src/screens/Home/Home';
import Otp from 'src/screens/Authorization/Otp';
import ProductList from 'src/screens/Product/ProductList';
import Checkout from 'src/screens/Checkout/Checkout';
import PaymentOption from 'src/screens/Payment/PaymentOption';
import Profile from 'src/screens/Profile/Profile';
import OrderHistory from 'src/screens/Order/OrderHistory';

const SCREENS: any = {
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

  Home: {
    key: SCREEN_IDENTIFIER.Home.key,
    title: SCREEN_IDENTIFIER.Home.title,
    identifier: SCREEN_IDENTIFIER.Home.identifier,
    component: Home
  },
  Otp: {
    key: SCREEN_IDENTIFIER.Otp.key,
    title: SCREEN_IDENTIFIER.Otp.title,
    identifier: SCREEN_IDENTIFIER.Otp.identifier,
    component: Otp
  },
  ProductList: {
    key: SCREEN_IDENTIFIER.ProductList.key,
    title: SCREEN_IDENTIFIER.ProductList.title,
    identifier: SCREEN_IDENTIFIER.ProductList.identifier,
    component: ProductList

  },
  Checkout: {
    key: SCREEN_IDENTIFIER.Checkout.key,
    title: SCREEN_IDENTIFIER.Checkout.title,
    identifier: SCREEN_IDENTIFIER.Checkout.identifier,
    component: Checkout

  },
  Payment: {
    key: SCREEN_IDENTIFIER.Payment.key,
    title: SCREEN_IDENTIFIER.Payment.title,
    identifier: SCREEN_IDENTIFIER.Payment.identifier,
    component: PaymentOption
  },

  Profile: {
    key: SCREEN_IDENTIFIER.Profile.key,
    title: SCREEN_IDENTIFIER.Profile.title,
    identifier: SCREEN_IDENTIFIER.Profile.identifier,
    component: Profile
  },

  OrderHistory: {
    key: SCREEN_IDENTIFIER.OrderHistory.key,
    title: SCREEN_IDENTIFIER.OrderHistory.title,
    identifier: SCREEN_IDENTIFIER.OrderHistory.identifier,
    component: OrderHistory
  }
};

export { SCREENS };