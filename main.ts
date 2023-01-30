input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    p1 = 0
    p2 = 0
    ties = 0
    rounds = 0
    OLED.writeStringNewLine("shall we play a game")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("Player1score:" + p1)
    OLED.newLine()
    OLED.writeStringNewLine("Player2score:" + p2)
    OLED.newLine()
    OLED.writeStringNewLine("ties:" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("rounds:" + rounds)
}
let rounds = 0
let ties = 0
let p2 = 0
let p1 = 0
reset()
