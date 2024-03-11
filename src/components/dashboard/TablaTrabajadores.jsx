import React, { useState, useEffect } from 'react';
import { BiEdit, BiSearch, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TablaTrabajadores = () => {

    // obtener trabajadores de la base de datos
    const [trabajadores, setTrabajadores] = useState([]);

    useEffect(() => {
        const obtenerTrabajadores = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/trabajadores');
                setTrabajadores(response.data);
            } catch (error) {
                console.log("no hay trabajadores")
                console.error(error);
            }
        }
        obtenerTrabajadores();
    }, []);

    // eliminar un trabajador
    const eliminarTrabajador = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/trabajadores/${id}`);
            const response = await axios.get('http://localhost:3000/api/trabajadores');
            setTrabajadores(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='p-4 font-secondary'>
            {trabajadores.length === 0 ? (
                <div className='bg-[#202020] w-full rounded-xl p-4'>
                    <p className="text-white text-center text-xl">No hay trabajadores disponibles</p>
                    <div className='flex justify-center items-center p-2'>
                        <Link to='/dashboard/nuevo-trabajador' className='p-2 bg-white rounded-xl'>
                            Nuevo trabajador
                        </Link>
                    </div>
                </div>

            ) : (
                <div>
                    <div className='flex justify-around items-center w-full pb-4 gap-4'>
                        <div className='p-2 flex glass gap-2 w-full rounded-xl'>
                            <div className='w-full flex items-center gap-4'>
                                <BiSearch size={25} className='text-white' />
                                <input type='text' placeholder='Buscar...' className='w-full bg-transparent text-white text-xl outline-none ' />
                            </div>
                            <Link to='/dashboard/nuevo-trabajador' className='p-2 rounded-lg text-white w-1/4 text-center glass hover:bg-black/50 duration-300'>
                                Nuevo trabajador
                            </Link>
                        </div>
                    </div>
                    <div className='rounded-lg max-h-[800px] overflow-auto glass'>
                        <table className='w-full table-fixed'>
                            <thead className='sticky top-0'>
                                <tr className='text-white bg-black'>
                                    <th className='p-3 text-lg font-semibold tracking-wide'>ID</th>
                                    <th className='p-3 text-lg font-semibold tracking-wide'>Nombre Completo</th>
                                    <th className='p-3 text-lg font-semibold tracking-wide'>Opciones</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-100/30'>
                                {trabajadores.map((trabajador) => (
                                    <tr key={trabajador.id}
                                        className='bg-black/50 duration-100 ease-in-out font-bold h-12'>
                                        <td className='p-3 text-lg text-white whitespace-nowrap text-center'>
                                            {trabajador.id}
                                        </td>
                                        <td className='p-3 text-lg text-white whitespace-nowrap text-center'>
                                            {trabajador.nombre} {trabajador.apellido}
                                        </td>
                                        <td className='p-3 text-sm text-white whitespace-nowrap items-center flex justify-center'>
                                            <Link to={`/dashboard/gestion-traslado/${trabajador.id}`} className='bg-[#202020] text-white hover:bg-black hover:scale-105 duration-300 flex p-2 rounded-xl'>
                                                Gestionar transporte
                                            </Link>
                                            <Link to={`/dashboard/editar-trabajador/${trabajador.id}`} className='p-3 text-sm text-white whitespace-nowrap hover:text-blue-500 transition-all hover:scale-110'>
                                                <BiEdit size={25} />
                                            </Link>
                                            <button onClick={() => eliminarTrabajador(trabajador.id)}  className='p-3 text-sm text-white whitespace-nowrap hover:text-red-500 transition-all hover:scale-110'>
                                                <BiTrash size={25} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TablaTrabajadores;
