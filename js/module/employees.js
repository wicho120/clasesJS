// Obtener la informacion de un empleado por el codigo

export const getAllInfoEmployeesByCodeEmployee = async(code) => {
    let res_employees = await fetch(`http://172.16.101.146:5742/employees?employee_code=${code}`)
    let data = await res_employees.json();
    
    return data;

}

// 1.3 Devuelve un listado con el nombre, apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmailsAndBoss = async() =>{
    let res = await fetch("http://172.16.101.146:5742/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return {
            name: val.name,
            fullLastname: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    })
    return dataUpdate;
}
// 1.4 Devuelve el nombre del puesto, nombre, apellidos y
//  email del jefe de la empresa.
export const getBossFullNameAndEmail = async() =>{
    let res=await fetch("http://172.16.101.146:5742/employees")
    let data =await res.json();
    let dataUpdate = []
    data.forEach(val=>{
        if(val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastname: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
    
            })
        }
    })
    return dataUpdate
}

// 1.5 Devuelve un listado con el nombre, apellidos y puesto de aquellos 
// empleados que no sean representantes de ventas.

export const getFullNameAllEmployees_neSaleManager = async() =>{

    let res = await fetch("http://172.16.101.146:5742/employees?position_ne=Representante Ventas");
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return{
            nombreCompleto : `${val.name} ${val.lastname1} ${val.lastname2}`,
            puesto : val.position
        };
    })

    return dataUpdate;
};