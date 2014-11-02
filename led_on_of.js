var five = require("johnny-five"),
  board, led;

board = new five.Board();

board.on("ready", function() {
  // Create a standard `led` hardware instance
  led = new five.Led({
    pin: 13
  });

  // "on" turns the led _on_
  function encender(){
        led.on();
    }

  // "off" turns the led _off_
  function apagar(){
  led.off();
    }

  // Turn the led back on after 3 seconds (shown in ms)

});

function apagar(){
  console.log("Apagar");

}