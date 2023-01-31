function function20 () {
    OLED.clear()
    OLED.writeStringNewLine("Player1score:" + p1)
    OLED.newLine()
    OLED.writeStringNewLine("Player2score:" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("ties:" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds:" + rounds)
    function20()
}
input.onButtonPressed(Button.A, function () {
    OLED.writeStringNewLine("Player1score:" + p1)
    basic.showString("A")
    counter1 += 1
    basic.showNumber(counter1)
    OLED.writeStringNewLine("rounds:" + rounds)
})
function function10 () {
    OLED.init(128, 64)
    p1 = 0
    p2 = 0
    ties = 0
    rounds = 0
    OLED.writeStringNewLine("play now!!!!!!")
    basic.pause(2000)
}
input.onButtonPressed(Button.AB, function () {
    OLED.writeStringNewLine("ties:" + ties)
    basic.showString("T")
    counter3 += 1
    basic.showNumber(counter3)
    OLED.writeStringNewLine("rounds:" + rounds)
})
input.onButtonPressed(Button.B, function () {
    OLED.writeStringNewLine("Player2score:" + p2)
    basic.showString("B")
    counter2 += 1
    basic.showNumber(counter2)
    OLED.writeStringNewLine("rounds:" + rounds)
})
input.onGesture(Gesture.Shake, function () {
    function10()
})
let counter2 = 0
let counter3 = 0
let counter1 = 0
let rounds = 0
let ties = 0
let p2 = 0
let p1 = 0
function10()
