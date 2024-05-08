import { 
    getAllInfoOfficeByCode_Office
} from "/home/camper/Escritorio/clasesJS/js/module/offices.js";
import { 
    getAllInfoEmployeesByCodeEmployee
} from "/home/camper/Escritorio/clasesJS/js/module/employees.js";



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




// 2.7 Devuelve el nombre de los clientes y el nombre de sus representantes
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

