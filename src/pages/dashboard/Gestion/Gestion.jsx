import React, { useState, useEffect } from 'react'
import Head from '../../../components/dashboard/Head'
import TablaTrabajadores from '../../../components/dashboard/TablaTrabajadores'
import GestionPersona from '../../../components/dashboard/GestionPersona'
import GestionCalcular from '../../../components/dashboard/GestionCalcular'
import GestionResultado from '../../../components/dashboard/GestionResultado'


const Gestion = () => {

    const [pagina, setPagina] = useState(1)

    // funcionalaidad para cambiar de pagina con un boton
    const cambiarPagina = (numero) => {
        setPagina(numero)
    }

    return (
        <div className='h-screen font-secondary flex flex-col overflow-auto w-full wallpaper'>
            <Head />
            <div className='flex flex-col gap-2'>
                <div className='items-center flex justify-center pt-10'>
                    <div className='p-2 flex justify-center items-center glass rounded-xl '>
                        <button
                            onClick={() => cambiarPagina(1)}
                            className={`flex text-xl p-2 hover:animate-bouncing ease-in-out  transition-all duration-300 
                            ${pagina === 1 ? ' text-white' : 'text-white/50'}`}>
                            Trabajadores
                        </button>
                        <button
                            onClick={() => cambiarPagina(2)}
                            className={`flex text-xl p-2 hover:animate-bouncing ease-in-out transition-all duration-300 
                            ${pagina === 2 ? 'text-white' : 'text-white/50'}`}>
                            Editar
                        </button>
                        <button
                            onClick={() => cambiarPagina(3)}
                            className={`flex text-xl p-2 hover:animate-bouncing ease-in-out transition-all duration-300 
                            ${pagina === 3 ? 'text-white' : 'text-white/50'}`}>
                            Finalizar
                        </button>
                        <button
                            onClick={() => cambiarPagina(4)}
                            className={`flex  text-xl p-2 hover:animate-bouncing ease-in-out transition-all duration-300 
                            ${pagina === 4 ? 'text-white' : 'text-white/50'}`}>
                            Resultado
                        </button>
                    </div>

                </div>
                {pagina === 1 && (
                    <div className=''>
                        <TablaTrabajadores />
                    </div>
                )}
                {pagina === 2 && (
                    <div className=''>
                        <GestionPersona />
                    </div>
                )}
                {pagina === 3 && (
                    <div className=''>
                        <GestionCalcular />
                    </div>
                )}
                {pagina === 4 && (
                    <div className=''>
                        <GestionResultado />
                    </div>
                )}

            </div>
        </div>
    )
}

export default Gestion