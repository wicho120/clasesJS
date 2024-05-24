// 1.1 Devuelve un listado con el código de oficina y la ciudad 
// donde hay oficinas.
export const getAllOficceAndCodeCity = async()=>{
    let res = await fetch("http://172.16.101.146:5743/offices")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            city: val.city
        }
    })
    return dataUpdate;
}
// 1.2 Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOficceCityAndMovil = async()=>{
    let res = await fetch("http://172.16.101.146:5743/offices?country=España")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return {
            code_office: val.code_office,
            movil: val.movil
        }
    })
    return dataUpdate
}

// Devolver informacion de una oficina en base al codigo de oficina

export const getAllInfoOfficeByCode_Office = async(code) => {
    let res = await fetch(`http://172.16.101.146:5743/offices?code_office=${code}`)
    let data = await res.json();
    
    return data;

}