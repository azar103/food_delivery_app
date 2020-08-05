export const  getLengthOfCart =(cart, user) => {
    if(user ==null){
        return 0
    }
    const newArr = cart.filter(item => item!=null &&  item.userId === user._id)
    return newArr.length
    


}

 export const cartFilteredById = (cart,id) => {
    const newArr = cart.filter(item => item!=null && item.userId === id)
    return newArr
 }

 export const totalPrice = (cart) => {

    let sum =  cart.reduce((accumulator, el) =>{

        if(el==null){
           return 0
        }else {
            return accumulator +el.price
        }
    } ,0)
    return sum;  
}

export const   isEmpty = (obj) => { 
    for (var x in obj) { return false; }
    return true;
   }