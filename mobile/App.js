import React from 'react';

import GlobalStyles from './global-styles';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';

import Routes from './src/routes';

export default function App() {

  console.disableYellowBox = true;

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Routes />
        <GlobalStyles />
      </Provider>
    </NavigationContainer>
  );
};