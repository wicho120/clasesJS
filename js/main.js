import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil 
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
} from "./module/employees.js";
import {
    getAllPayments2008byPaypal
} from "./module/payments.js";
import {
    getAllMadridClientsCodeSalesManager11_30,
    getAllClientsNameSalesManagerOffice
} from "./module/clients.js";

console.log(await getAllClientsNameSalesManagerOffice());
