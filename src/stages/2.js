const { db } = require("../models/banco");
const { hora } = require("../menu/hora");
const { menu0 } = require("../menu/menu0");

var valores=[1,2,3,4,5,6,7,8,9,10,11,12]

function execute(user, msg) {
    let menu = "";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${element.description}\n`;
    });

    if (Number(msg) in valores) {
        db[user].stage = 1;
        return [`*${hora[Number(msg)].description}*\n${hora[Number(msg)].h}\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 5️⃣ para encerrar\n${menu}`];
    }

    if (!hora[Number(msg)]) {
        db[user].stage = 2;
        return ["Sinto muito, mas você digitou um código que não corresponde a um dos profissionais listados. Por favor, digite um código válido 👩‍⚕️👨‍⚕️"];
    }
}

exports.execute = execute;