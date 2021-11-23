/* eslint-disable prettier/prettier */

import jsdom from 'jsdom-jscore-rn';


function getTask(data){

    var NewData;

    // console.log(data)

    jsdom.env(String(data), function(error, window){

        // console.log(window.document.getElementsByTagName("HTML").innerHTML);

        // Caso tenha Ac e liçãso ou tenha nada
        if (window.document.getElementsByClassName('school-agenda-title').length === 2){

            // Caso tenha nenhuma lição e nenhuma Ac
            if (window.document.getElementsByClassName('school-agenda-description')[0].textContent.search('tros cadastrados na agenda para este') > 0){
                NewData = {ac_para_casa: 'Não há registros cadastrados na agenda para este dia!', para_casa: 'Não há registros cadastrados na agenda para este dia!'};
            }


            // Caso tenha lição e Ac
            else {
                var acs = [];
                var qntdAcs = (window.document.getElementsByClassName('school-agenda-item')[1].children.length) - 1;

                for (var i = 1; i < qntdAcs; i++){
                    acs.push({
                        materia: document.getElementsByClassName('school-agenda-item')[1].children[i].children[0].textContent,
                        conteudo: document.getElementsByClassName('school-agenda-item')[1].children[i].children[1].textContent,
                        entrega: document.getElementsByClassName('school-agenda-item')[1].children[i].children[3].textContent,
                    });
                }



                var licoes = [];
                var qntdLicoes = (window.document.getElementsByClassName('school-agenda-item')[2].children.length) - 1;

                for (var i = 1; i < qntdLicoes; i++){
                    licoes.push({
                        materia: document.getElementsByClassName('school-agenda-item')[2].children[i].children[0].textContent,
                        conteudo: document.getElementsByClassName('school-agenda-item')[2].children[i].children[1].textContent,
                        entrega: document.getElementsByClassName('school-agenda-item')[2].children[i].children[3].textContent,
                    });
                }


                NewData = {ac_para_casa: acs, para_casa: licoes};
            }
        }


        // Caso tenha lição ou Ac
        else if (window.document.getElementsByClassName('school-agenda-title').length === 1){

            // Tem lição
            if (window.document.getElementsByClassName('school-agenda-title')[0].innerHTML.search('Para casa') > 0){

                // Var que armazenará as lições
                var licoes = [];


                // Contando quantas lições tem na agenda
                var qntdLicoes = window.document.getElementsByClassName('school-agenda-description').length;


                // Percorrendo todas as lições
                for (var i = 0; i < qntdLicoes; i++){
                    licoes.push({
                        id: i,
                        materia: window.document.getElementsByClassName('school-agenda-description')[i].children[0].textContent,
                        conteudo: window.document.getElementsByClassName('school-agenda-description')[i].children[1].textContent,
                        entrega: window.document.getElementsByClassName('school-agenda-description')[i].children[3].textContent,
                    });
                }

                NewData = {ac_para_casa: 'Não há registros cadastrados na agenda para este dia!', para_casa: licoes};
            }


            // Tem AC
            else {
                // Var que armazenará as Acs
                var acs = [];


                // Contando quantas Acs tem na agenda
                var qntdAcs = window.document.getElementsByClassName('school-agenda-description').length;


                // Percorrendo todas as Acs
                for (var i = 0; i < qntdAcs; i++){
                    acs.push({
                        id: i,
                        materia: window.document.getElementsByClassName('school-agenda-description')[i].children[0].textContent,
                        conteudo: window.document.getElementsByClassName('school-agenda-description')[i].children[1].textContent,
                        entrega: window.document.getElementsByClassName('school-agenda-description')[i].children[3].textContent,
                    });
                }

                NewData = {ac_para_casa: acs, para_casa: 'Não há registros cadastrados na agenda para este dia!'};
            }
        }
    });

    return NewData;
}


export default getTask;
