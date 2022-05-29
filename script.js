// const { jasmine } = require("jshint/src/vars");

"use strict";
 const btns = document.querySelectorAll("button"),
        wrapper= document.querySelector('.btn-block');

 
// вернет количество классов
 console.log(btns[0].classList.length);
// вернет класс под номером 
 console.log(btns[0].classList.item(0));

// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));

// переключение классов( если есть удаляет, если нету, добавляет)
console.log(btns[0].classList.toggle("blue"));


// if (btns[1].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click', ()=>{
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle("red");
});

// console.log(btns[0].className); 
// выведет строку текста с названиями классов( старое)

// делегирование событий (не видит кнопку дописанную вручную)
wrapper.addEventListener('click', (event)=>{
    // console.dir(event.target);
    // if (event.target && event.target.tagName == "BUTTON"){
    if (event.target && event.target.matches("button.red")){
        console.log("hello");
    }

});

// обработчик при помощи перебора

btns.forEach(btn =>{
    btn.addEventListener('click', () => {
        console.log('Hello');
    });
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);