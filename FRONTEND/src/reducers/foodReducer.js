import {FETCH_FOODS} from './actionTypes'
const initialState = {
    foods: [
        {
            id: 1,
            name: 'Easy Apple Fruit Cake',
            price: 20.23,
            city: 'tunis',
            url: 'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--268475_12.jpg',
            rating: 4,
            timeDilevery: '30-40 min'
        },
        {
            id: 2,
            name: 'Mexican Tacos',
            price: 14.00,
            city: 'tunis',
            url: 'https://assets.afcdn.com/recipe/20190212/87658_w350h250c1cx1663cy2227cxt0cyt0cxb6236cyb4154.webp',
            rating: 3,
            timeDilevery: '30-40 min'
        },
        {
            id: 3,
            name: 'Flafel',
            price: 30.23,
            city: 'bizerte',
            url: 'https://assets.afcdn.com/recipe/20170124/571_w350h250c1cx1500cy1000.webp',
            rating: 5,
            timeDilevery: '10-20 min'
        },
        {
            id: 4,
            name: 'Fricassé tunisien',
            price: 40.33,
            city: 'tunis',
            url: 'https://img-3.journaldesfemmes.fr/F2ad_C1oubaRq31kNffwZ2Lj6wQ=/748x499/smart/a877b7cd0a2f4bf3b0a738dd67c2831f/recipe-jdf/376700.jpg',
            rating: 5,
            timeDilevery: '30-50 min'
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