const { db } = require("../models/banco");

function execute(user, msg,contato,client) {
    if (msg === 'SAIR'){
            db[user].stage = 0;
            let resp=[`Agradecemos o seu contato! Esperamos poder falar com você novamente, ${contato}.`,
        "Caso queira ficar por dentro de tudo sobre a *ESPAÇO SAÚDE - CLÍNICA ÍNTEGRADA MÉDICA E ODONTOLÓGICA*, siga a gente nas redes sociais! Acesse os links e faça parte de nossa família"
        ];
        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];
            client.sendText(user, element);
        }
    }
}
exports.execute = execute;