import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import './cart-block.css'
import { BiCartAlt } from 'react-icons/bi'
import { CartMenu } from '../cart-menu'
import { CartTotalPrice } from '../utils'
import { ItemInCart } from '../item-in-cart'
import { useNavigate } from 'react-router'

export const CartBlock = () => {
    const [isCartMenuVisably, setIsCartMenuVisably] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = CartTotalPrice(items)
    const navigate = useNavigate()

    const hadleClick = useCallback(() => {
        setIsCartMenuVisably(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className='cart-block'>
            <ItemInCart qunteti={items.length} />
            <BiCartAlt
                size='26px'
                className='cart-ikons'
                onClick={() => setIsCartMenuVisably(!isCartMenuVisably)}
            />
            {totalPrice > 0
                ? <span className='cart-price'>{totalPrice}. руб</span>
                : null}
            {isCartMenuVisably && < CartMenu items={items} onClick={hadleClick} />}
        </div>
    )
}
