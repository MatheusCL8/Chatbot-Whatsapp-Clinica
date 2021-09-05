const venom = require('venom-bot');
const { db } = require("./models/banco");
const { step } = require("./models/stages");
const fs = require('fs');
const { app, BrowserWindow } = require('electron')

function createWindow (caminho) {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
    win.loadFile(caminho)
  }

venom
  .create('Matheus',
      (base64Qr, asciiQR, attempts, urlCode) => {
        var matches = base64Qr.match(/^data:([A-Za-z-+\\/]+);base64,(.+)$/),
          response = {};
   
        if (matches.length !== 3) {
          return new Error('Invalid input string');
        }
        response.type = matches[1];
        response.data = new Buffer.from(matches[2], 'base64');
   
        var imageBuffer = response;
        require('fs').writeFile(
          './src/qr-zap.png',
          imageBuffer['data'],
          'binary',
          function (err) {
            if (err != null) {
              console.log(err);
            }
          }
        );
      },
    
      (statusSession) => {
      if(statusSession==='notLogged'){
        app.whenReady().then(() => {
            createWindow('./src/index.html')
          })
      }
    console.log('Status Session: ', statusSession); 
  },
      { logQR: false }
  )
  
  .then((client) => {
    let time = 0, started = false;
    client.onStreamChange((state) => {
      console.log('Connection status: ', state);
      clearTimeout(time);
      if (state === 'CONNECTED' && !started) {
       start(client);
       started = true;
       app.whenReady().then(() => {
        createWindow('./src/conectado.html')
      })
      }
      //DISCONNECTED when the mobile device is disconnected
      if (state === 'DISCONNECTED' || state === 'SYNCING') {
        time = setTimeout(() => {
          client.close();
         // process.exit(); //optional function if you work with only one session
        }, 80000);
      }
      console.log('STATUS: ',state)
    });
    })


function start(client) {
    client.onMessage((message) => {
    if(message.isGroupMsg === false){
        let resp = step[getStage(message.from)].obj.execute(
            message.from,
            message.body,
            message.sender.name,
            client
        );
        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];
            client.sendText(message.from, element);
        }
    }
    });
}

function getStage(user) {
    if (db[user]) {
        //Se existir esse numero no banco de dados
        return db[user].stage;
    } else {
        //Se for a primeira vez que entra e contato
        db[user] = {
            stage: 0,
            itens: 0,
        };
        return db[user].stage;
    }
}

