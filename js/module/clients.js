import { 
    getAllInfoOfficeByCode_Office
} from "./offices.js";
import { 
    getAllInfoEmployeesByCodeEmployee
} from "./employees.js";
import {
    getAllClientsHaveMadeRequestByClientsCode
} from "./requests.js"



//#..........................Consultas para WebComponent....................


// 1.16 Devuelve un listado con todos los clientes que sean de 
// la ciudad de `Madrid` y cuyo representante de ventas tenga el
// código de empleado `11` o `30`.

export const getAllMadridClientsCodeSalesManager11_30 = async() => {

    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate = [];

    data.forEach(val => {
        if (val.code_employee_sales_manager === 11 || val.code_employee_sales_manager === 30){
            dataUpdate.push(val);
        };
    });
    
    return dataUpdate;
}

// 1.6 Devuelve un listado con el nombre de los todos los clientes
// españoles.

export const getNamesAllClientsBySpain = async() => {
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();

    let dataUpdate = data.map(val => {
        return {
            nombreCliente : val.client_name
        }
    });

    return dataUpdate;
}



// 2.6 Devuelve el nombre de los clientes y el nombre de sus representantes
// junto con con la ciudad de la oficina a la que pertenece el representante


export const getAllClientsNameSalesManagerOffice = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let data = await res.json();
    let dataUpdate = [];

    await Promise.all(data.map(async (val) => {
        let nameClient = val.client_name;

        let infoSaleManager = await getAllInfoEmployeesByCodeEmployee(val.code_employee_sales_manager);
        let [Manager] = infoSaleManager;
        let {name:nameSaleManager} = Manager;

        let infoOfficeManager = await getAllInfoOfficeByCode_Office(infoSaleManager[0].code_office);
        let [Office] = infoOfficeManager;
        let  {city:nameCityOfficeManager} = Office

        dataUpdate.push({
            nombreCliente : nameClient,
            nombreAsesorVenta : nameSaleManager,
            nombreCiudadOficinaAsesor : nameCityOfficeManager
        });
    }));

    return dataUpdate;
};


// 2.1 Obtén un listado con el nombre de cada cliente y
// el nombre y apellido de su representante de ventas.

export const getAllClientsNameAndHisManagerSales = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let data = await res.json();
    let dataUpdate = [];

    await Promise.all(data.map(async (val) => {
        let nameClient = val.client_name;

        let infoSaleManager = await getAllInfoEmployeesByCodeEmployee(val.code_employee_sales_manager);
        let [Manager] = infoSaleManager;
        let {name:nameSaleManager} = Manager;
        let {lastname1:lastname1SaleManager} = Manager;


        dataUpdate.push({
            nombreCliente : nameClient,
            nombreAsesorVenta : `${nameSaleManager} ${lastname1SaleManager}`
        });
    }));

    return dataUpdate;
};

// 2.2 Muestra el nombre de los clientes que hayan realizado
// pagos junto con el nombre de sus representantes de ventas.

export const getAllClientsPaidAndNameSalesManager = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let data = await res.json();
    let dataUpdate = [];

    await Promise.all(data.map(async (val) => {
        let nameClient = val.client_name;

        let infoSaleManager = await getAllInfoEmployeesByCodeEmployee(val.code_employee_sales_manager);
        let [Manager] = infoSaleManager;
        let {name:nameSaleManager} = Manager;
        let {lastname1:lastname1SaleManager} = Manager;


        let infoRequests = await getAllClientsHaveMadeRequestByClientsCode(val.client_code);
        
        if(infoRequests){
            dataUpdate.push({
                nombreCliente : nameClient,
                nombreAsesorVenta : `${nameSaleManager} ${lastname1SaleManager}`,
                pedidoRealizado : infoRequests
            });
        }

    }));

    return dataUpdate;
};

// 2.3 Muestra el nombre de los clientes que **no** hayan 
// realizado pagos junto con el nombre de sus representantes de ventas.

export const getAllClientsNoPaidAndNameSalesManager = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let data = await res.json();
    let dataUpdate = [];

    await Promise.all(data.map(async (val) => {
        let nameClient = val.client_name;

        let infoSaleManager = await getAllInfoEmployeesByCodeEmployee(val.code_employee_sales_manager);
        let [Manager] = infoSaleManager;
        let {name:nameSaleManager} = Manager;
        let {lastname1:lastname1SaleManager} = Manager;


        let infoRequests = await getAllClientsHaveMadeRequestByClientsCode(val.client_code);
        
        if(!infoRequests){
            dataUpdate.push({
                nombreCliente : nameClient,
                nombreAsesorVenta : `${nameSaleManager} ${lastname1SaleManager}`,
                pedidoRealizado : infoRequests
            });
        }
    }));

    return dataUpdate;
};


//2.4 Devuelve el nombre de los clientes que han hecho pagos y
// el nombre de sus representantes junto con la ciudad de la oficina 
// a la que pertenece el representante.

export const getAllClientsPaidAndNameSalesManagerAndCityOffice = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let data = await res.json();
    let dataUpdate = [];

    await Promise.all(data.map(async (val) => {
        let nameClient = val.client_name;

        let infoSaleManager = await getAllInfoEmployeesByCodeEmployee(val.code_employee_sales_manager);
        let [Manager] = infoSaleManager;
        let {name:nameSaleManager} = Manager;
        let {lastname1:lastname1SaleManager} = Manager;


        let infoRequests = await getAllClientsHaveMadeRequestByClientsCode(val.client_code);
        
        let infoOfficeManager = await getAllInfoOfficeByCode_Office(infoSaleManager[0].code_office);
        let [Office] = infoOfficeManager;
        let  {city:nameCityOfficeManager} = Office;

        if(infoRequests){
            dataUpdate.push({
                nombreCliente : nameClient,
                nombreAsesorVenta : `${nameSaleManager} ${lastname1SaleManager}`,
                pedidoRealizado : infoRequests,
                ciudadOficinaAsesor : nameCityOfficeManager
            });
        }
    }));

    return dataUpdate;
};