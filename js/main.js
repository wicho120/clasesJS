import { 
    getAllOficceAndCodeCity, 
    getAllOficceCityAndMovil
} from "./module/offices.js";
import { 
    getAllFullNameAndEmailsAndBoss,
    getBossFullNameAndEmail,
    getFullNameAllEmployees_neSaleManager
} from "./module/employees.js";
import {
    getAllPayments2008byPaypal,
    getAllClientsPaidIn2008
} from "./module/payments.js";
import {
    getAllMadridClientsCodeSalesManager11_30,
    getAllClientsNameSalesManagerOffice,
    getNamesAllClientsBySpain
} from "./module/clients.js";
import {
    getAllStatusRequests,
    getCodesDatesProductsDelivered
} from "./module/requests.js"

console.log(await getCodesDatesProductsDelivered());
