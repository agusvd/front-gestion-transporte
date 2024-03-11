import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Head from '../../../components/dashboard/Head';
import { BiArrowBack } from 'react-icons/bi';

const EditarTrabajador = () => {
    const { id } = useParams(); // Obtener el ID del trabajador de los parámetros de la URL
    const navigate = useNavigate(); // Utiliza useNavigate para obtener la función de navegación

    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [numeroDireccion, setNumeroDireccion] = useState('');
    // Agrega más estados para los demás campos del trabajador que deseas editar

    useEffect(() => {
        // Obtener los detalles del trabajador por su ID
        const obtenerTrabajador = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/trabajadores/${id}`);
                setNombre(response.data.nombre);
                setApellido(response.data.apellido);
                setCorreo(response.data.correo);
                setTelefono(response.data.telefono);
                setDireccion(response.data.direccion);
                setNumeroDireccion(response.data.numeroDireccion);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerTrabajador();
    }, [id]);

    // Función para manejar el envío del formulario de edición
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Realizar la solicitud para actualizar el trabajador con los nuevos datos
            await axios.put(`http://localhost:3000/api/trabajadores/${id}`, {
                nombre,
                apellido,
                correo,
                telefono,
                direccion,
                numeroDireccion,
            });
            // Redirigir a la página de gestión de trabajadores
            navigate('/dashboard/gestion'); // Utiliza navigate para redirigir
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='font-secondary bg-black'>
            <Head />
            <div className='h-full w-full'>
                <form onSubmit={handleSubmit}
                    className='flex flex-col gap-2 items-center bg-[#171819] h-full rounded-lg'>
                    <div className='flex justify-center items-center pt-5'>
                        <Link to='/dashboard/gestion' className='p-2 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300'>
                            <BiArrowBack />
                        </Link>
                        <h2 className='text-2xl font-bold p-2 text-white'>Volver</h2>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Nombre</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='text'
                                value={nombre}
                                className='w-full bg-gray-200 outline-none'
                                onChange={(e) => setNombre(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Apellido</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='text'
                                className='w-full bg-gray-200 outline-none'
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Correo</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='email'
                                className='w-full bg-gray-200 outline-none'
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Numero de telefono</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='number'
                                className='w-full bg-gray-200 outline-none'
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Direccion</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='text'
                                className='w-full bg-gray-200 outline-none'
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col p-2 w-1/2'>
                        <label className='text-lg text-white'>Numero de la direccion</label>
                        <div className='p-2 text-lg bg-gray-200 rounded-md shadow-md'>
                            <input required type='number'
                                className='w-full bg-gray-200 outline-none'
                                value={numeroDireccion}
                                onChange={(e) => setNumeroDireccion(e.target.value)} />
                        </div>
                    </div>
                    {/* Boton para guardar */}
                    <div className='w-full flex justify-center items-center p-2'>
                        <button type='submit'
                            className='bg-gray-200 rounded-md text-lg w-1/2 p-2 shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300 active:bg-green-400 active:text-white'>
                            Guardar cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditarTrabajador;
