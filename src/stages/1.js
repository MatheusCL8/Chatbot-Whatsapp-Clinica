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
        client.sendText(user, `APARELHOS ORTODÔNTICOS 🤩\n\n🔸 Aparelho Convencional - R$ 600,00 reais (Superior e Inferior)\n🔸 Aparelho Estético - R$ 1.000 reais (Superior e Inferior)\n🔸 Aparelho Auto-Ligado - R$ 1.200 (Superior e Inferior)\nAceitamos Pix e Parcelamos no Cartão de Crédito e Débito 💰💳\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 7️⃣ para encerrar\n${menu}`);
        client.sendText(user, `➡ _Cirurgiã Dentista / Especialista em Bucomaxilofacial e Implantodontia_\n\n➡ _Endodontista_\n\n➡ _Endodontista e Clínico Geral (Odontológico)_\n\n➡ _Psicólogo_\n\n➡ _Psicóloga_\n\n➡ _Ortopedista e Traumatologista_\n\n➡ _Pediatra_\n\n➡ _Ortodontista_\n\n➡ _Alergista_\n\n➡ _Terapeuta Ocupacional_\n\n➡ _Dematologista_\n\n☢ _Raio-X Digital Odontológico_\n\n❌ *Não Temos*:\n    ➡ _Neurologista_\n    ➡ _Ginecologista_\n    ➡ _Cardiologista_`);
        
    }
    if (msg === "2") {
        db[user].stage = 2;
        client.sendText(user, "Selecione o numero do profissional que deseja ver o horario:\n\n1️⃣ *Dra. Ana Caroline Calderaro Farias*: _Cirurgiã Dentista / Especialista em Bucomaxilofacial e Implantodontia_\n\n2️⃣ *Dra Rosália Canto*: _Endodontista_\n\n3️⃣ *Dra Loretta Farias Valente*: _Endodontista e Clínica Geral (Odontológica)_\n\n4️⃣ *Dr. Kalil Antônio Kzan Pereira*: _Ortopedista e Traumatologista_\n\n5️⃣ *Dr. Igor Ramos*: _Psicólogo_\n\n6️⃣ *Dra. Victoria Gonçalves*: _Psicóloga_\n\n7️⃣ *Dr. Júlio Sanchez*: _Pediatra_\n\n8️⃣ *Dra. Andressa Ramalho Walfredo*: _Ortodontista_\n\n9️⃣ *Dr. João Batista Alves Júnior*: Alergista\n\n1️⃣0️⃣ *Sra. Tereza Cristina Feijão Tavares*: Terapêuta Ocupacional\n\n1️⃣1️⃣ *Dra. Cláudia Inês Guáquitas Arias*: _Dermatologista_");
    }
    if (msg === "3") {
        db[user].stage = 1;
        client.sendText(user, `RAIO-X DIGITAL ODONTOLÓGICO ☢️\n\n➡️ Raio-X Periapical - R$ 100,00 reais\n➡️ Radiografia Panorâmica - R$ 200,00 reais\n➡️ Documentação de Implante - R$ 200,00 reais\n➡️ Documentação Ortodôntica Completa - R$ 250,00 reais\n\n\nEnvie uma das opções abaixo, conforme a sua dúvida ou envie 7️⃣ para encerrar\n${menu}`);
    }
    if (msg === "4") {
        db[user].stage = 3;
        client.sendText(user, "Para realizarmos seu agendamento, será necessário alguns dados.\n\nQual é o seu nome completo, por gentileza?");
    }
    if (msg === "5") {
        db[user].stage = 4;
        client.sendText(user, "Selecione o numero do serviço que deseja ver a disponibilidade e o profissional:\n\n1️⃣ _Ortopedista e Traumatologista_\n\n2️⃣ _Psicólogo_");
    }
    if (msg === "6") {
        db[user].stage = 1;
        client.sendText(user,`Envie uma das opções abaixo, conforme a sua dúvida ou envie 7️⃣ para encerrar\n${menu}`)
        client.sendText(user, `Para tirar suas duvidas e fazer esclarecimentos sobre qualquer assunto que não tenha sido colocado ans mensagens, ligue para o nosso numero (93) 99114-7747! A *ESPAÇO SAÚDE - CLÍNICA ÍNTEGRADA MÉDICA E ODONTOLÓGICA* estará feliz em receber sua ligação!`);
        
    }
    if (msg === "7") {
        db[user].stage = 0;
        let resp=[`Agradecemos o seu contato! Esperamos poder falar com você novamente, ${contato}.`,
        "Caso queira ficar por dentro de tudo sobre a *ESPAÇO SAÚDE - CLÍNICA ÍNTEGRADA MÉDICA E ODONTOLÓGICA*, siga a gente nas redes sociais! Acesse os links e faça parte de nossa família"
];
        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];
            client.sendText(user, element);
        }
        setTimeout(function() {
            db[user].stage = 0
        }, 180000);
    }

<<<<<<< HEAD
    if (!menu0[Number(msg)] && msg != 'obrigado') {
        db[user].stage = 5;
        client.sendText(user, "A secretária irá te responder em breve! Caso queira encerrar a conversa com a secretária, envie *SAIR* - em letras maiúscula -, que o nosso atendimento automatizado irá retornar");
               
=======
    if (!menu0[msg]) {
        client.sendText( user,"Desculpe, mas você digitou um codigo inválido ❌\nPor Favor, selecione cum codigo válido ✔")
>>>>>>> parent of eccf7ff (Atualização de mensagem)
    }

}


exports.execute = execute;