var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 9080;
var io = require('socket.io')(http);
var five = require("johnny-five"),
    board = new five.Board();


app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.use(express["static"](__dirname + '/public'));

board.on("ready", function(){

  motDer = new five.Led({pin: 5});
  motIzq = new five.Led({pin: 4});
  ledGarage = new five.Led({pin: 12});
  ledPublica = new five.Led({pin: 11});
  ledSala = new five.Led({pin: 10});
  ledCocina = new five.Led({pin: 9});
  ledDorm = new five.Led({pin: 8});
  ledBano = new five.Led({pin: 7});
  // myLed2 = new five.Led({
  //   pin: 10
  // });
  //var motor = new five.Motor(5);
  //myLed.strobe();

  // Hacemos que este disponible el objeto "myLed" dentro del REPL
  this.repl.inject({
      led: motDer,
      led: motIzq,
      led: ledGarage,
      led: ledPublica,
      led: ledSala,
      led: ledCocina,
      led: ledDorm,
      led: ledBano
  });
  console.log( 'Listo!' );
});

io.on('connection', function(socket){
  socket.on('led', function(btn){
    console.log(btn)
    switch(btn){
        case 0:
            motDer.on();
            motIzq.off();
            break;

        case 1:
            motIzq.on();
            motDer.off();
            break;

        case 2:
            motIzq.on();
            motDer.on();
            break;

        case 3:
            motIzq.off();
            motDer.off();
            break;

        case 4:
            ledGarage.on();
            break;

        case 5:
            ledGarage.off();
            break;

        case 6:
            ledPublica.on();
            break;

        case 7:
            ledPublica.off();
            break;

        case 8:
            ledSala.on();
            break;

        case 9:
            ledSala.off();
            break;

        case 10:
            ledCocina.on();
            break;

        case 11:
            ledCocina.off();
            break;

        case 12:
            ledDorm.on();
            break;

        case 13:
            ledDorm.off();
            break;

        case 14:
            ledBano.on();
            break;

        case 15:
            ledBano.off();
            break;

    }

  });
});

console.log('Escuchando en el puerto ' + port);
app.listen(port);