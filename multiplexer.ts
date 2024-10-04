/**
 * Custom blocks
 */

//% weight=500 color=#89d604 icon=""
//% groups="['Setup', 'Use']"
namespace multiplexer {
    let pinA = DigitalPin.P13
    let pinB = DigitalPin.P14
    let pinC = DigitalPin.P15
    let anaPinIn = AnalogPin.P1
    let digiPinIn = DigitalPin.P1
    let badHardware = false
    let remapNum: number[] = [0, 4, 2, 6, 1, 5, 3, 7];
    let preWait = 50
    
    /**
     * set multiplexer pins
     */
    //% block="setup multiplexer for DIGITAL read | pin A $A pin B $B pin C $C input $inOut"
    //% A.defl=DigitalPin.P13 B.defl=DigitalPin.P14 C.defl=DigitalPin.P15 inOut.defl=DigitalPin.P1
    //% weight=900
    //% group="Setup"
    export function setUpForDigitalRead(inOut: DigitalPin, A: DigitalPin, B: DigitalPin, C: DigitalPin) {
        pinA = DigitalPin.P13
        pinB = DigitalPin.P14
        pinC = DigitalPin.P15
        let digiPinIn = inOut
    }

    /**
     * set multiplexer pins
     */
    //% block="setup multiplexer for ANALOG read | pin A $A pin B $B pin C $C input $inOut"
    //% A.defl=DigitalPin.P13 B.defl=DigitalPin.P14 C.defl=DigitalPin.P15 inOut.defl=DigitalPin.P1
    //% weight=900
    //% group="Setup"
    export function setUpForAnalogRead(inOut: AnalogPin, A: DigitalPin, B: DigitalPin, C: DigitalPin) {
        pinA = DigitalPin.P13
        pinB = DigitalPin.P14
        pinC = DigitalPin.P15
        let anaPinIn = inOut
    }

    /**
     * set analog read pin
     */
    //% block="set multiplexer analog read pin to $inOut"
    //% inOut.defl=AnalogPin.P1
    //% weight=800
    //% group="Setup"
    export function setAnalogPin(inOut: AnalogPin) {
        anaPinIn = inOut
    }

    /**
         * set digital read pins
         */
    //% block="set multiplexer digital read pin to $inOut"
    //% inOut.defl=DigitalPin.P1
    //% weight=850
    //% group="Setup"
    export function setDigitalPin(inOut: DigitalPin) {
        digiPinIn = inOut
    }


    /**
     * analog read from multiplexer pin
     */
    //% block="read analog from multiplexer pin $inputToRead"
    //% weight=600
    //% group="Use"
    export function analogReadPlexer(inputToRead: number) {  
        let remappedInputToRead = remapNum[inputToRead]
        pins.digitalWritePin(pinA, remappedInputToRead & 0b100);
        pins.digitalWritePin(pinB, remappedInputToRead & 0b010);
        pins.digitalWritePin(pinC, remappedInputToRead & 0b001);
        
        control.waitMicros(preWait)
        return pins.analogReadPin(anaPinIn);
        
        //control.waitMicros(postWait)
        
    }

    

    /**
     * digital read from multiplexer pin
     */
    //% block="read digital from multiplexer pin $inputToRead"
    //% weight=700
    //% group="Use"
    export function digitalReadPlexer(inputToRead: number) {
        let remappedInputToRead = remapNum[inputToRead]
        pins.digitalWritePin(pinA, remappedInputToRead & 0b100);
        pins.digitalWritePin(pinB, remappedInputToRead & 0b010);
        pins.digitalWritePin(pinC, remappedInputToRead & 0b001);
        return pins.digitalReadPin(digiPinIn);
    }

    /**
     * send 3V to multiplexer pin
     */
    //% block="set multiplexer to $pinSelect"
    //% pinSelect.defl = 0
    //% weight=200 advanced=false
    //% group="Use"
    export function setPlexer(pinSelect: number) {
        let remappedPinSelect = remapNum[pinSelect]
        pins.digitalWritePin(pinA, remappedPinSelect & 0b100);
        pins.digitalWritePin(pinB, remappedPinSelect & 0b010);
        pins.digitalWritePin(pinC, remappedPinSelect & 0b001);
    }
}