// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let inputNombre = document.getElementById('amigo');
let amigos = [];


function agregarAmigo() {
	if (inputNombre.value === '')
		alert('Por favor, ingresa un nombre.');
	else {
		amigos.push(inputNombre.value);

		inputNombre.value = '';
		inputNombre.focus();

		actualizarLista();
	}
}

function actualizarLista() {
	listaAmigos.innerHTML = '';
	resultado.innerHTML = '';

	for (let index = 0; index < amigos.length; index++)
		listaAmigos.innerHTML += `<li>${amigos[index]}</li>`;
}

function sortearAmigo() {
	listaAmigos.innerHTML = '';
	resultado.innerHTML = '';

	if (amigos.length === 0)
		alert('No hay amigos para sortear. Por favor, agrega al menos un amigo.');
	else {
		let indiceAleatorio = Math.floor(Math.random() * amigos.length);
		resultado.innerHTML = `<li>El amigo sorteado es: ${amigos[indiceAleatorio]}</li>`;
	}
}
