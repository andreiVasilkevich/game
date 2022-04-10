import React from 'react'
import './item-in-cart.css'

export const ItemInCart = ({ qunteti = 0 }) => {
    return qunteti > 0
        ? (
            <div className='item-in-cart'>
                {qunteti}
            </div>
        ) : null
}
