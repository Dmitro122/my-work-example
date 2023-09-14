
let addBtn = document.querySelector(".add_element");
let list = document.getElementById("main_list");
let result = document.querySelector(".result");


let inputArr = Array();



changeButton()
deleteListItem()
inputFocus()

// Function that creates a new HTML element
function elementFromHTML(html) {
	const template = document.createElement("template");

	template.innerHTML = html.trim();

	return template.content.firstElementChild;
}

// Function that add a new HTML elent in Array
function addElement(element) {
	list.appendChild(element);

	let prices = document.querySelectorAll(".price_input")
	prices.forEach(e => {
		for (let index = 0; index < inputArr.length; index++) {
			if (inputArr[index] == e) {
				return
			}
		}
		inputArr.push(e)
	})
}

addBtn.addEventListener("click", () => {
	let liElement = elementFromHTML(`
	<li class="list_item changeble">
				<div class="li_wrap">
					<div class="input_wrap">
						<Label>name:</Label><input class="input name_input" type="text">
					</div>
					<div class="input_wrap">
						<Label>price:</Label><input class="input price_input" type="number">
					</div>

				</div>

				<div class="btn_wrap">
					<div class="count_wrap" id="count_wrap">
						<label for=""><i class="fa-solid fa-xmark"></i></label>
						<input type="number" name="" id="" class="count" value="1" min="1">
					</div>
					<button class="btn save_change"><i class="fa-solid fa-check"></i></button>
					<button class="btn change unviseble"><i class="fa-solid fa-pen"></i></button>
					<button class="btn delte"><i class="fa-solid fa-xmark"></i></button>
				</div>
			</li>`);

	addElement(liElement);

	changeButton()

	// Delete Button functional
	deleteListItem()

	inputFocus()
});

// SAVE/CHENGE Button Function
function changeButton() {
	// Save Button functional
	let saveBtn = document.querySelectorAll(".save_change");
	let changeBtn = document.querySelectorAll(".change")
	calc = 0;

	let prices = document.querySelectorAll(".price_input")

	saveBtn.forEach(e => {
		let change = e.parentElement.parentElement.querySelector(".change");
		let inputs = e.parentElement.parentElement.querySelectorAll(".input");
		let price = e.parentElement.parentElement.querySelector(".price_input")

		e.addEventListener("click", () => {
			e.classList.add("unviseble");
			change.classList.remove("unviseble");
			inputs.forEach(e => {
				e.setAttribute("readonly", "");
				e.classList.add("cheked")
			})
			result.textContent = calculate(inputArr);
			console.log(inputArr);
		})
	})

	changeBtn.forEach(e => {
		let save = e.parentElement.parentElement.querySelector(".save_change");
		let inputs = e.parentElement.parentElement.querySelectorAll(".input");

		e.addEventListener("click", () => {
			e.classList.add("unviseble");
			save.classList.remove("unviseble");
			inputs.forEach(e => {
				e.removeAttribute("readonly");
			})
		})
	})
}

// Delete Function
function deleteListItem() {
	let deleteBtns = document.querySelectorAll(".delte");

	deleteBtns.forEach(e => {
		e.addEventListener("click", () => {
			if (e.className == "btn delte") {
				console.log(137);
			}
			console.log(e.className);
			console.log(e.parentElement.parentElement);
			for (let i = -1; i < inputArr.length; i++) {

				if (inputArr[i] == e.parentElement.parentElement.querySelector(".price_input")) {
					inputArr.splice(i, i + 1)
				}
			}
			list.removeChild(e.parentElement.parentElement);
			result.textContent = calculate(inputArr);
		})

	})
}

function calculate(arr) {
	let sum = 0;
	let count = document.querySelectorAll(".count");

	for (let index = 0; index < arr.length; index++) {
		if (arr[index].className == "input price_input cheked") {
			if (arr[index].value == 0) {
				arr[index].value = 0;
			}
			sum += parseInt(arr[index].value) * parseInt(count[index].value)
		}

	}
	console.log(count);
	return sum;
}

function inputFocus() {
	let inputs = document.querySelectorAll(".count")

	inputs.forEach(e => {
		e.addEventListener("focusout", () => {
			if (e.value <= 1) {
				e.value = 1;
				result.textContent = calculate(inputArr);
			}
		})
		e.addEventListener("input", () => {
			result.textContent = calculate(inputArr);
		})
	})
}










