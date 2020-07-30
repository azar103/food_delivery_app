export const  getLengthOfCart =(auth, user, cart) => {
    if(user==null && auth=== false) {
        return 0
    }else {
        const newArr = cart.filter(item => item.userId === user._id)
        return newArr.length
    } 
 }

 export const cartFilteredById = (cart,id) => {
    const newArr = cart.filter(item => item.userId === id)
    return newArr
 }

 export const totalPrice = (cart) => {
    let sum =  cart.reduce((accumulator, el) => accumulator+el.price,0)
    return sum;  
}