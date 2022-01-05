


let buttonTag = document.getElementById("button_statistics")
buttonTag.addEventListener("click", () => {
    document.getElementById("button_statistics").style.display = "none"
    document.getElementById("board_statistics").style.display = "block"

})

let buttonOutTag = document.getElementById("button_out_statistics")
buttonOutTag.addEventListener("click", () => {
    document.getElementById("button_statistics").style.display = "block"
    document.getElementById("board_statistics").style.display = "none"
})