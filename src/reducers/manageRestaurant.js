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
            // debugger
            let newReview = {...action.review}
            return { ...state,
                reviews: [...state.reviews, newReview]
            }

        case "DELETE_REVIEW":
            // debugger
            let reviewIndex = state.reviews.indexOf(action.review)
            return {
                ...state,
                reviews: [...state.reviews.slice(0, reviewIndex), ...state.reviews.slice(reviewIndex + 1)]
            }

        default:
            return state
    }
}

export default manageRestaurants
