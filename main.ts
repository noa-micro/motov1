input.onButtonPressed(Button.A, function () {
    direccion = 0
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    wuKong.setAllMotor(-100, -100)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    direccion = 1
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    wuKong.setAllMotor(100, 100)
})
input.onGesture(Gesture.ThreeG, function () {
    if (direccion == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        wuKong.setAllMotor(100, 100)
        direccion += 1
    } else if (direccion == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        wuKong.setAllMotor(-100, -100)
        direccion += 0
    }
})
let direccion = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
