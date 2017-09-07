var http = require("http");

var PORTONE = 8080;
var PORTTWO = 9000;


function handleRequestOne(request, response) {
  response.end("Your name is Danny")
}

function handleRequestTwo(request, response) {
  response.end("You're whack")
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function() {
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {
  console.log("Server listening on: http://localhost:%s", PORTTWO);
});
