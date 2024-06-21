import { data } from "./datos.js";

const fragmen = document.createDocumentFragment();
const contenedor = document.querySelector(".container");
contenedor.classList.add('cards')


data.map(obj => {

    const card = document.createElement("div")
    const card_header = document.createElement("div")
    const card__body = document.createElement('div')
    const img = document.createElement("img")
    const card__title = document.createElement("h2")
    const card__paragraph = document.createElement("p")
    const button = document.createElement("a")
    const button__text = document.createElement("span")
    const icono = document.createElement("i")
    const cards = document.createElement("div")


    cards.classList.add('cards')
    card.classList.add('card')
    card_header.classList.add('card__header')
    card__title.classList.add('card__title')
    card__body.classList.add('card__body')
    img.classList.add('card__img')
    card__paragraph.classList.add('card__paragraph')
    button.classList.add('button')
    button__text.classList.add('button__text')
    icono.classList.add('bx', 'bxs-chevron-right', 'button__icon')


    card__title.innerText = obj.title
    img.innerHTML = obj.src
    img.setAttribute("src", obj.src)
    card__paragraph.innerText = obj.paragraph
    button__text.innerText = "Saber mas"


    fragmen.appendChild(cards)
    card.appendChild(card_header)
    card_header.appendChild(card__title)
    card.appendChild(card__body)
    card__body.appendChild(img)
    card__body.appendChild(card__paragraph)
    card__body.appendChild(button)
    button.appendChild(button__text)
    button.appendChild(icono)
    cards.appendChild(card)

});

contenedor.appendChild(fragmen)