// Transforme o objeto abaixo em uma Constructor Function
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoa = {
	nome: 'Nome pessoa',
	idade: 0,
	andar() {
		console.log(this.nome + ' andou')
	}
}

function Pessoa(nome, idade) {
	this.nome = nome
	this.idade = idade
	this.andar = function () {
		console.log(this.nome + ' andou')
	}
}

const p1 = new Pessoa('João', 20)
const p2 = new Pessoa('Maria', 25)
const p3 = new Pessoa('Bruno', 15)
p1.andar()
p2.andar()
p3.andar()

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
	this.elements = document.querySelectorAll(seletor)
	this.addClass = function (classe) {
		this.elements.forEach(element => {
			element.classList.add(classe)
		})
	}
	this.removeClass = function (classe) {
		this.elements.forEach(element => {
			element.classList.remove(classe)
		})
	}
}

const ul = new Dom('ul')
const li = new Dom('li')
ul.addClass('lista')
li.addClass('item')

const btnModal1 = document.querySelector('#modalOther1')
const btnModal2 = document.querySelector('#modalOther2')
const btnModal3 = document.querySelector('#modalOther3')

function trocarModal1() {
	ul.addClass('teste1')
	ul.removeClass('teste2')
	ul.removeClass('teste3')
}
function trocarModal2() {
	ul.addClass('teste2')
	ul.removeClass('teste1')
	ul.removeClass('teste3')
}
function trocarModal3() {
	ul.addClass('teste3')
	ul.removeClass('teste1')
	ul.removeClass('teste2')
}

btnModal1.addEventListener('click', trocarModal1)
btnModal2.addEventListener('click', trocarModal2)
btnModal3.addEventListener('click', trocarModal3)
/////////////////////////////////
// function Dom(seletor) {
// 	;(this.element = function () {
// 		return document.querySelector(seletor)
// 	}),
// 		(this.ativar = function () {
// 			this.element().classList.add('ativo')
// 		})
// }

//const li = new Dom('li')
//const ul = new Dom('ul')
