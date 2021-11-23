/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginInput: {
    width: 300,
    borderColor: '#29f4d5',
    borderBottomWidth: 1,
    // padding: 1 + '%',
    textAlign: 'center',
    fontFamily: 'monospace',
    // fontWeight: 10,
    color: 'white',
    fontSize: 18,
    padding: 10,
    margin: 10,
  },

  loginBtn: {
    width: 300,
    marginTop: 40,
  },

  loginBtnView: {
    backgroundColor: '#29f4d5',
    paddingVertical: 5 + '%',
    alignItems: 'center',
  },

  loginBtnText: {
    color: '#000',
    fontFamily: 'normal',
    fontSize: 16,
  },
});

export default styles;
