import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/logo_colour.svg';
import { toast, Toaster } from 'react-hot-toast';
import jwtDecode from "jwt-decode";

const PageLogin = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3000/api/login', values)
            .then((res) => {
                if (res.data.Status === 'Perfecto') {
                    // Obtener el token del response
                    const token = res.data.token;
                    // Decodificar el token para obtener la información
                    const decodedToken = jwtDecode(token);
                    // Verificar si el usuario es administrador
                    // Verificar el rol del usuario
                    if (decodedToken.role === 'admin') {
                        toast.success('Ingresaste correctamente como administrador');
                        setTimeout(() => {
                            navigate('/dashboard');
                        }, 1000);
                    } else if (decodedToken.role === 'conductor') {
                        toast.success('Ingresaste correctamente como conductor');
                        setTimeout(() => {
                            navigate('/conductor/inicio');
                        }, 1000);
                    } else if (decodedToken.role === 'trabajador') {
                        toast.success('Ingresaste correctamente como trabajador');
                        setTimeout(() => {
                            navigate('/trabajador/inicio');
                        }, 1000);
                    } else {
                        toast.error('No tienes permisos para ingresar');
                    }
                } else {
                    toast.error(res.data.error, {
                        className: 'bg-purple-600 text-black',
                    });
                }
            })
            .catch((err) => console.log(err));
    };


    return (
        <div className='h-screen w-full bg-white font-secondary'>
            <Toaster />
            <div className='flex justify-center items-center h-full'>
                <div className='shadow-xl w-[350px]'>
                    <div className='flex flex-col'>
                        <div className='p-10 flex justify-center items-center'>
                            <img src={logo} className='w-full h-full' alt="Logo" />
                        </div>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-center bg-gray-100'>
                            <div className='p-2'>
                                <input
                                    type="text"
                                    onChange={(e) => setValues({ ...values, username: e.target.value })}
                                    className='w-full bg-white border-2 border-gray-100 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 text-black text-center p-2'
                                    placeholder='Usuario'
                                />
                            </div>
                            <div className='p-2'>
                                <input
                                    type="password"
                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                    className='w-full bg-white border-2 border-gray-100 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 text-black text-center p-2'
                                    placeholder='Contraseña'
                                />
                            </div>
                            <div className='p-2'>
                                <button
                                    type='submit'
                                    className='text-center bg-sky-500 text-white p-2 rounded-lg w-full active:bg-green-500 duration-300 ease-in-out transition-all hover:bg-sky-400'
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                        <div className='bg-gray-100 pb-2'>
                            <p className='text-center text-gray-400 text-xs'>
                                ¿Se te olvidó la contraseña?
                                <Link to="#" className='text-sky-500'> Pulsa Aquí.</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageLogin;
