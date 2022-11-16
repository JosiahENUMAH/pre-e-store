// For Add Item Cart

export  const addCart = (product)=>{
    return{
        type: "ADDITEM",
        payload: product
    }
}

//  For Delete Item Cart

export  const delCart = (product)=>{
    return{
        type: "DELITEM",
        payload: product
    }
}