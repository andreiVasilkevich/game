import React from 'react'
import { GameCover } from '../game-cover'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './order-item.css'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer'

export const OrderItem = ({ game }) => {
    const dispath = useDispatch()
    const hadleClick = () => {
        dispath(deleteItemFromCart(game.id))
    }
    return (
        <div className='order-item'>
            <div className='order-item_page'>
                < GameCover image={game.image} />
            </div>
            <div className='order-item_title' >
                <span>{game.title}</span>
            </div>
            <div className='order-item_price' >
                <span>{game.price} руб. </span>
                <AiOutlineCloseCircle
                    size={25}
                    className='cart-item-ikon'
                    onClick={hadleClick}
                />
            </div>
        </div>
    )
}
