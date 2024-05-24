// 1.13 Devuelve un listado con todos los pagos 
// que se realizaron en el año `2008` mediante `Paypal`. 
// Ordene el resultado de mayor a menor.

export const getAllPayments2008byPaypal = async() => {

    let res = await fetch("http://176.16.101.146:5744/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = []

    data.forEach(val => {
        let yearPayment = val.date_payment;
        if (yearPayment.slice(0,4) === "2008") {
            dataUpdate.push(val)
        }
    }
    );

    dataUpdate.sort((a,b) => {
        const dateA = new Date(a.date_payment)
        const dateB = new Date(b.date_payment)
        return dateB-dateA;
    })

    return dataUpdate;
}

// 1.8 Devuelve un listado con el código de cliente de aquellos clientes 
// que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar 
// aquellos códigos de cliente que aparezcan repetidos.

export const getAllClientsPaidIn2008 = async() => {
    let res = await fetch("http://176.16.101.146:5744/payments")
    let data = await res.json();
    let dataUpdate = []
    
    data.forEach(val => {
        let yearPayment = val.date_payment;
        if (yearPayment.slice(0,4) === "2008") {
            dataUpdate.push(val.code_client);
        };
    });

    let DataUpdate = [...new Set(dataUpdate)]
    return DataUpdate
} 