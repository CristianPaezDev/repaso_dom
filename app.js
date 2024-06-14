let win = window;
let dom = document;
let body = dom.body
let form = dom.forms
let divs = dom.querySelectorAll('div')
let div = dom.querySelector('div')
let porId = dom.getElementById('documento')
let porIdNuevo = dom.querySelector('#documento')
let porclase = dom.querySelectorAll('.container')
let porAtributo = dom.getElementsByName('search')
let oldClass = dom.getElementsByClassName('input')
let liItems = dom.querySelectorAll('ul.list > li.item')
const elemento = body.firstElementChild
const padre = dom.querySelector('header')
const main = dom.querySelector('main')

/**
 * Pasar a mayuscula*
 */

const api = dom.getElementById('api')
api.innerHTML = "¿QUE ES API?"

console.log(win)
console.log(dom.title)
console.log(dom.doctype)
console.log(dom.head)
console.log(body)
console.log(body.children)
console.log(body.children[2])
console.log(divs)
console.log(div)
console.log('formularios',form)
console.log('links',dom.links)
console.log('img',dom.images)
console.log('por id', porId)
console.log('por id nuevo', porIdNuevo)
console.log('por clase', porclase)
console.log('por atributo', porAtributo)
console.log('old class', oldClass)
console.log('li items', liItems)
console.log(elemento.firstElementChild)





const listaA = [...body.children]
console.log(listaA)

listaA.map((x) => {
    console.log(x)
})

console.log(api)
console.clear()
console.log(body.childNodes)
console.log(elemento.firstElementChild)
console.clear()
console.log(padre.parentElement)
console.log(padre.nextElementSibling)
console.clear()
console.log(main.previousElementSibling)
console.clear()
console.log(body.parentElement)