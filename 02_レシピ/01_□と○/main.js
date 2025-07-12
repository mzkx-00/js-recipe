const figure = document.getElementById("figure")

// click: 色変更
figure.onclick = function () {
  figure.classList.toggle("colored")
}

// mouseover: 丸くする
figure.onmouseover = function () {
  figure.classList.add("rounded")
}

// mouseout: 丸みを戻す
figure.onmouseout = function () {
  figure.classList.remove("rounded")
}

// dblclick: 大きくする
figure.ondblclick = function () {
  figure.classList.toggle("large")
}

// keydown: 回転（スペースキーで）
document.onkeydown = function (e) {
  if (e.key === " ") {
    figure.classList.toggle("rotated")
  }
}

figure.oncontextmenu = function (e) {
  e.preventDefault()
  figure.classList.toggle("animated")
}
