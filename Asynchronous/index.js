const takeOrder=(customer,callback)=>{
    console.log(`Take Order for ${customer}`)
    callback(customer);
}
const processOrder=(customer,callback)=>{
    console.log(`processing order for ${customer}`);
    setTimeout(() => {
        console.log(`Cooking Completed for ${customer}`)
        console.log( `order processed for ${customer}`)
        callback(customer)
    }, 500);

}

const completeOrder=(customer)=>{
    console.log(`completed order for ${customer}`)
}



takeOrder("Customer 1",(customer)=>{
    processOrder(customer,(customer)=>{
        completeOrder(customer)
    });
});


