import { comentarios } from "./modulo.js";

const root = document.querySelector("#root");
const fracmento = document.createDocumentFragment();
const plantilla = document.querySelector("#plantilla").content;
const section = document.createElement('section')
section.classList.add('cards')



comentarios().then((lista) => {

  lista.forEach(comentario => {

    plantilla.querySelector("div > h2").textContent = `${comentario.id} - ${comentario.name}` ;
    plantilla.querySelector("div > div > p").textContent = comentario.email;
    plantilla.querySelector("div > div > p:last-child").textContent = comentario.body;

    plantilla.querySelector("div").classList.add("card")


    const clone = document.importNode(plantilla, true);

    fracmento.appendChild(clone);

    // const div = document.createElement("div")
    // const h2 = document.createElement("h2")
    // const p1 = document.createElement("p")
    // const p2 = document.createElement("p")

    // h2.textContent = comentario.name;
    // p1.textContent = comentario.email;
    // p2.textContent = comentario.body;

    // div.appendChild(h2);
    // div.appendChild(p1);
    // div.appendChild(p2);

    // fracmento.appendChild(div);
  });

  section.appendChild(fracmento)
  root.appendChild(section)

});

