import cuid from 'cuid';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer

function manageRestaurants (state = [],
  action) {
    switch(action.type){
        case "ADD_RESTAURANT":
            // console.log(state.restaurants)
            const restaurant = {
                id: cuid(),
                text: action.text,
            }
            return state.concat(restaurant) ;
        
        case "DELETE_RESTAURANT":
            return state.filter(restaurant => restaurant.id !== action.payload)
        default: 
            return state
    }
}

function manageReviews (state =  []
  ,action) {
    switch(action.type){
        case "ADD_REVIEW":
            // console.log(state.review)
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return state.concat(review) ;
        case "DELETE_REVIEW":
            console.log(state)
            return state.filter(review => review.id !== action.id)
        default: 
            return state
    }
}
