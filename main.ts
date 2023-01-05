input.onButtonPressed(Button.A, function () {
    direccion = 0
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    wuKong.setAllMotor(-60, -60)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
    basic.showIcon(IconNames.Angry)
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
    wuKong.setAllMotor(60, 60)
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
        wuKong.setAllMotor(60, 60)
        direccion = 1
    } else if (direccion == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        wuKong.setAllMotor(-60, -60)
        direccion = 0
    }
})
let Ojos = 0
let direccion = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    Ojos = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (Ojos < 20 && Ojos > 1) {
        wuKong.setAllMotor(-50, 100)
        basic.pause(1000)
        wuKong.setAllMotor(100, 100)
    }
})
