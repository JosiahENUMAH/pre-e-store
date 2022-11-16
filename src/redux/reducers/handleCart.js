const cart= []

const handleCart = (state= cart, action)=>{ 
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
        
            // check if product is already exist
            const exist = state.find((x)=>x.id === product.id)
            let arr = [...state]
            console.log(action.payload);
            if(exist){
                alert('second time')
                // increase the quantity
                return state.map((x)=>
                x.id===product.id ? {...x, qty: x.qty + 1}: x)
                // console.log(action.payload, state.indexOf(exist));
                // arr[state.indexOf(exist)] = {...arr[state.indexOf(exist)],qty: arr[state.indexOf(exist)].qty+1}
                // console.log( arr[state.indexOf(exist)])
                //  arr.map((x)=> {
                //    return x.id === action.payload.id? {...x, qty: x.qty+1} : alert('this')
                // })
// return arr
                
            }else{
                alert('first time')
                const product = action.payload

                arr.push({
                    ...product,
                    qty: 1,
                })
                return arr
                // return [
                //     ...state,
                //     {
                //         ...product,
                //         qty: 1,
                //     }
                // ]
            }
        break;

            case "DELITEM": 
            const exist1 = state.find((x)=>x.userId === product.userId)
                if(exist1.qty === 1){
                    return state.filter((x)=>x.userId !== exist1.id)
                }else{
                    return state.map((x)=>
                    x.userId === product.userId ? {
                        ...x, qty: x.qty-1} : x)
                }
            break;
    
        default:
           
            return state;
        
            break;
    }
}

export default handleCart;

