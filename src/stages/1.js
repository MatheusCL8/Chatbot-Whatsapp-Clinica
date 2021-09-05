const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg,contato,client) {
    let menu = "";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${element.description}\n`;
    });
    if (msg === "1") {
        db[user].stage = 1;
        client.sendText(user, `➡ *Dra. Ana Caroline Calderaro Farias*: _Dentista_\n\n➡ *Dra Rosália Couto*: _Endodontista_\n\n➡ *Sr. Igor Ramos*: _Psicólogo_\n\n➡ *Sra Eliana Oliveira*: _Psicóloga_\n\n➡ *Dra Nazaré Monteiro*: _Fonoaudióloga_\n\n➡ *Sra. Amanda Marinho*: _Nutricionista_\n\n➡ *Dr. Júlio Sanchez*: _Pediatra_\n\n➡ *Dr. Genilson Oliveira*: _Dentista_\n\n➡ *Dra. Andressa Ramalho Walfredo*: _Ortodontista_\n\n➡ *Dr. João Batista Alves Júnior*: _Alergista_\n\n➡ *Sra. Tereza Cristina Feijão Tavares*: _Terapêuta Ocupacional_\n\n➡ *Dra Cláudia Inês Guáquitas Arias*: _Raio X Digital Odontológico_\n\n❌ *Não Temos*:\n    ➡ _Neurologista_\n    ➡ _Ortopedista_\n    ➡ _Cardiologista_\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 5️⃣ para encerrar\n${menu}`);
    }

    if (msg === "2") {
        db[user].stage = 2;
        client.sendText(user, "Selecione o numero do profissional que deseja ver o horario:\n\n1️⃣ *Dra. Ana Caroline Calderaro Farias*\n\n2️⃣ *Dra Rosália Canto*\n\n3️⃣ *Dra Loretta Farias Valente*\n\n4️⃣ *Dr. Kalil Antônio Kzan Pereira*\n\n5️⃣ *Dr. Igor Ramos*\n\n6️⃣ *Dra. Victoria Gonçalves*\n\n7️⃣ *Dr. Júlio Sanchez*\n\n8️⃣ *Dra. Andressa Ramalho Walfredo*\n\n9️⃣ *Dr. João Batista Alves Júnior*\n\n1️⃣0️⃣ *Sra. Tereza Cristina Feijão Tavares*\n\n1️⃣1️⃣ *Sra. Tereza Cristina Feijão Tavares*");
    }
    if (msg === "3") {
        db[user].stage = 3;
        client.sendText(user, "Para realizarmos seu agendamento, será necessário alguns dados.\n\nQual é o seu nome completo, por gentileza?");
    }
    if (msg === "4") {
        db[user].stage = 0;
        client.sendText(user, "Para tirar suas duvidas e lhe dar esclarecimentos, estarei lhe enviando um link que irá lhe direcionar para a recepção do *ESPAÇO SAÚDE - CLÍNICA ÍNTEGRADA MÉDICA E ODONTOLÓGICA*","Clique neste link 👉colocar link aqui");
    }
    if (msg === "5") {
        db[user].stage = 0;
        let resp=[`Agradecemos o seu contato! Esperamos poder falar com você novamente, ${contato}.`,
        "Caso queira ficar por dentro de tudo sobre a *ESPAÇO SAÚDE - CLÍNICA ÍNTEGRADA MÉDICA E ODONTOLÓGICA*, siga a gente nas redes sociais! Acesse os links e faça parte de nossa família"
];
        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];
            client.sendText(user, element);
        }
    }

    if (!menu0[msg]) {
        client.sendText( user,"Desculpe, mas você digitou um codigo inválido ❌\nPor Favor, selecione cum codigo válido ✔")
    }

}

exports.execute = execute;