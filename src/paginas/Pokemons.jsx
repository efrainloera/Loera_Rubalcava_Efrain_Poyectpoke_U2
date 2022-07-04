import React, { useState, useEffect } from 'react'
import { getPokemon, get } from '../servicios';
import { Card } from '../card';

export const Pokemons = () => {
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {

        const getData = async () => {
            const resultado = await getPokemon('?offset=0&limit=8');
            setNext(resultado.data.next);
            retornarPokemons(resultado.data.results);
            console.log(resultado.data)
        }
        getData()
    }, []);


    const retornarPokemons = (valor) => {
        valor.map(
            async (pokemon) => {
                const resultado = await get(pokemon.url);
                setPokemon(array => [...array, resultado.data]);
            })
    }


    const button = async (e) => {
        switch (e.target.name) {
            case 'siguiente':

                const siguiente = await get(next);
                setPokemon([])
                retornarPokemons(siguiente.data.results);
                setNext(siguiente.data.next);
                setPrevious(siguiente.data.previous);
                console.log('siguiente')
                break;
            case 'anterior':
                const anterior = await get(previous);
                setPokemon([])
                retornarPokemons(anterior.data.results);
                setNext(anterior.data.next);
                setPrevious(anterior.data.previous);
                console.log('anterior')
                break;
            default:
                window.alert('No permitido');
                console.log('No permitido')
                break;
        }

    }

    return (
        <div>


            <h1 className="text-3xl text-center">Lista de pokemon</h1>
            <div className="flex justify-center items-center">
                <div className="border">

                    <div className='text-center  items-center'>

                        {(pokemon.map(
                            (pokemon, index) => {
                                return (
                                    <Card key={index} pokemon={pokemon} />
                                )
                            }))
                        }
                    </div>

                    <div className='  items-center '>
                        <button
                            disabled={!previous}
                            onClick={(e) => { button(e) }}
                            name="anterior"
                            className={!previous ? "w-full m-2 py-2 px-4 text-lg font-bold text-black bg-yellow-0 " : "w-full m-2 py-2 px-4 text-lg font-bold text-black bg-yellow-500 rounded-lg border border-gray-300"}
                            >
                           
                            Anterior
                        </button>

                        <button
                            disabled={!next}
                            onClick={(e) => { button(e) }}
                            name="siguiente"
                            className={!next ? "w-full m-2 py-2 px-4 text-lg font-bold text-black bg-yellow-0 " : "w-full m-2 py-2 px-4 text-lg font-bold text-black bg-yellow-500 rounded-lg border border-gray-300"}
                            >
                            Siguiente
                               
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}