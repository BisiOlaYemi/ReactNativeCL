import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoaderScreen from '../screens/LoaderScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Loader" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loader" component={LoaderScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
