import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

function FoodItem({id,name,price,description,image}) {
  const[itemCount,setItemCount]=useState(0);

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
        <img src={image} alt={name} className='food-item-image' />
        {
          !itemCount?<img  className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt='add' />
          :<div className='food-item-container'>
          <img  className='remove' onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red}/>
          <p className='food-item-count'>{itemCount}</p>
          <img  onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green}/>

          </div>

        }

        </div>
        <div className='food-item-info'>
            <div className='food-item-naming-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=''></img>
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem