import {FETCH_FOODS} from './actionTypes'
const initialState = {
    foods: [
        {
            id: 1,
            name: 'Salade Cesar',
            price: 10.000,
            city: 'tunis',
            url: 'https://cuisine.nessma.tv/uploads/6/2020-04/ac7450bb2b9ac55b7060d4ccde66dba2.jpg',
            ingredients: [
                "Laitue",
                "tomates cerises",
                "poulet",
                "croûtons",
                "roquette",
                "parmesan"
            ]
        },
        {
            id: 2,
            name: 'Tacos Simple Crispy Pesto',
            price: 8.500,
            city: 'tunis',
            url: 'https://images-gmi-pmc.edge-generalmills.com/0a76e9dd-cf0b-40b4-9b31-56552dabdb36.jpg',
            ingredients: [
                "Sauce pesto",
                "champignon frai",
                "poulet panée"
            ]
        },
        {
            id: 3,
            name: 'Pathe Thon Fromage',
            price: 7.000,
            city: 'bizerte',
            url: 'https://static.750g.com/images/640-420/b8df15da0150e65ae1cb44313bd211c7/pates-au-thon-inratables.jpg',
            ingredients: [
                "Sauce tomate",
                "thon",
                "mozarella"
            ]
        }
        
    ]
}


const manageFoods = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FOODS:
            return {
                 foods: [...state.foods]
            }
        default:
            return state;    
    }
}


export default manageFoods