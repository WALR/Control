var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var five = require("johnny-five"),
    board = new five.Board(),
    myLed;

app.get('/', function(req, res){
  res.sendfile('index.html');
});
board.on("ready", function() {

  motDer = new five.Led({
    pin: 5
  });
  motIzq = new five.Led({
    pin: 4
  });
  // myLed2 = new five.Led({
  //   pin: 10
  // });
  //var motor = new five.Motor(5);
  //myLed.strobe();

  // Hacemos que este disponible el objeto "myLed" dentro del REPL
  this.repl.inject({
      led: motDer,
      led: motIzq
      // led: myLed2
  });
  console.log( 'ready!' );

});

io.on('connection', function(socket){
  socket.on('led', function(btn){
    console.log(btn)
    if(btn==0){
    motDer.on();
    motIzq.off();
    //myLed.fadeIn();
    //motor.start(255);
    }
    else if(btn==1){
     motIzq.on();
     motDer.off();
     //myLed.fadeOut();
    }
    else if(btn==2){
     motIzq.on();
     motDer.on();
     //myLed.fadeOut();
    }
    else if(btn==3){
     motIzq.off();
     motDer.off();
     //myLed.fadeOut();
    }
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


// socket.on('led', function (data) {
//     console.log(data);
//      if(board.isReady){    led.strobe(data.delay); }
//   });



// var five = require("johnny-five"),
//    board = new five.Board();
// board.on("ready", function() {
//   // vamos a crear un LED en el pin 13 y a hacerlo parpadear por un segundo, el parametro que recibe son milisegundos
//   (new five.Led(13)).strobe(2000);
// });