let header = document.querySelector(".header")
let main = document.querySelector(".main")

window.onscroll = function () { myFunction() }

function myFunction() {
	if (window.pageYOffset > 30) {
		header.classList.add("sticky");
		main.classList.add("content")
	} else {
		header.classList.remove("sticky");
		main.classList.remove("content")
	}
}