import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id="explore-menu">
    <h1>Explore our menu</h1>
    <p className='explore-menu-text'>Savor a diverse menu featuring a delectable array of dishes, each crafted with the finest ingredients. Indulge in culinary excellence with flavors that delight and inspire.</p>
    <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
            return (
                <div onClick={()=>{setCategory(prev=>prev===item.menu_name?'All':item.menu_name)}} className='explore-menu-list-item' key={index}>
                <img  className={category===item.menu_name?'active':''} src={item.menu_image} alt=""></img>
                <p>{item.menu_name}</p>
                </div>
            )
        }
        )
        }
    </div>
    <hr/>

    </div>
  )
}

export default ExploreMenu