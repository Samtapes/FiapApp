/* eslint-disable prettier/prettier */

import axios from 'axios';
import getTask from './getTask';


// interface Data {
//     user: {
//         rm: string;
//         password: string;
//     }

//     data: {
//         dia: number;
//         mes: number;
//         ano: number;
//     }
// }


async function getData(data){

    // Setando url base
    const api = axios.create({
        baseURL: 'https://www2.fiap.com.br/school/alunos',
        // maxRedirects: 0,
        withCredentials: false,
    });



    // Requiring querystring to send info as formdata
    var querystring = require('querystring');


    // Criando var que armazenará o cookie
    var cookie;


    var resultado;


    // Fazendo login
    await api.post('/verifica.asp', querystring.stringify({origem: 'school', rm: data.user.rm, senha: data.user.password}), {headers: {"Access-Control-Allow-Origin": "*", "Origin": "https://www.fiap.com.br", "Referer": "https://www.fiap.com.br/colegio/", "Access-Control-Allow-Credential": true}}).then(async function(res) {


        // pegando o cookie
        cookie = res.headers['set-cookie'][0];
        console.log(cookie);


        // Pegando somente o nome e o valor
        cookie = cookie.slice(0, 45);
        console.log(cookie);



        // Pegando lição
        await api.get(`agenda/default.asp?dia=${data.data.dia}&mes=${data.data.mes}&ano=${data.data.ano}`, {
            withCredentials: true,
            headers: {
                Cookie: cookie,
            },
        }).then(function(res) {


            // "Convertendo" data retornada para html
            // const dom = jsdom(String(res.data));

            resultado = getTask(res.data);
        });
    });

    return Promise.resolve(resultado);
}

// getData({user: {rm: '12983', password: '011203'}, data: {dia: 12, mes: 8, ano: 2020}}).then(res => console.log(res));
export default getData;
