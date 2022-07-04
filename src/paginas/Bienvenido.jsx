import React, { useEffect, useState } from 'react'
import { getPokemons } from '../servicios'
import {useNavigate} from 'react-router-dom';

export const Bienvenido = () => {

    const [count, setCount] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const resultado = await getPokemons();
            setCount(resultado.data.count)
        }
        getData()
    }, [])


    const pokemonAleatorio = () => {
        const numero = Math.floor(Math.random() * count)
        navigate(`/pokemon/${numero}`);
    }

    return (
        <div className=' items-center justify-center'>

            <div className=" text-center  ">
                <h5 className="mb-2 bg-yellow-400 text-3xl font-bold  ">
                    Bienvenidos, pagina sobre pokemones :3
                </h5>
                
                
                    <button onClick={() => pokemonAleatorio()} className="w-full bg-yellow-400  text-red-600 rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                        <div className="text-left">
                            <div className="-mt-1 font-sans text-sm font-semibold">Caracteristicas de Pokemones al Azar</div>
                        </div>
                    </button>
                  
            </div>


        </div>

    )
}

 
