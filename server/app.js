const app = require('express');
const { WebSocketServer } = require('ws');

// Define port for http
const PORT = process.env.PORT || 3000;

const server = app().listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`)
});

const webSocketServer = new WebSocketServer({server});

var sockets = {};

webSocketServer.on('connection', (webSocket, req) =>{
    var userID = req.url.substr(1);
    sockets[userID] = webSocket;
    console.log('User connected:', userID);

    webSocket.on('message', message => {
        var datastring = message.toString();
        if(datastring.charAt(0) == "{"){ // Check if message starts with '{' to check if it's json
            datastring = datastring.replace(/\'/g, '"');
            var data = JSON.parse(datastring)
            if(data.auth == "chatappauthkey231r4"){
                var boardws = webSockets[data.userid]; // Send to connected user
                var msg = "{'cmd':'message','msg':'"+data.msg+"','from':'"+data.from+"'}";
                boardws.send(msg)
            }
        }
    });
});