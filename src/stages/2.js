const { db } = require("../models/banco");
const { hora } = require("../menu/hora");
const { menu0 } = require("../menu/menu0");

var valores=[1,2,3,4,5,6,7,8,9,10,11]

function execute(user, msg,contato,client) {
    let menu = "";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${element.description}\n`;
    });

    if (Number(msg) in valores) {
        db[user].stage = 1;
        let text=`*${hora[Number(msg)].description}*\n${hora[Number(msg)].h}\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 5️⃣ para encerrar\n${menu}`;
        client.sendText(user,text)
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