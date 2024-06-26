import { post } from "./modulo.js";

const root = document.querySelector("#root");
const btn = document.createElement("button");
const form = document.createElement("form");
const input = document.createElement("input")
btn.textContent = "Solicitar Nuevo";
const section = document.createElement("section");

input.classList.toggle("good")

btn.setAttribute("type", "submit")

form.appendChild(input)
form.appendChild(btn)
root.appendChild(form);
root.appendChild(section);

let regex = /^[0-9]{1,}$/;



const agregarPost = (event) => {

  event.preventDefault();

  console.log(input.value)
  
  if (regex.test(input.value)) {
    input.classList.toggle("bien")
    post(input.value)
      .then((reponse) => {

        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')

        h2.textContent = `${reponse.id} - ${reponse.title}`;
        p.textContent = reponse.body;

        div.appendChild(h2);
        div.appendChild(p);

        section.prepend(div)

        console.log(reponse)
      })
      .catch();
  } else {
    alert("mal")
    input.classList.toggle("error")
  }

  
}


btn.addEventListener('click', agregarPost)
form.addEventListener('submit', agregarPost)


input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    agregarPost(event);
  }

  input.addEventListener('keyup', function () {
    if (regex.test(input.value)) {
      input.classList.remove("error");
      input.classList.add("bien")
    } else {
      input.classList.remove("bien")
      input.classList.add("error")
    }
  })

});

