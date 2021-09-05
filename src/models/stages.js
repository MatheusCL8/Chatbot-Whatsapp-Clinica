var stages = {
    0: {
        descricao: "Boas Vindas",
        obj: require("../stages/0"),
    },
    1: {
        descricao: "Profissioais",
        obj: require("../stages/1"),
    },
    2: {
        descricao: "Horário Disponivel",
        obj: require("../stages/2"),
    },
    3: {
        descricao: "Agendamento",
        obj: require("../stages/3"),
    },
    4: {
        descricao: "Duvidas e Esclarecimentos",
        obj: require("../stages/4"),
    },

};

exports.step = stages;