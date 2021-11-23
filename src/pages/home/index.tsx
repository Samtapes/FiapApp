/* eslint-disable prettier/prettier */

import React, {useContext, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Text,
  View,
} from 'react-native';
import styles from './styles';
// import {ScrollView} from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth';
import { TextInput } from 'react-native-gesture-handler';

interface ILicao {
  id: string,
  conteudo: string;
  entrega: string;
  materia: string;
}

const Home: React.FC = () => {
  const {tarefas, signOut, data, user, newSearch} = useContext(AuthContext);
  const [dia, setDia] = useState(String(data.dia));
  const [mes, setMes] = useState(String(data.mes));

  function RenderListaLicoes() {
    if (tarefas?.para_casa === 'Não há registros cadastrados na agenda para este dia!') {
      return (
        <Text style={[styles.text, {marginVertical: 15}]}>Não há registros cadastrados na agenda para este dia!</Text>
      );
    } else {
      return (
        <FlatList<any>
          data={typeof tarefas?.para_casa !== 'string' ? tarefas?.para_casa : []}
          renderItem={({item}: {item: ILicao}) => (
            <View>
              <View>
                <Text style={styles.text_title}>{item.materia}</Text>
                <Text style={styles.text}>{item.conteudo}</Text>
                <Text style={styles.text_title}>{item.entrega}</Text>
              </View>

              <View style={styles.row}/>
            </View>
          )}
          keyExtractor={(item: ILicao) => item.id}
        />
      );
    }
  }

  function RenderListaAcs() {
    if (tarefas?.ac_para_casa === 'Não há registros cadastrados na agenda para este dia!') {
      return (
        <Text style={[styles.text, {marginVertical: 15}]}>Não há registros cadastrados na agenda para este dia!</Text>
      );
    } else {
      return (
        <FlatList<any>
          data={typeof tarefas?.ac_para_casa !== 'string' ? tarefas?.ac_para_casa : []}
          renderItem={({item}: {item: ILicao}) => (
            <View>
              <View>
                <Text style={styles.text_title}>{item.materia}</Text>
                <Text style={styles.text}>{item.conteudo}</Text>
                <Text style={styles.text_title}>{item.entrega}</Text>
              </View>

              <View style={styles.row}/>
            </View>
          )}
          keyExtractor={(item: ILicao) => item.id}
        />
      );
    }
  }

  function handleNewSearch() {
    if ((parseInt(dia) <= 31 && parseInt(dia) >= 1) && (parseInt(mes) <= 12 && parseInt(mes) >= 1)){
      if (user !== null) {newSearch(user, {dia: parseInt(dia), mes: parseInt(mes), ano: data.ano});}
    } else {Alert.alert('Dia ou mês incorreto!')}
  }

  return (
    <View style={styles.container}>
      <Text style={styles.voltar} onPress={signOut}>
        LOGOUT
      </Text>

      <Text style={styles.title}>AGENDA</Text>

      <View style={styles.tomorrow_container}>
        <Text style={styles.subtitle}>PARA CASA</Text>
        <RenderListaLicoes/>
      </View>

      <View style={styles.tomorrow_container}>
        <Text style={styles.subtitle}>AC PARA CASA</Text>
        <RenderListaAcs/>
      </View>

      <Text style={[styles.title, {marginTop: 20}]}>Data:</Text>
      <View style={styles.data_personalizada_container}>
        <TextInput placeholder="Dia" placeholderTextColor='gray' style={styles.date_picker} keyboardType='numeric' value={String(dia)} onChangeText={novoDia => setDia(novoDia?.replace(/[^0-9]/g, ''))}/>
        <TextInput placeholder="Mês" placeholderTextColor='gray' style={styles.date_picker} keyboardType='numeric' value={String(mes)} onChangeText={novoMes => setMes(novoMes?.replace(/[^0-9]/g, ''))}/>
      </View>

      <View style={{marginTop: 20}}>
        <Button title={`Procurar Licão em: ${dia}/${mes}/${data.ano}`} onPress={handleNewSearch} />
      </View>
    </View>
  );
};


export default Home;
