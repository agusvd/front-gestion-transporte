import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';
import Head from '../../../components/dashboard/Head';

const FormGestion = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fecha, setFecha] = useState('');
    const [tipoTransporte, setTipoTransporte] = useState('VAN');
    const [tipoViaje, setTipoViaje] = useState('IDA');

    // obtener la id del trabajador para mostrar su nombre y apellido
    useEffect(() => {
        const obtenerTrabajador = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/trabajadores/${id}`);
                if (res.data) {
                    setNombre(res.data.nombre);
                    setApellido(res.data.apellido);
                }
            } catch (error) {
                console.error({error});
            }
        }
        obtenerTrabajador();
    }, []);

    // Crear el traslado
    const crearTraslado = async () => {
        try {
            const trabajadorId = parseInt(id);
            const res = await axios.post('http://localhost:3000/api/gestion', {
                fecha,
                tipoTransporte,
                tipoViaje,
                trabajadorId
            });
            navigate('/dashboard/gestion'); // Utiliza navigate para redirigir
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='font-secondary h-screen'>
            <Head />
            <div className='flex w-full h-full'>
                <form onSubmit={crearTraslado}
                    className='flex flex-col gap-2 items-center bg-[#171819] h-full w-full pt-10'>
                    <div className='flex justify-center items-center'>
                        <Link to='/dashboard/gestion' className='p-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300'>
                            <BiArrowBack />
                        </Link>
                        <h2 className='text-2xl font-bold p-2 text-white'>
                            Gestionando a {nombre} {apellido}
                        </h2>
                    </div>
                    {/* Seleccionar fecha */}
                    <div className='flex flex-col p-2 w-full md:w-1/2'>
                        <label className='text-lg text-white'>Selecciona la fecha</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input
                                onChange={(e) => setFecha(e.target.value)}
                                type='date'
                                className='w-full bg-gray-200' />
                        </div>
                    </div>
                    {/* Seleccionar tipo de transporte */}
                    <div className='flex flex-col p-2 w-full md:w-1/2'>
                        <label className='text-lg text-white'>Selecciona el transporte</label>
                        <div>
                            <select
                                onChange={(e) => setTipoTransporte(e.target.value)}
                                className='p-2 w-full rounded-md bg-gray-200 shadow-md'>
                                <option>Transporte</option>
                                <option value='VAN'>VAN</option>
                                <option value='TAXI'>TAXI</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-full md:w-1/2'>
                        <label className='text-lg text-white'>Selecciona tipo de traslado</label>
                        <div>
                            <select
                                onChange={(e) => setTipoViaje(e.target.value)}
                                className='p-2 w-full rounded-md bg-gray-200 shadow-md'>
                                <option>Tipo de traslado</option>
                                <option value='IDA'>IDA</option>
                                <option value='VUELTA'>VUELTA</option>
                            </select>
                        </div>
                    </div>
                    {/* Boton para guardar */}
                    <div className='flex justify-center items-center'>
                        <button
                            type='submit'
                            className='bg-gray-200 rounded-md text-lg w-full p-2 shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300 active:bg-green-400 active:text-white'>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormGestion;

