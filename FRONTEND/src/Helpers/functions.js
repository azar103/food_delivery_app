export const  getLengthOfCart =(user, cart) => {
       
        const newArr = cart.filter(item => item!=null && item.userId === user._id)
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