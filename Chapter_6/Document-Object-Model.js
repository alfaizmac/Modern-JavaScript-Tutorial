// const para = document.querySelector("body > h1");

// console.log(para);

// const paras = document.querySelectorAll(`p`);

// paras.forEach((paras) => {
//   console.log(paras);
// });

// console.log(paras[2]);

// const error = document.querySelectorAll(`.error`);

// console.log(error);

// get an element by ID
// const title = document.getElementById(`pageTitle`);
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName(`error`);
// console.log(errors);

// // get element by their tag name
// const paras = document.getElementsByTagName(`p`);
// console.log(paras);

// // changing the text on html p
// const para = document.querySelector(`p`);
// // para.textContent = ` ayu!`; // change the text of the paragraph
// // console.log(para);

// const paras = document.querySelectorAll(`p`);

// // paras.forEach((para) => {
// //   console.log(para.innerText);
// //   para.innerText += ` new text`;
// // });

// const content = document.querySelector(`.content`);
// // console.log(content.innerHTML);
// // content.innerHTML = "<h2>THIS IS NEW H2</h2>";

// const people = [`mario`, `toad`, `yoshi`];

// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

//linking toturial

// const link = document.querySelector(`a`);
// console.log(link.getAttribute(`href`));
// link.setAttribute(`href`, `https://www.youtube.com`); //first is the current link then the 2nd is the new link
// link.innerText = `youtube.com`;

// const mssg = document.querySelector(`p`);
// console.log(mssg.getAttribute(`class`));
// mssg.setAttribute(`class`, `success`);
// mssg.setAttribute(`style`, `color: red;`);

// const title = document.querySelector(`h1`);
// const new2 = document.querySelector(`h2`);
// // title.setAttribute(`style`, `color: orange`);

// console.log(title.style, new2.style);
// console.log(title.style.color);

// title.style.color = `blue`;
// title.style.margin = `50px`;
// new2.style.fontSize = `200px`;

// change the class name of the attribute
// const content = document.querySelector(`p`);
// console.log(content.classList);
// content.classList.add(`error`);
// // content.classList.remove(`error`);
// content.classList.add(`success`);

const paras = document.querySelectorAll(`p`);
paras.forEach((paras) => {
  if (paras.textContent.includes(`error`)) {
    paras.classList.add(`error`);
  }
  if (paras.textContent.includes(`success`)) {
    paras.classList.add(`success`);
  }
});

const title = document.querySelector(`.title`);
title.classList.toggle(`test`);
