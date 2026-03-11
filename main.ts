/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Katherine
 * Created on: Mar 2026
 * This program will change colours
*/

let red = DigitalPin.P0
let green = DigitalPin.P1
let blue = DigitalPin.P2

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

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

    // blue
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // yellow
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 0)
    basic.pause(1000)

    // cyan
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // magenta
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // white
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.pause(1000)

    // off
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 0)
})