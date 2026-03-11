/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Katherine
 * Created on: Mar 2026
 * This program will change colours
*/

const red = DigitalPin.P14
const green = DigitalPin.P15
const blue = DigitalPin.P16

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {

    // red
    pins.digitalWritePin(red, 1)
    basic.showString('red')
    pins.digitalWritePin(red, 0)
    basic.clearScreen()

    // green
    pins.digitalWritePin(green, 1)
    basic.showString('green')
    pins.digitalWritePin(green, 0)
    basic.clearScreen()

    // blue
    pins.digitalWritePin(blue, 1)
    basic.showString('blue')
    pins.digitalWritePin(blue, 0)
    basic.clearScreen()

    // yellow
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    basic.showString('yellow')
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(red, 0)
    basic.clearScreen()

    // cyan
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.showString('cyan')
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 0)
    basic.clearScreen()

    // magenta
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(blue, 1)
    basic.showString('magenta')
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(blue, 0)
    basic.clearScreen()

    // white
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.showString('white')
    pins.digitalWritePin(red, 1)
    pins.digitalWritePin(green, 1)
    pins.digitalWritePin(blue, 1)
    basic.clearScreen()

    // off
    pins.digitalWritePin(red, 0)
    pins.digitalWritePin(green, 0)
    pins.digitalWritePin(blue, 0)
})