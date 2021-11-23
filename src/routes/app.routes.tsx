/* eslint-disable prettier/prettier */

import React, { useContext } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import Loading from '../pages/loading';
import AuthContext from '../contexts/auth';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  const {user, loading} = useContext(AuthContext);

  return (
    <Stack.Navigator
      // initialRouteName="Loading"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={user !== null && !loading ? Home : Loading} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
