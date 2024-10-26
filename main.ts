Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("+")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendString("D")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("-")
})
function set_speed (text: string) {
    if (text == "+") {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
        speed += 15
    } else if (text == "-") {
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
        speed += -15
    } else {
    	
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    radio.sendString("D-")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("S")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    radio.sendString("A-")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Z")
})
function doRight () {
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    if (angle > 130) {
        angle += 10
    } else {
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("W")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("X")
})
function startstop () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    if (active) {
        active = false
        neZha.stopAllMotor()
        speed = 0
        angle = 180
        basic.showIcon(IconNames.Chessboard)
    } else {
        active = true
        speed = 15
        basic.showIcon(IconNames.Diamond)
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Q") {
        startstop()
    } else if (receivedString == "+") {
        set_speed("+")
    } else if (receivedString == "-") {
        set_speed("-")
    } else if (receivedString == "W") {
    	
    } else if (receivedString == "A") {
        doLeft()
    } else if (receivedString == "S") {
    	
    } else if (receivedString == "D") {
        doRight()
    } else if (receivedString == "Z") {
    	
    } else if (receivedString == "X") {
    	
    } else if (receivedString == "C") {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("C")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Q")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Click, function () {
    radio.sendString("A")
})
function doLeft () {
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
    if (angle > 130) {
        angle += -10
    } else {
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    }
}
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("D+")
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("A+")
})
let speed = 0
let active = false
let angle = 0
music.setVolume(64)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
led.setBrightness(96)
led.setDisplayMode(DisplayMode.BlackAndWhite)
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
angle = 180
neZha.setServoAngel(neZha.ServoTypeList._270, neZha.ServoList.S1, angle)
active = false
speed = 0
neZha.setMotorSpeed(neZha.MotorList.M1, speed)
neZha.stopAllMotor()
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    if (active) {
        neZha.setServoAngel(neZha.ServoTypeList._270, neZha.ServoList.S1, angle)
        neZha.setMotorSpeed(neZha.MotorList.M1, speed)
        if (angle < 180) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (angle > 180) {
            basic.showArrow(ArrowNames.NorthEast)
        } else if (angle == 180) {
            basic.showArrow(ArrowNames.North)
        } else {
        	
        }
    }
})
