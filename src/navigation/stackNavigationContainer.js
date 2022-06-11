import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Cart from '../screens/cart';
import Home from '../screens/home';
import {CART, HOME, PRODUCT_DATAIL} from '../constants';
import ProductDetails from '../screens/prductDetail';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen name={PRODUCT_DATAIL} component={ProductDetails} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
