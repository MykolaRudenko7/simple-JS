

//----------------------Body-index-----------------------------

/*
const weight = prompt('Enter your weight');
const height = prompt('Enter your height');

const bodyMassIndex = weight / Math.pow(height);
const areYouOverweight = bodyMassIndex >= 25;

console.log(bodyMassIndex)
alert ("are you owerweight? " + areYouOverweight);
*/



// //------------------------2 To-do:--------------------------------


// const toDoList = document.querySelector('ul');
// console.log(toDoList);
// const toDoForm = document.querySelector('form');
// console.log(toDoForm);
// const toDoInput = document.querySelector('.todo__input');
// console.log(toDoInput);

// toDoForm.addEventListener('submit', formHandler);

// function formHandler(event) {
// 	event.preventDefault();
// 	// отрим значення форми, її текст
// 	const inputText = toDoInput.value;

// 	// створюю новий елемент лі із знач форми і вставляю його в кінець листа (можем добавить подію)
// 	const newTask = document.createElement('li')

// 	newTask.innerText = inputText;

// 	toDoList.append(newTask);

// 	// delete:

// 	const deleteBtn = document.createElement('button');
// 	deleteBtn.setAttribute('role', 'button');
// 	deleteBtn.innerText = "delete";
// 	deleteBtn.style['margin-left'] = '15px'
// 	newTask.append(deleteBtn);

// 	deleteBtn.addEventListener('click', function () {
// 		this.closest('li').remove();
// 	});

// 	// Очищ поле вводу:
// 	toDoInput.value = "";

// 	// focus:
// 	toDoInput.focus();
// }

//------------------------------3  textarea------------------------------

// // оберттка основна
// const wrapper = document.querySelector(".wrapper"); 
// // обертка тексту
// const text = document.querySelector(".text");
// // поле вводу
// const txtTextArea = document.querySelector('.text__textarea');
// // макс к-сть символів
// const txtTextareaSymbAtr = txtTextArea.getAttribute('maxlength');
// //спан
// const txtCheck = document.querySelector('.text__check');
// //препис ксь введ чисел:
// txtCheck.innerHTML = txtTextareaSymbAtr;


// //прослуховування
// txtTextArea.addEventListener('keyup', txtSet);
// function txtSet() {
// 	//від макс к-сті віднімаю введену наразі к-сть в полі і даю значення
// 	const txtRes = txtTextareaSymbAtr - txtTextArea.value.length;
// 	txtCheck.innerHTML = txtRes;
// }
// //фікс зажатої клавіші
// txtTextArea.addEventListener('keydown', (e) => {
// 	if (e.repeat) {
// 		txtSet();
// 	}
// });


// //прослушка для додавання класу
// document.addEventListener("click", function(event) {
// 	if (event.target.closest(".button")) {
// 	text.classList.toggle("active");
// 	}
// 	// закриття, якщо нажимаю не на блок з формою
// 	if (!event.target.closest(".wrapper")) {
// 	text.classList.remove("active");
// 	}
// })

// // прослушка для закриття при Esc
// document.addEventListener("keyup", function(event) {
// if (event.code === "Escape") {``
// 	text.classList.remove("active");
// }});

// --------------------------------------------------------------