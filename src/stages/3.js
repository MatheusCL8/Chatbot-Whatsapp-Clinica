const { db } = require("../models/banco");
const { menu0 } = require("../menu/menu0");

function execute(user, msg) {
    let menu = "";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${element.description}\n`;
    });
    console.log(db[user].itens);
    if (db[user].itens === 0) {
        console.log('aqui')
        db[user].itens=1;
        return ["Qual o melhor dia para você agendar? Por favor, coloque no formato dd/mm/aaaa (dia, mês, ano)"];
    }
    if (db[user].itens === 1) {
        db[user].itens=2;
        return ["Qual o serviço você quer agendar?"];

    }
    else if (db[user].itens === 2) {
        db[user].stage = 1;
        db[user].itens=0;
        return [`Perfeito! Entraremos em contato por ligação logo em breve! Agradecemos a sua preferencia!\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 5️⃣ para encerrar\n${menu}`];

    }

}

exports.execute = execute;