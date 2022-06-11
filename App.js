import 'react-native-gesture-handler';
import React from 'react';
import AppNavigationContainer from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/configStore';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
  );
};

export default App;
