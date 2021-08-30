const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg,contato) {
    let menu = "";

    Object.keys(menu0).forEach((value) => {
        let element = menu0[value];
        menu += `${element.description}\n`;
    });
    if (msg === "1") {
        db[user].stage = 1;
        return [`➡ *Dra. Ana Caroline Calderaro Farias*: _Dentista_\n\n➡ *Dra Rosália Couto*: _Endodontista_\n\n➡ *Sr. Igor Ramos*: _Psicólogo_\n\n➡ *Sra Eliana Oliveira*: _Psicóloga_\n\n➡ *Dra Nazaré Monteiro*: _Fonoaudióloga_\n\n➡ *Sra. Amanda Marinho*: _Nutricionista_\n\n➡ *Dr. Júlio Sanchez*: _Pediatra_\n\n➡ *Dr. Genilson Oliveira*: _Dentista_\n\n➡ *Dra. Andressa Ramalho Walfredo*: _Ortodontista_\n\n➡ *Dr. João Batista Alves Júnior*: _Alergista_\n\n➡ *Sra. Tereza Cristina Feijão Tavares*: _Terapêuta Ocupacional_\n\n➡ *Dra Cláudia Inês Guáquitas Arias*: _Raio X Digital Odontológico_\n\n❌ *Não Temos*:\n    ➡ _Neurologista_\n    ➡ _Ortopedista_\n    ➡ _Cardiologista_\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 5️⃣ para encerrar\n${menu}`];
    }

    if (msg === "2") {
        db[user].stage = 2;
        return ["Selecione o numero do profissional que deseja ver o horario:\n\n1️⃣ *Dra. Ana Caroline Calderaro Farias*\n\n2️⃣ *Dra Rosália Couto*\n\n3️⃣ *Sr. Igor Ramos*\n\n4️⃣ *Sra Eliana Oliveira*\n\n5️⃣ *Dra Nazaré Monteiro*\n\n6️⃣ *Sra. Amanda Marinho*\n\n7️⃣ *Dr. Júlio Sanchez*\n\n8️⃣ *Dr. Genilson Oliveira*\n\n9️⃣ *Dra. Andressa Ramalho Walfredo*\n\n1️⃣0️⃣ *Dr. João Batista Alves Júnior*\n\n1️⃣1️⃣ *Sra. Tereza Cristina Feijão Tavares*\n\n1️⃣2️⃣ *Dra Cláudia Inês Guáquitas Arias*"];
    }
    if (msg === "3") {
        db[user].stage = 3;
        return ["Qual é o seu nome completo, por gentileza","Para realizarmos seu agendamento, será necessário alguns dados."];
    }
    if (msg === "4") {
        db[user].stage = 0;
        return ["Para tirar suas duvidas e lhe dar esclarecimentos, estarei lhe enviando um link que irá lhe direcionar para a recepção do *ESPAÇO SAÚDE - CLÍNICA ÍNTEGRADA MÉDICA E ODONTOLÓGICA*","Clique neste link 👉colocar link aqui"];
    }
    if (msg === "5") {
        db[user].stage = 0;
        return [`Agradecemos o seu contato! Esperamos poder falar com você novamente, ${contato}.`,
                "Caso queira ficar por dentro de tudo sobre a *ESPAÇO SAÚDE - CLÍNICA ÍNTEGRADA MÉDICA E ODONTOLÓGICA*, siga a gente nas redes sociais! Acesse os links e faça parte de nossa família"
    ];
    }

    if (!menu0[msg]) {
        return [
            "Desculpe, mas você digitou um codigo inválido ❌\nPor Favor, selecione cum codigo válido ✔",
        ];
    }

}

exports.execute = execute;