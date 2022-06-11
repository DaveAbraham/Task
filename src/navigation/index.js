import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './stackNavigationContainer';

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default AppNavigationContainer;
