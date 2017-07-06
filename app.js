var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: '0b0e3144-6077-4ee8-b1c4-2fc4acef96ca',
    appPassword: 'LEJsF6bEgF3WZedWJftdb9k'
});

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});
// Listen for messages from users 
server.post('/api/messages', connector.listen());

//bot dialog
// bot.dialog('/', function(session){
//     session.send("Hello World");
// });
