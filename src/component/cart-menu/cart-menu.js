import React from 'react'
import { Button } from '../button'
import { CartItem } from '../cart-item'
import { CartTotalPrice } from '../utils'
import './cart-menu.css'

export const CartMenu = ({ items, onClick }) => {
    return (
        <div className='cart-menu'>
            <div className='cart-menu_list'>
                {items.length > 0
                    ? items.map((game) => (
                        <CartItem
                            key={game.title}
                            id={game.id}
                            title={game.title}
                            price={game.price}
                        />
                    ))
                    : 'Корзина пуста'
                }
            </div>
            {items.length > 0 ? (
                <div className='cart-menu_arragth'>
                    <div className='cart-manu_total-price'>
                        <span>Итого: </span>
                        <span>{CartTotalPrice(items)} руб</span>
                    </div>
                    <Button type='primary' size='m' onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    )
}

