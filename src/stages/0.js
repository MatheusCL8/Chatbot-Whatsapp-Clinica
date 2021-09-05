const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg, contato,client) {
    
    // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
    stamp = new Date();
    hours = stamp.getHours();
    if (hours >= 18 && hours < 24) {
        time = "Boa noite"
    } else if (hours >= 12 && hours < 18) {
        time = "Boa tarde"
    } else if (hours >= 0 && hours < 12) {
        time = "Bom dia"
    }


    let menu = "";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${element.description}\n`;
    });

    db[user].stage = 1;

    let text=`${time}, a *ESPAÇO SAÚDE - CLÍNICA ÍNTEGRADA MÉDICA E ODONTOLÓGICA* agradece seu contato, ${contato}.\nPara facilitar o atendimento, envie uma das opções abaixo, conforme a sua dúvida. Como podemos ajudar? 🥰\n\n${menu}`;

    client.sendText(user,text)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

    //return [,
    //];
}

exports.execute = execute;