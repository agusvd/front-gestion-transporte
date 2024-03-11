import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const GestionPersona = () => {
    const [gestiones, setGestiones] = useState([]);
    const [fecha, setFecha] = useState('');
    const [fechasUnicas, setFechasUnicas] = useState([]);

    useEffect(() => {
        const obtenerGestiones = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/gestion');
                setGestiones(response.data);
                const fechas = new Set(response.data.map((gestion) => gestion.fecha));
                setFechasUnicas(Array.from(fechas));
            } catch (error) {
                console.error(error);
            }
        };
        obtenerGestiones();
    }, []);

    // eliminar gestión
    const eliminarGestion = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/gestion/${id}`);
            const response = await axios.get('http://localhost:3000/api/gestion');
            setGestiones(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // buscar gestiones por fecha
    const buscarPorFecha = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/gestion/${fecha}`);
            setGestiones(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // restaurar todas las gestiones
    const restaurarGestiones = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/gestion');
            setGestiones(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='font-secondary p-4'>
            <div className='p-2'>
                <div className='flex justify-around items-center w-full pb-4 gap-4'>
                    <div className='p-2 flex glass rounded-lg gap-2 justify-center items-center shadow'>
                        <select value={fecha} onChange={(e) => setFecha(e.target.value)} className='w-full glass text-white px-4 py-2 rounded-lg focus:outline-none'>
                            <option value=''>Selecciona una fecha</option>
                            {fechasUnicas.map((fechaUnica, index) => (
                                <option key={index} value={fechaUnica}>
                                    {fechaUnica}
                                </option>
                            ))}
                        </select>
                        <button onClick={buscarPorFecha} className='p-2 rounded-lg text-white w-1/4 text-center glass hover:bg-black '>
                            Buscar
                        </button>
                        <button onClick={restaurarGestiones} className='p-2 rounded-lg text-white w-1/4 text-center glass hover:bg-black '>
                            Restaurar
                        </button>
                    </div>
                </div>
                <div className='rounded-lg max-h-[400px] overflow-auto glass'>
                    <table className='w-full'>
                        <thead className='sticky top-0 bg-black'>
                            <tr className='text-white'>
                                <th className='w-20 p-3 text-lg font-semibold tracking-wide text-left'>Nombre completo</th>
                                <th className='w-20 p-3 text-lg font-semibold tracking-wide text-left'>Fecha</th>
                                <th className='w-20 p-3 text-lg font-semibold tracking-wide text-left'>Transporte</th>
                                <th className='w-20 p-3 text-lg font-semibold tracking-wide text-left'>Viaje</th>
                                <th className='w-20 p-3 text-lg font-semibold tracking-wide text-center'>Opciones</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100/30'>
                            {gestiones.map((gestion, index) => (
                                <tr key={index} className='bg-black/50 hover:bg-black duration-300 ease-in-out font-bold h-12'>
                                    <td className='p-3 text-sm text-white whitespace-nowrap '>
                                        {gestion.nombre} {gestion.apellido}
                                    </td>
                                    <td className='p-3 text-sm text-white whitespace-nowrap '>
                                        {gestion.fecha}
                                    </td>
                                    <td className='p-3 text-sm text-white whitespace-nowrap'>
                                        {gestion.tipoTransporte}
                                    </td>
                                    <td className='p-3 text-sm text-white whitespace-nowrap'>
                                        {gestion.tipoViaje}
                                    </td>
                                    <td className='p-3 text-white whitespace-nowrap items-center flex justify-center'>
                                        <Link to={`/dashboard/editar-gestion/${gestion.id}`} className='p-3 text-sm text-white whitespace-nowrap hover:text-blue-500 transition-all hover:scale-110'>
                                            <BiEdit size={25} />
                                        </Link>
                                        <button onClick={() => eliminarGestion(gestion.id)} className='p-3 text-sm text-white whitespace-nowrap hover:text-red-500 transition-all hover:scale-110'>
                                            <BiTrash size={25} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GestionPersona;
