import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {
  
  const restaurants = props.restaurants.map(restaurant => <Restaurant key= {restaurant.id} restaurant={restaurant} delete={props.delete}/>)

  return(
    <div>
      {restaurants}
      {/* {console.log("lll")} */}
    </div>
  )

}

export default Restaurants;