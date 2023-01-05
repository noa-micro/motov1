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
input.onGesture(Gesture.SixG, function () {
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
let Ojos = 0
let direccion = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
loops.everyInterval(100, function () {
    Ojos = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (Ojos < 10 && Ojos > 1) {
        wuKong.setAllMotor(-50, 100)
        wuKong.setLightMode(wuKong.LightMode.BREATH)
        wuKong.lightIntensity(100)
        basic.pause(randint(200, 600))
        wuKong.setLightMode(wuKong.LightMode.OFF)
        wuKong.lightIntensity(0)
        wuKong.setAllMotor(-60, -60)
    }
})
