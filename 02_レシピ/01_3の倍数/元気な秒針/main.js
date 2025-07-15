const input = document.getElementById("numberInput")
const button = document.getElementById("checkButton")
const result = document.getElementById("resultArea")
const display = document.getElementById("display")

let count = 0
let id = null

const countUp = function () {
  count += 1
  const currentSec = count / 100
  display.textContent = count / 100

  if (count % 100 === 0) {
    const p = document.createElement("p")

    if (count % 300 === 0) {
      p.textContent = `${currentSec}!!!!!!!`
    } else {
      p.textContent = currentSec
    }
    result.appendChild(p)
  }

  const max = Number(input.value)

  if (currentSec >= max) {
    clearInterval(id)
    id = null
    button.textContent = "実行"
  }
}

button.onclick = function () {
  if (id === null) {
    // start
    count = 0
    result.innerHTML = ""
    display.textContent = "0"
    id = setInterval(countUp, 10)
    button.textContent = "中止"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "実行"
  }
}
