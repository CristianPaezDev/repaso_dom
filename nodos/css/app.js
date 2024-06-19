import { datos } from "./datos.js"
// Identificamos el elemento por la clase
const $padre = document.querySelector('.container')
//Creamos un elemento
const nodo = document.createElement('p')
const nodo2 = document.createElement('p')

const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias nobis earum in, fugit deserunt pariatur omnis accusamus est fuga."

const texto2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis, laudantium."

nodo.innerText = texto;
nodo2.innerText = texto2

$padre.appendChild(nodo)
$padre.appendChild(nodo2)

//lista
const lista = document.querySelector('div.container > div.card > ul.list')
console.log(lista)

datos.map(a => {
  console.log(a)
})

// const padre = document.querySelector('.list')

// const html = document.createElement('li')
// const html2 = document.createElement('li')
// const html3 = document.createElement('li')
// const lista1 = "html"
// const lista2 = "css"
// const lista3 = "JavaScript"

// html.innerText = lista1
// html2.innerText = lista2
// html3.innerText = lista3


// padre.appendChild(html)
// padre.appendChild(html2)
// padre.appendChild(html3)

datos.map(a => {
  const html = document.createElement('li')
  html.innerText = a.name
  html.classList.add('item')
  lista.appendChild(html)
})