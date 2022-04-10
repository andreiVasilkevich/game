import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GameCover } from '../game-cover'
import { GameBuy } from '../game-buy'
import { GameGenres } from '../game-genres'
import { useDispatch } from 'react-redux'
import { setCurentGame } from '../../redux/games/reducer'
import './game-item.css'

export const GameItem = ({ game }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const hadleClick = () => {
        dispatch(setCurentGame(game))
        navigate(`/app/${game.title}`)
    }
    return (
        <div className='game-item' onClick={hadleClick}>
            <GameCover image={game.image} />
            <div className='game-item_detales'>
                <span className='game-item_title'>{game.title}</span>
                <div className='game-item_genereits'>
                    {game.genres.map(genre => <GameGenres genre={genre} key={genre} />)}
                </div>
                <div className='game-item_bye'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    )
}