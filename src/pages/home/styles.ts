/* eslint-disable prettier/prettier */

import {StyleSheet, StatusBar} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#011425',
      alignItems: 'center',
      justifyContent: 'center',
    },

    voltar: {
        color: "#FFF",
        position: 'absolute',
        top: StatusBar.currentHeight,
        left: 30,
    },

    tomorrow_container: {
        backgroundColor: "rgba(255,255,255,0.15)",
        borderRadius: 5,
        width: 90 + '%',
        marginBottom: 20,
        marginTop: 20
    },

    title: {
        fontSize: 28,
        color: '#FFF',
        marginBottom: 5,
    },

    subtitle: {
        textAlign: 'center',
        color: "#000",
        fontWeight: 'bold',
        paddingVertical: 8,
        backgroundColor: "#29f4d5",
    },

    text_title: {
        margin: 10,
        marginVertical: 10,
        color: "#FFF",
        fontWeight: 'bold',
    },

    text: {
        margin: 10,
        marginVertical: 5,
        color: "#FFF",
    },

    row: {
        width: "100%",
        height: 1,
        backgroundColor: '#fff',
        marginTop: 10,
    },

    container_licao: {
        width: 100 + '%',
        // height: 100 + '%'
    },

    data_personalizada_container: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
    },

    date_picker: {
        fontSize: 18,
        height: 'auto',
        width: 15 + '%',
        color: '#FFFFFF',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginHorizontal: 4,
    },

    loginBtn: {
        width: 300,
        marginTop: 20,
    },


    loginBtnView: {
        backgroundColor: '#29f4d5',
        paddingVertical: 5 + '%',
        alignItems: 'center',
    },


    loginBtnText: {
        color: '#000',
        fontFamily: 'normal',
        fontSize: 16
    },

    container_agenda: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;