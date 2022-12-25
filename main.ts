input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(-100, -100)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(100, 100)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
