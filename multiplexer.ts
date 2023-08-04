/**
 * Custom blocks
 */
namespace multiplexer {
//% weight=500 color=#0fbc0f icon=""

    /**
     * send a midi note
     */
    //% block="send noteOn $note with velocity $velocity and duration $duration ms on channel $channel"
    //% channel.min=1 channel.max=16 velocity.min=0 velocity.max=127 note.min=0 note.max=127
    //% channel.defl=1 velocity.defl=127 duration.defl=100 note.defl=60
    //% weight=451 inlineInputMode=inline
    export function sendNote(note: number, velocity: number, duration: number, channel: number) {
    }

}