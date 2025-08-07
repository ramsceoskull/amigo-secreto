// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
	let inputNombre = document.getElementById('amigo');
	let nombre = inputNombre.value

	if (nombre === '') {
		alert('Por favor, ingresa un nombre.');
		return;
	} else {
		inputNombre.value = '';
		inputNombre.focus();
		amigos.push(nombre);
	}
}
