var five = require("johnny-five");
var _ = require('underscore');
var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(6);
    var button = new five.Button(8);
    var turnOn = true;

    var lightController = _.debounce(function() {
        if(turnOn) {
            led.on();
            console.log("ON");
        } else {
            led.off();
            console.log("OFF");
        }
        turnOn = !turnOn;

    }, 1000);

    button.on("press", lightController);
});