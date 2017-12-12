//Requirements
var restify = require("restify");
var builder = require("botbuilder");

//Setup of Restify Server
var server = restify.createServer();
server.listen(process.env.Port || 3000, function()
{
    console.log('%s listening to %s', server.name, server.url);
});

//Chatbot create

var connector = new builder.ChatConnector
({appId:'srslyMIRAH', appPassword:'testP@assword'});
var bot = new builder.UniversalBot(connector);
server.post('api/messages', connector.listen());

//Bot Communication Initiate
bot.dialog('/', function(session){
    session.send("Hello there!");
});
