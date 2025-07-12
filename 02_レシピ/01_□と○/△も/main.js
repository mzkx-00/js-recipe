const figure = document.getElementById("figure")

// クラス名を順に切り替える
const shapes = ["square", "circle", "triangle"]
let currentIndex = 0

figure.onclick = function () {
  // 今の形を消す
  figure.classList.remove(shapes[currentIndex])

  // 次の形に進む（0→1→2→0→…）
  currentIndex = (currentIndex + 1) % shapes.length

  // 新しい形を加える
  figure.classList.add(shapes[currentIndex])
}
