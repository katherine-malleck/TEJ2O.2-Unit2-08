/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Katherine
 * Created on: Mar 2026
 * This program will change colours
*/

let red = DigitalPin.P0
let green = DigitalPin.P1
let blue = DigitalPin.P2

input.onButtonPressed(Button.A, function () {

    // red
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 0)
    basic.pause(1000)

    // green
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 0)
    basic.pause(1000)

    // Blue
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // Yellow
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 0)
    basic.pause(1000)

    // Cyan
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // Magenta
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // White
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // Turn off LED
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 0)
})