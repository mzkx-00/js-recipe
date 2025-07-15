let startTime = null
let timerId = null

const updateDisplay = () => {
  const now = Date.now()
  const elapsed = now - startTime
  display.textContent = (elapsed / 1000).toFixed(2) // 秒表示
}

button.onclick = function () {
  if (timerId === null) {
    startTime = Date.now()
    timerId = setInterval(updateDisplay, 10)
    button.textContent = "stop"
  } else {
    clearInterval(timerId)
    timerId = null
    button.textContent = "start"
  }
}
