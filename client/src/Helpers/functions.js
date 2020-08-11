export const  getLengthOfCart =(cart, user) => {
 
        const newArr = cart.filter(item => item!=null  &&  item.userId === user.id)
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
            return accumulator +el.food.price
        }
    } ,0)
    return sum;  
}

export const   isEmpty = (obj) => { 
    for (var x in obj) { return false; }
    return true;
   }
export    const findUserById =(users, id) => {
    const user = users.find(user => user._id === id)
    return user
}

export    const findFoodById =(foods, id) => {
    const food = foods.find(food => food._id === id)
    return food
}

