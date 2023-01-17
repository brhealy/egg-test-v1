input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.FreeFall, function () {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
radio.setGroup(44)
