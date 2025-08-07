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
		actualizarLista();
	}
}

function actualizarLista() {
	let listaAmigos = document.getElementById('listaAmigos');
	listaAmigos.innerHTML = '';

	for (let index = 0; index < amigos.length; index++)
		listaAmigos.innerHTML += `<li>${amigos[index]}</li>`;
}
