const { db } = require("../models/banco");
const { menu0 } = require("../menu/menu0");

var dados = [];

function execute(user, msg,contato,client) {
    dados.push(msg)
    let menu = "";
    stamp = new Date();
    dia = stamp.getDate();
    mes = stamp.getMonth();
    ano = stamp.getFullYear();
    data_comp= `${dia}/${mes}/${ano}`;
    console.log(day);
    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${element.description}\n`;
    });
    console.log(db[user].itens);
    if (db[user].itens === 0) {
        db[user].itens=1;
        client.sendText(user,"Qual o melhor dia para você agendar? Por favor, coloque no formato dd/mm/aaaa (dia, mês, ano)");
    }
    else if (db[user].itens === 1) {
        db[user].itens=2;
        client.sendText(user,"Qual o serviço você quer agendar?");

    }
    else if (db[user].itens === 2) {
        dados.push('939'+user.slice(4,12))
        let dados_cliente=`Data: ${data_comp}\nCliente: ${dados[0]}\nTelefone: ${dados[3]}\nData para Agendamento: ${dados[1]}\nServiço solicitado: ${dados[2]}`
        console.log(dados);
        db[user].stage = 1;
        db[user].itens=0;
        client.sendText(user,`Perfeito! Acabamos de enviar sua solicitação para a secretaria. Entraremos em contato logo em breve! Agradecemos a sua preferencia!\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 5️⃣ para encerrar\n${menu}`);
        //let alguem='559391426581-1631324747@g.us'
        //client.sendText(alguem,dados_cliente);
    }

}
exports.execute = execute;