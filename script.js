// set background

document.body.style.background = "url('Assets/Imgs/bg.jpg') repeat ";

// 3 facts

let horror = 'I am a big fan of horror movies. Some of my favorites are "Scream" (1996), "Hereditary" (2018), & "Train to Busan" (2016).';

let embroidery = "During the pandemic I've been trying to teach myself embroidery. My goal is to make a small patch over the summer.";

let coffee = "I love coffee and have been working at my dad's coffee company since I was 14. My go to drink order is an iced latte.";

// link images

let horrorImg = document.querySelector("#fact1");

let embroideryImg = document.querySelector("#fact2");

let coffeeImg = document.querySelector("#fact3");

// display facts on click

function fact1() {
	let about = document.querySelector("#bio");
	about.innerHTML = horror
	document.getElementById("fact1").style.backgroundColor = 'red'; // changes img bg color on click
}

function fact2() {
	let about = document.querySelector("#bio");
	about.innerHTML = embroidery
	document.getElementById("fact2").style.backgroundColor = 'red';
}

function fact3() {
	let about = document.querySelector("#bio");
	about.innerHTML = coffee
	document.getElementById("fact3").style.backgroundColor = 'red';
}
