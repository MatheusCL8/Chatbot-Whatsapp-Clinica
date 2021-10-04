const { db } = require("../models/banco");
const { hora_unimed } = require("../menu/unimed");
const { menu0 } = require("../menu/menu0");


function execute(user, msg,contato,client) {
    let menu = "";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${element.description}\n`;
    });

    if (Number(msg)-1 in hora_unimed) {
        db[user].stage = 1;
        let text=`*${hora_unimed[Number(msg)-1].description}*\n${hora_unimed[Number(msg)-1].h}\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 7️⃣ para encerrar\n${menu}`;
        client.sendImage(user,`./src/imagens/${hora_unimed[Number(msg)-1].description}.jpg`,'horario',text)
        .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
    }

    else {
        db[user].stage = 2;
        client.sendText(user,"Sinto muito, mas você digitou um código que não corresponde a um dos profissionais listados. Por favor, digite um código válido 👩‍⚕️👨‍⚕️");
    }
}

exports.execute = execute;