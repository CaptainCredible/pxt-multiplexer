/**
 * Custom blocks
 */

//% weight=500 color=#89d604 icon=""
namespace multiplexer {
    let pinA = DigitalPin.P13
    let pinB = DigitalPin.P14
    let pinC = DigitalPin.P15
    let anaPinIn = AnalogPin.P1
    let digiPinIn = DigitalPin.P1
    
    
    /**
     * set multiplexer pins
     */
    //% block="setup multiplexer pins | pin A $A pin B $B pin C $C input $inOut"
    //% A.defl=DigitalPin.P13 B.defl=DigitalPin.P14 C.defl=DigitalPin.P15 inOut.defl=DigitalPin.P1
    //% weight=200
    export function setAddressPins(inOut: DigitalPin, A: DigitalPin, B: DigitalPin, C: DigitalPin) {
        pinA = DigitalPin.P13
        pinB = DigitalPin.P14
        pinC = DigitalPin.P15
    }

    /**
     * set analog read pins
     */
    //% block="set multiplexer analog read pin to $inOut"
    //% inOut.defl=AnalogPin.P1
    //% weight=200
    export function setAnalogPin(inOut: AnalogPin) {
        anaPinIn = inOut
    }

    /**
         * set digital read pins
         */
    //% block="set multiplexer digital read pin to $inOut"
    //% inOut.defl=DigitalPin.P1
    //% weight=200
    export function setDigitalPin(inOut: DigitalPin) {
        digiPinIn = inOut
    }


    /**
     * analog read from multiplexer pin
     */
    //% block="read analog from multiplexer pin $inputToRead"
    //% weight=200
    export function analogReadPlexer(inputToRead: number) {
        pins.digitalWritePin(pinA, inputToRead & 0b100);
        pins.digitalWritePin(pinB, inputToRead & 0b010);
        pins.digitalWritePin(pinC, inputToRead & 0b001);
        return pins.analogReadPin(anaPinIn);
    }

    /**
     * digital read from multiplexer pin
     */
    //% block="read digital from multiplexer pin $inputToRead"
    //% weight=200
    export function digitalReadPlexer(inputToRead: number) {
        pins.digitalWritePin(pinA, inputToRead & 0b100);
        pins.digitalWritePin(pinB, inputToRead & 0b010);
        pins.digitalWritePin(pinC, inputToRead & 0b001);
        return pins.digitalReadPin(digiPinIn);
    }

    /**
     * send 3V to multiplexer pin
     */
    //% block="set multiplexer to $inputToRead"
    //% weight=200
    export function setPlexer(pinSelect: number) {
        pins.digitalWritePin(pinA, pinSelect & 0b100);
        pins.digitalWritePin(pinB, pinSelect & 0b010);
        pins.digitalWritePin(pinC, pinSelect & 0b001);
    }



}