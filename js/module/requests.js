
// 1.7 Devuelve un listado con los distintos estados por
// los que puede pasar un pedido.

export const getAllStatusRequests = async() =>{

    let res = await fetch("http://172.16.101.146:5745/requests");
    let data = await res.json();
    let dataUpdate = [] 
    
    data.forEach(val => {
            dataUpdate.push(val.status)
        });

    let newDataUpdate = dataUpdate.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })

    return newDataUpdate;
};

// 1.9 Devuelve un listado con el código de pedido, código de cliente, 
// fecha esperada y fecha de entrega de los pedidos que no han sido 
// entregados a tiempo.

export const getAllRequestsDeliveredOverTime = async() =>{

    let res = await fetch("http://172.16.101.146:5745/requests?status=Entregado");
    let data = await res.json();
    
    let dataUpdate = [] 
    
    data.forEach(val => {

        let dateWait = new Date(val.date_wait);
        let dateDelivery = new Date(val.date_delivery);

        if(dateWait.getTime() < dateDelivery.getTime()){
            dataUpdate.push({
                "Codigo pedido" : val.code_request,
                "Codigo Cliente" : val.code_client,
                "Fecha esperada" : val.date_wait,
                "Fecha entrega" : val.date_delivery
            })
        }
    }); 

    return dataUpdate;
};

// 1.10 Devuelve un listado con el código de pedido, código de cliente,
// fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega 
// ha sido al menos dos días antes de la fecha esperada.

export const getAllRequestsDeliveredTwoDaysBeforeDateWait = async() =>{

    let res = await fetch("http://172.16.101.146:5745/requests?status=Entregado");
    let data = await res.json();
    
    let dataUpdate = [] 
    
    data.forEach(val => {

        let dateWait = new Date(val.date_wait);
        let dateDelivery = new Date(val.date_delivery);

        if((dateWait.getDate() - dateDelivery.getDate()) > 2){
            dataUpdate.push({
                "Codigo pedido" : val.code_request,
                "Codigo Cliente" : val.code_client,
                "Fecha esperada" : val.date_wait,
                "Fecha entrega" : val.date_delivery
            })
        }
    }); 

    return dataUpdate;
};

// 1.11 Devuelve un listado de todos los pedidos que fueron 
// **rechazados** en `2009`.

export const getAllRequestsRefusedBy2009 = async() =>{

    let res = await fetch("http://172.16.101.146:5745/requests?status=Entregado");
    let data = await res.json();
    
    let dataUpdate = [] 
    
    data.forEach(val => {

        let dateWait = new Date(val.date_wait);
        let dateDelivery = new Date(val.date_delivery);

        if((dateWait.getDate() - dateDelivery.getDate()) > 2){
            dataUpdate.push({
                "Codigo pedido" : val.code_request,
                "Codigo Cliente" : val.code_client,
                "Fecha esperada" : val.date_wait,
                "Fecha entrega" : val.date_delivery
            })
        }
    }); 

    return dataUpdate;
};

// Obtener info de pedido en base a codigo de cliente

export const getAllClientsHaveMadeRequestByClientsCode = async(id) =>{

    let res = await fetch("http://172.16.101.146:5745/requests");
    let data = await res.json();
    
    let dataUpdate = false

    data.forEach(val => {
        if(id == val.code_client){
            dataUpdate = true;
        }
    });

    return dataUpdate;
};