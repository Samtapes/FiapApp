/* eslint-disable prettier/prettier */

import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AuthContext from '../../contexts/auth';
import styles from './styles';


const SignIn: React.FC = () => {
  const [rm, setRm] = useState('');
  const [senha, setSenha] = useState('');

  const {signIn} = useContext(AuthContext);
  async function handleLogin() {

    // Se o RM e a SENHA ter 5 caracteres
    if (rm.length === 5 && senha.length === 6) {
      signIn({rm: rm, password: senha});
    }

    // Se o RM e a SENHA ter menos que 5 caracteres
    else {
      Alert.alert(
        'Erro',
        'RM ou SENHAS errados! Tente novamente!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]
      );
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <TextInput
          keyboardType="numeric"
          placeholder="RM"
          placeholderTextColor="rgba(255,255,255,0.6)"
          value={rm}
          onChangeText={(novoRm: string) =>
            novoRm.length <= 5 ? setRm(novoRm) : console.log('big')
          }
          style={styles.loginInput}
        />
        <TextInput
          keyboardType="numeric"
          secureTextEntry={true}
          placeholder="SENHA"
          placeholderTextColor="rgba(255,255,255,0.6)"
          value={senha}
          onChangeText={(novaSenha: string) =>
            novaSenha.length <= 6 ? setSenha(novaSenha) : console.log('big')
          }
          style={styles.loginInput}
        />
      </KeyboardAvoidingView>

      <TouchableHighlight
        onPress={handleLogin}
        underlayColor="white"
        style={styles.loginBtn}>
        <View style={styles.loginBtnView}>
          <Text style={styles.loginBtnText}>Entrar</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};


export default SignIn;
