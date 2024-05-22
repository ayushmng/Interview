import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import {SplashScreen} from '../Screen/SplashScreen';
// import {TabAppSwitch} from '@components/TabSwitch/tabAppSwitch';
// import {LoginScreen} from '../Screen/Auth/LoginScreen';
// import {LogoutScreen} from '../Screen/Auth/Logout';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      })}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="tabs" component={BottomTabNavigation} />
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login', headerShown: false}}
      /> */}

      {/* <Stack.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          title: 'Logout User',
          // headerShown: false,
          header: () => {
            return <DefaultLayout />;
          },
        }}
      /> */}

      {/* <Stack.Screen
        name="TabAppSwitch"
        component={TabAppSwitch}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};
