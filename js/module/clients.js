import { 
    getAllInfoOfficeByCode_Office
} from "/home/camper/Escritorio/clasesJS/js/module/offices.js";
import { 
    getAllInfoEmployeesByCodeEmployee
} from "/home/camper/Escritorio/clasesJS/js/module/employees.js";



// Devuelve un listado con todos los clientes que sean de 
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




// Devuelve el nombre de los clientes y el nombre de sus representantes
// junto con con la ciudad de la oficina a la que pertenece el representante

export const getAllClientsNameSalesManagerOffice = async() => {

    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json();
    let dataUpdate = [1];

    data.forEach(async val => {
        
        let nameClient = val.client_name;
        let nameSaleManager;
        
        async function getNameSaleManager(){
            nameSaleManager = await getAllInfoEmployeesByCodeEmployee(val.code_employee_sales_manager);
            return nameSaleManager;
            
        }

        // getAllInfoOfficeByCode_Office(dataFunct[1]).then(data => {
        //     dataFunct.push({
        //         Nombre_Asesor_Ventas: data,
        //     });
        // });

        nameSaleManager = await getNameSaleManager();

        dataUpdate.push(nameSaleManager[0].name);

        return dataUpdate;
    });

    return data;
}
