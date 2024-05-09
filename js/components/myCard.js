import {
    getAllMadridClientsCodeSalesManager11_30,
    getAllClientsNameSalesManagerOffice,
    getNamesAllClientsBySpain,
    getAllClientsNameAndHisManagerSales,
    getAllClientsPaidAndNameSalesManager,
    getAllClientsNoPaidAndNameSalesManager,
    getAllClientsPaidAndNameSalesManagerAndCityOffice
} from "../module/clients.js";

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myCard.css">  
        `
    }

    getEstructureCard(data){

        let template = ""
        let keyData = Object.keys(data[0]);

        data.forEach(val => {
            let keyTemplate = ""
            keyData.forEach(val2 => {
                if(keyData.indexOf(val2) != 0){
                    console.log()
                    keyTemplate += /*html*/`<p><b>${String(val2)}: </b>${val[String(val2)]}</p>`    
                }
            })

            template += /*html*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombreCliente}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            ${keyTemplate}
                        </div>
                    </div>
                </div>
            `;
        });

        return template
    }
    
    async getAllClientsNameAndHisManagerSales(){
        let data = await getAllClientsNameAndHisManagerSales();
        this.shadowRoot.innerHTML += this.getEstructureCard(data);
    }

    async getAllClientsPaidAndNameSalesManager(){
        let data = await getAllClientsPaidAndNameSalesManager();
        this.shadowRoot.innerHTML += this.getEstructureCard(data);
    }

    async getAllClientsNoPaidAndNameSalesManager(){
        let data = await getAllClientsNoPaidAndNameSalesManager();
        this.shadowRoot.innerHTML += this.getEstructureCard(data);
    }

    async getAllClientsPaidAndNameSalesManagerAndCityOffice(){
        let data = await getAllClientsPaidAndNameSalesManagerAndCityOffice();
        this.shadowRoot.innerHTML += this.getEstructureCard(data);
    }

    async getAllClientsNameSalesManagerOffice(){
        let data = await getAllClientsNameSalesManagerOffice();
        this.shadowRoot.innerHTML += this.getEstructureCard(data);
    }

    
    // async getAllClientsFromSpainAndRepresentative11Or30Design(){
    //     let data = await getAllClientsFromSpainAndRepresentative11Or30();
    //     data.forEach(val => {
    //         let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val.limit_credit);
    //         this.shadowRoot.innerHTML += /*html*/`
            
    //             <div class="report__card">
    //                 <div class="card__title">
    //                     <div>${val.client_name} # ${val.client_code}</div>
    //                 </div>
    //                 <div class="card__body">
    //                     <div class="body__marck">
    //                         <p><b>Id: </b> ${val.id}</p>
    //                         <p><b>Codigo del empleado: </b>${val.code_employee_sales_manager}</p>
    //                         <p><b>Contacto: </b>${val.phone} - ${val.fax}</p>
    //                         <p><b>Nombre del representante: </b>${val.contact_name} ${val.contact_lastname}</p>
    //                         <p><b>Dirrecion: </b>${val.address1} ${(val.address2) ? val.address2 : ""}</p>
    //                         <p><b>Ubicacion: </b>${val.country} ${val.region} ${val.city} ${val.postal_code}</p>
    //                         <p><b>Total a prestar: </b>${money}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //     });
    // }
    // async getAllEmployNotClientsDesign(){
    //     let data = await getAllEmployNotClients();
    //     data.forEach(val => {
    //         this.shadowRoot.innerHTML += /*html*/`
            
    //             <div class="report__card">
    //                 <div class="card__title">
    //                     <div>${val.name} ${val.lastname1} ${val.lastname2} # ${val.employee_code}</div>
    //                 </div>
    //                 <div class="card__body">
    //                     <div class="body__marck">
    //                         <p><b>Id: </b> ${val.id}</p>
    //                         <p><b>Cargo: </b>${val.position}</p>
    //                         <p><b>Oficina: </b>${val.code_office}</p>
    //                         <p><b>Jefe encargado: </b>${val.name_boss}</p>
    //                         <p><b>Numero de extencion: </b>${val.extension}</p>
    //                         <p><b>Correo electronico: </b>${val.email}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //     });
    // }
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_1") this.getAllClientsNameAndHisManagerSales()
        if(name=="logic" && now=="client_2") this.getAllClientsPaidAndNameSalesManager()
        if(name=="logic" && now=="client_3") this.getAllClientsNoPaidAndNameSalesManager()
        if(name=="logic" && now=="client_4") this.getAllClientsPaidAndNameSalesManagerAndCityOffice()
        if(name=="logic" && now=="client_5") this.getAllClientsNameSalesManagerOffice()
    }
}
