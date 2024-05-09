import "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";


let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")

btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
                <my-details logic="client_1" text="17. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>
                <my-details logic="client_2" text="18. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="client_3" text="19. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
                <my-details logic="client_4" text="20. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
                <my-details logic="client_5" text="23 Devuelve el nombre de los clientes y el nombre de sus representantes junto con con la ciudad de la oficina a la que pertenece el representante"></my-details>
            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
                <my-details logic="employ_12" text="12. Devuelve un listado con los datos de los empleados que no  tienen clientes asociados y el nombre de su jefe asociado"></my-details>
            `;
        }

    })
})
let [clients] = report__menu
clients.click();

customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)


