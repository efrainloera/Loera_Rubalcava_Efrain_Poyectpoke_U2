import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPokemon } from '../servicios'

export const Pokemon = () => {

  const navigate = useNavigate();
  const params = useParams()
  const [pokemon, setPokemon] = useState({
    name: '',
    weight: '',
    height: '',
    base_experience: '',
    sprites: {
      front_default: '',
      back_default: ''
    },
    abilities: [],
    types: [],
    stats: [],

  })

  useEffect(() => {

    const poke = async () => {
      const resultado = await getPokemon(params.id)
      setPokemon(resultado.data)
    }

    poke()
  }, [params])
  return (
    <div>
      <div>

        <div className="flex bg-white  ">
          {/* IMAGEN */}
          <div className=" bg-cover flex  items-center  p-10">
            <img
              src={pokemon.sprites.front_default}
              alt={`Imagen de ${pokemon.name}`}
            />
            
          </div>

          <div className="w-3/4">
            <h1 className="text-gray-900 text-center font-bold text-2xl border-b p-3">{pokemon.name}</h1>
            <div className="flex  mt-30   px-2">
              <div className='w-32'>
                <h2>Peso: </h2>
              </div>
              <div className='mx-3'>
                {pokemon.weight}
              </div>
            </div>


            <div className="flex  mt-30   px-2">
              <div className='w-32 '>
                <h2>Altura: </h2>
              </div>
              <div className='mx-3'>
                {pokemon.height}
              </div>
            </div>


            <div className="flex  mt-30   px-2">
              <div className='w-32'>
                <h2>Experiencia: </h2>
              </div>
              <div className='mx-3'>
                {pokemon.base_experience}
              </div>
            </div>


            <div className="flex  mt-3 border-b  px-2 ">
              <div className='w-32'>
                <h2>Habiliades:</h2>
              </div>
              <div className='mx-3'>
                {pokemon.abilities.map(ability => (
                  <p  key={ability.ability.name}>{ability.ability.name}</p>
                ))}
              </div>
            </div>


            <div className="flex  mt-3 border-b  px-2 ">
              <div className='w-32'>
                <h2>Tipo:</h2>
              </div>
              <div className='mx-3'>
                {pokemon.types.map(type => (
                  <p key={type.type.name}>{type.type.name}</p>
                ))}
              </div>
            </div>


            <div className="flex item-center mt-3  px-2">
              <div className='w-32'>
                <h2>Estadisticas: </h2>
              </div>
              <div className='mx-3'>
                {pokemon.stats.map(stat => (
                  <p  key={stat.stat.name}>{stat.stat.name} {stat.base_stat}</p>
                ))}
              </div>
            </div>
            <button
              className='bg-yellow-500  text-red-500 font-bold'
              onClick={() => navigate(-1)}>Regresar a la pagina anterior</button>

          </div>
        </div>
      </div>




    </div>
  )
}