basic.showLeds(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`)

//multiplexer.setUpForDigitalRead(DigitalPin.P1, DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
multiplexer.setUpForAnalogRead(AnalogPin.P1, DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
let iterate = 0;

loops.everyInterval(10, function() {
    for(let iterate = 0; iterate < 8; iterate++){
        let readNum = multiplexer.analogReadPlexer(iterate)
        serial.writeValue("" + iterate, readNum)
        //basic.pause(10);
    }
    //basic.pause(100);
})

input.onButtonPressed(Button.A, function() {
    iterate--
    basic.showNumber(iterate,0)
    multiplexer.digitalReadPlexer(iterate)
    if(iterate < 1){
        iterate = 7;
    }
})

input.onButtonPressed(Button.B, function () {
    iterate++
    iterate = iterate%8
    basic.showNumber(iterate,0)
    multiplexer.digitalReadPlexer(iterate)
})