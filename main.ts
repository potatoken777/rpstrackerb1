OLED.init(128, 64)
let p1 = 0
let p2 = 0
let ties = 0
let rounds = 0
OLED.writeStringNewLine("shall we play a game")
basic.pause(2000)
OLED.clear()
OLED.writeStringNewLine("Player 1 score:" + p1)
OLED.newLine()
OLED.writeStringNewLine("Player 2 score:" + p2)
OLED.newLine()
OLED.writeStringNewLine("ties:" + ties)
OLED.newLine()
OLED.writeStringNewLine("rounds:" + rounds)
