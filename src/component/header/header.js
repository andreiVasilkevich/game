import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { CartBlock } from '../cart-block'

export const Header = () => {
    return (
        <div className='header'>
            <div className='wrapers'>
                <Link to='/' className='wrapers_link'>
                    Game AV Stors
                </Link>
            </div>
            <div className='header_carts'>
                <CartBlock />
            </div>
        </div>
    )
}
