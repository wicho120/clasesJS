// 3. Devuelve un listado con todos los pagos 
// que se realizaron en el año `2008` mediante `Paypal`. 
// Ordene el resultado de mayor a menor.

export const getAllPayments2008byPaypal = async() => {

    let res = await fetch("http://localhost:5505/payments?payment=PayPal")
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