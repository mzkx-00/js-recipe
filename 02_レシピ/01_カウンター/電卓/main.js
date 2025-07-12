const inputA = document.getElementById("input-A")
const inputB = document.getElementById("input-B")
const operator = document.getElementById("operator")
const equal = document.getElementById("equal")
const result = document.getElementById("result")

equal.onclick = function () {
  const a = Number(inputA.value)
  const b = Number(inputB.value)
  const op = operator.value

  let output

  switch (op) {
    case "+":
      output = a + b
      break

    case "-":
      output = a - b
      break

    case "*":
      output = a * b
      break

    case "/":
      if (b === 0) {
        result.textContent = "エラー：0で割ることはできません"
        return
      }
      output = a / b
      break

    default:
      result.textContent = "演算子が不正です"
      return
  }
  result.textContent = `結果：${output}`
}
