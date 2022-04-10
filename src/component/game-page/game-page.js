import React from 'react'
import { useSelector } from 'react-redux'
import { GameBuy } from '../game-buy'
import { GameCover } from '../game-cover'
import { GameGenres } from '../game-genres'
import './game-page.css'

export const GamePage = () => {
    const game = useSelector(state => state.game.itemsInGame)

    if (!game) return null

    return (
        <div className='game-page'>
            <h1 className='game-page_title'>{game.title}</h1>
            <div className='game-page_content'>
                <div className='game-page_left'>
                    <iframe
                        width='90%'
                        height='400px'
                        src={game.video}
                        title='Youtube Video Player '
                        frameBorder='0'
                    ></iframe>
                </div>
                <div className='game-page-right'>
                    <GameCover image={game.image} />
                    <p> {game.description}</p>
                    <p className='secondary-text'>Популярные метки этого продукта:</p>
                    {game.genres.map(genre => <GameGenres genre={genre} key={genre} />)}
                    <div className='game-page_buy-game'>
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    )
}
