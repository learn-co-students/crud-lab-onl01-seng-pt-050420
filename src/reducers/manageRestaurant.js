import cuid from 'cuid';

const manageRestaurants = (state = { restaurants: [], reviews: [] }, action) => {
    switch (action.type) {

        case "ADD_RESTAURANT":
            let newRestaurant = {...action.restaurant, id: cuid()}
            return {
                ...state,
                restaurants: [...state.restaurants, newRestaurant]
            }

        case "DELETE_RESTAURANT":
            return { ...state, 
                restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) 
            }

        case "ADD_REVIEW":
            debugger
            let newReview = {...action.review, restaurantId: cuid()}
            return { ...state,
                reviews: [...state.reviews, newReview]
            }

        default:
            return state
    }
}

export default manageRestaurants