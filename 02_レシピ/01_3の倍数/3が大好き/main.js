const input = document.getElementById("numberInput")
const button = document.getElementById("checkButton")
const result = document.getElementById("resultArea")

button.onclick = function () {
  const max = Number(input.value)
  result.innerHTML = "" // 前の結果をクリア

  for (let i = 1; i <= max; i++) {
    const p = document.createElement("p")

    if (i.toString().includes("3")) {
      p.textContent = `${i}!!!!!!!`
    } else {
      p.textContent = i
    }

    result.appendChild(p)
  }
}
