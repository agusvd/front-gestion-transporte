import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_colour.svg';

const PageLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usuarios = [
        {
            id: 1,
            username: 'admin',
            password: '123',
            role: 'admin'
        },
        {
            id: 2,
            username: 'conductor',
            password: '123',
            role: 'conductor'
        },
        {
            id: 3,
            username: 'trabajador',
            password: '123',
            role: 'trabajador'
        }
    ];

    const handleLogin = () => {
        const user = usuarios.find(user => user.username === username && user.password === password);
        if (user) {
            const rolePath = getRolePath(user.role);
            if (rolePath) {
                window.location.href = rolePath;
            }
        } else {
            console.log('Credenciales invalidas');
        }
    };

    const getRolePath = (role) => {
        switch (role) {
            case 'admin':
                return '/dashboard';
            case 'conductor':
                return '/transporte';
            case 'trabajador':
                return '/trabajador';
            default:
                return null;
        }
    };

    return (
        <div className='h-screen w-full bg-white font-primary'>
            <div className='flex justify-center items-center h-full'>
                <div className='shadow-xl w-[350px]'>
                    <div className='flex flex-col'>
                        <div className='p-10 flex justify-center items-center'>
                            <img src={logo} className='w-full h-full' />
                        </div>
                        <form className='flex flex-col justify-center bg-gray-100'>
                            <div className='p-2'>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='w-full bg-white border-2 border-gray-100 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 text-black text-center p-2'
                                    placeholder='Usuario'
                                />
                            </div>
                            <div className='p-2'>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full bg-white border-2 border-gray-100 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 text-black text-center p-2'
                                    placeholder='Contraseña'
                                />
                            </div>
                            <div className='p-2'>
                                <button
                                    type='button'
                                    onClick={handleLogin}
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
