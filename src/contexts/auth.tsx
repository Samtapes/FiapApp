/* eslint-disable prettier/prettier */

import React, {createContext, useCallback, useLayoutEffect, useState} from 'react';
import { Alert } from 'react-native';
import getData from '../services';
import AsyncStorage from '@react-native-community/async-storage';

interface ILicao {
  id: string,
  conteudo: string;
  entrega: string;
  materia: string;
}

interface IAvaliacao {
  id: string,
  conteudo: string;
  entrega: string;
  materia: string;
}

interface ITarefas {
  para_casa: Array<ILicao> | string;
  ac_para_casa: Array<IAvaliacao> | string;
}

interface User {
  rm: string;
  password: string;
}

interface IData {
  dia: number;
  mes: number;
  ano: number;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(userData: User): Promise<void>;
  signOut(): void;
  tarefas: ITarefas | null;
  loading: boolean;
  data: IData;
  newSearch(user: User, data: IData): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [tarefas, setTarefas] = useState<ITarefas | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({dia: new Date().getDate() + 1, mes: new Date().getMonth() + 1, ano: new Date().getFullYear()});

  const signIn = useCallback(
    async (userData: User) => {
      setLoading(true);
      const response = await getData({user: {rm: userData.rm, password: userData.password}, data});
      console.log(response);

      if (response === undefined) {
        Alert.alert(
          'Erro',
          'RM ou SENHAS errados! Tente novamente!',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]
        );
      }

      else {
        setUser(userData);
        setTarefas(response);
        console.log(userData);
        await AsyncStorage.setItem('@fiapapp:user', JSON.stringify(userData));
      }

      setLoading(false);
  }, [data]);

  // Get user login
  useLayoutEffect(() => {
    async function getUserLogin() {
      const userLogin = await AsyncStorage.getItem('@fiapapp:user');

      if (userLogin !== null) {
        signIn(JSON.parse(userLogin))
      }
    }

    getUserLogin();
  }, [signIn]);


  async function signOut() {
    setUser(null);
    await AsyncStorage.removeItem('@fiapapp:user');
    setTarefas(null);
    setLoading(false);
  }

  async function newSearch(newUser: User, newData: IData) {
    setData(newData);
    signIn(newUser);
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, tarefas, loading, data, newSearch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
