import React from 'react'
import {Link} from 'react-router-dom'

export const Card = (pokemon, index) => {
  return (
    <div>
      <div>
        <img
          src={pokemon.pokemon.sprites.front_default}
          alt={pokemon.pokemon.name}
          />
        <div>
          <h2>{pokemon.pokemon.name[0].toUpperCase() + pokemon.pokemon.name.substring(1)}</h2>
        </div>
      </div>
      <Link to={`/pokemon/${pokemon.pokemon.id}`}>
      <button className='w-full bg-yellow-400 border text-red-600 border-black-400 rounded-lg  duration-200'>Caracteristicas</button>
      </Link>
    </div>
  )
}