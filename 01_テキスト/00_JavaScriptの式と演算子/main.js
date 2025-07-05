// TRY: 練習問題１
console.log(57052 + 57054)
console.log("114" + "106")

// TRY: 練習問題２
let x = 5
x += 2
x *= 5
x = 100 % x
x /= 6

console.log(x)

// TRY: 練習問題３
let happiness = 30 // 0 から 100 までの数値を代入してください
let sleepiness = 95 // 0 から 100 までの数値を代入してください

const isHappy = happiness > 90
const isSleepy = sleepiness > 90

const isNotHappyAndSleepy = !isHappy && isSleepy
const isHappyAndNotSleepy = isHappy && !isSleepy

// 以下のコメントアウトを外して確認してみましょう
console.log(
  "isNotHappyAndSleepy" + "は" + true + "ですか？",
  isNotHappyAndSleepy,
)

console.log(
  "isHappyAndNotSleepy" + "は" + true + "ですか？",
  isHappyAndNotSleepy,
)
console.log("isHappy", isHappy)
console.log("isSleepy", isSleepy)
