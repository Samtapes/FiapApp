/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './contexts/auth';
import Routes from './routes/routes';
import {StatusBar} from 'react-native';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent"/>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </NavigationContainer>
);

export default App;
