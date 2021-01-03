// setInterval(function () {
//   location.reload()
// }, 10000)

var change_image

window.onload = function () {
  change_image = document.getElementById("image")
  setInterval(function () {
    change_image.src = change_image.src.replace(/\?.*/, function () {
      return "?" + new Date()
    })
  }, 5000)
}
