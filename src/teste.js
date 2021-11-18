const horario = {
    0: {
      description: "Dra. Ana Caroline Calderaro Farias",
      h: "Segunda à Sexta: 9:00h às 12:00h - 15:00h às 20:00h\nSábado: 9:00h às 13:00h",
    },
    1: {
      description: "Dra Rosália Canto",
      h: "_Por data e hora marcada_",
    },
    2: {
        description: "Dra Loretta Farias Valente",
        h: "_Por data e hora marcada_",
      }
}

var msg=3

if (msg in horario){console.log('TA dentro')}
else{console.log('Deu merda')}