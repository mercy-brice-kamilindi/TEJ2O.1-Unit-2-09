/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by:Mercy
 * Created on:oct 2025
 * This program does rock paper scissors
*/

// variables
let randomNumber: number = -1
let score: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // Scissors
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Scissors)
    }

    // Paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

    // Rock
    if (randomNumber == 2) {
        basic.showIcon(IconNames.SmallSquare)
    }

    // Pause and get ready for another
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})

// add score
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    score += 1
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

// show score
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("Score:")
    basic.showNumber(score)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})