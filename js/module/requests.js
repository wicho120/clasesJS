// 1.7 Devuelve un listado con los distintos estados por
// los que puede pasar un pedido.

export const getAllStatusRequests = async() =>{

    let res = await fetch("http://localhost:5508/requests");
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

export const getCodesDatesProductsDelivered = async() =>{

    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    
    let dataUpdate = [] 
    
    data.forEach(val => {
        if
        let dateWait = val.date_wait;
        let newDateWait = dateWait.slice(8);

        let dateDelivery = val.date_delivery;
        console.log(dateDelivery)
        // let newDateDelivery = dateDelivery.slice(8);

        // if (parseInt(newDateWait) > parseInt(newDateDelivery)){
        //     dataUpdate.push(val.code_request);
        // }
    }); 

    return dataUpdate;
};