const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e)
}

inputText.oninput = logValue
inputDate.oninput = logValue
