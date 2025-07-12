const inputA = document.getElementById("input-A")
const inputB = document.getElementById("input-B")
const equal = document.getElementById("equal")
const result = document.getElementById("result")

equal.onclick = function () {
  const a = Number(inputA.value)
  const b = Number(inputB.value)
  const sum = a + b
  console.log(sum)
  result.textContent = `結果：${sum}`
}
