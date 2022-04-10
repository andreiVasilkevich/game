import React from 'react'
import './game-genres.css'

export const GameGenres = ({ genre }) => {
    return (
        <span className='game-genres'>
            {genre}
        </span>
    )
}
