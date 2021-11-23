/* eslint-disable prettier/prettier */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './styles';


const Loading: React.FC = () => {
  // const {signOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARREGANDO...</Text>
    </View>
  );
};


export default Loading;
