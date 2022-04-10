import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from '../order-item'
import { CartTotalPrice } from '../utils'
import './order-page.css'

export const OrderPage = () => {
    const item = useSelector(state => state.cart.itemsInCart)

    if (item.length < 1) {
        return <h1> Ваша корзина пуста </h1>
    }

    return (
        <div className='order-page' >
            <div className='order-page-left' >
                {item.map(game => <OrderItem game={game} />)}
            </div>
            <div className='order-page_rigth' >
                <div className='order-page_rigth-price' >
                    <span>
                        {item.length} товаров на сумму  {CartTotalPrice(item)} руб.
                    </span>
                </div>
            </div>
        </div>
    )
}
