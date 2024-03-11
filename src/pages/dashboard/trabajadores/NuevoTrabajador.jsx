import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Head from '../../../components/dashboard/Head';



const NuevoTrabajador = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [numeroDireccion, setNumeroDireccion] = useState('');

    const crearTrabajador = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/trabajadores', {
                nombre,
                apellido,
                correo,
                telefono: parseInt(telefono),
                direccion,
                numeroDireccion: parseInt(numeroDireccion)
            });
            navigate('/dashboard/gestion'); // Utiliza navigate para redirigir
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className='font-secondary bg-black'>
            <Head />
            <div className='h-full w-full'>
                <form onSubmit={crearTrabajador}
                    className='flex flex-col gap-2 items-center bg-[#171819] h-full rounded-lg'>
                    <div className='flex justify-center items-center '>
                        <Link to='/dashboard/gestion' className='p-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300'>
                            <BiArrowBack />
                        </Link>
                        <h2 className='text-2xl font-bold p-2 text-white'>Volver</h2>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Nombre</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='text' placeholder='Nombre...'
                                value={nombre}
                                className='w-full bg-gray-200 outline-none'
                                onChange={(e) => setNombre(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Apellido</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='text' placeholder='Apellido...'
                                className='w-full bg-gray-200 outline-none'
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Correo</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='email' placeholder='correo@gmail.com'
                                className='w-full bg-gray-200 outline-none'
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Numero de telefono</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='number' placeholder='912341234'
                                className='w-full bg-gray-200 outline-none'
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Direccion</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='text' placeholder='Calle...'
                                className='w-full bg-gray-200 outline-none'
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Numero de la direccion</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='number' placeholder='123...'
                                className='w-full bg-gray-200 outline-none'
                                value={numeroDireccion}
                                onChange={(e) => setNumeroDireccion(e.target.value)} />
                        </div>
                    </div>
                    {/* Boton para guardar */}
                    <div className='w-full flex justify-center items-center p-2'>
                        <button type='submit'
                            className='bg-gray-200 rounded-md text-lg w-1/2 p-2 shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300 active:bg-green-400 active:text-white'>
                            Crear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NuevoTrabajador