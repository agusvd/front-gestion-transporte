import React, { useEffect, useState } from 'react'
import { BiMenu, BiNotification, BiSolidUser } from 'react-icons/bi';
import Nav from '../nav/Nav';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import axios from 'axios';


const Head = () => {

    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [tituloUbi, setTituloUbi] = useState('');

    useEffect(() => {
        switch (true) {
            case location.pathname === '/dashboard':
                setTituloUbi('Dashboard');
                break;
            case location.pathname === '/dashboard/calendario':
                setTituloUbi('Calendario');
                break;
            case location.pathname === '/dashboard/lista':
                setTituloUbi('Lista');
                break;
            case location.pathname === '/dashboard/gestion':
                setTituloUbi('Gestión');
                break;
            case location.pathname === '/dashboard/nuevo-trabajador':
                setTituloUbi('Nuevo trabajador');
                break;
            case location.pathname === '/dashboard/gestiones':
                setTituloUbi('Gestiones');
                break;
            case location.pathname.startsWith('/dashboard/gestion-traslado'):
                const id = location.pathname.split('/').pop();
                setTituloUbi(`Creando traslado para trabajador (ID: ${id})`);
                break;
            case location.pathname.startsWith('/dashboard/editar-trabajador/'):
                setTituloUbi(`Editar trabajador`);
                break;
            default:
                setTituloUbi('404');
                break;
        }
    }, [location.pathname]);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

        // Estado para almacenar la información de autenticación del usuario
        const [auth, setAuth] = useState(false);
        const [usuarioId, setUsuarioId] = useState('');
        const [isAdmin, setIsAdmin] = useState(false);
    
        useEffect(() => {
            // Lógica para verificar la autenticación del usuario
            const verificarAutenticacion = async () => {
                try {
                    // Hacer una solicitud al backend para verificar la autenticación
                    const res = await axios.get('http://localhost:8000/api/dashboard');
                    console.log(res.data)
                    if (res.data.Status === "Perfecto") {
                        // Si el usuario está autenticado, actualizar el estado de autenticación
                        setAuth(true);
                        setUsuarioId(res.data.id);
                        setIsAdmin(res.data.role);
                    } else {
                        // Si el usuario no está autenticado, actualizar el estado de autenticación
                        setAuth(false);
                    }
                } catch (error) {
                    // Manejar cualquier error de la solicitud
                    console.error('Error al verificar la autenticación:', error);
                }
            };
    
            // Llamar a la función para verificar la autenticación al montar el componente
            verificarAutenticacion();
        }, []);
    // logout usuario
    const handleDelete = () => {
        axios
            .get('http://localhost:8000/logout')
            .then(res => {
                setAuth(false);
                window.location.reload(); // Recarga la página después del logout
            })
            .catch(err => console.log(err));
    };


    return (
        <div className='h-[100px]'>
            <div className='flex justify-between items-center w-full h-full pl-10 pr-10 glass'>
                <div className='flex items-center gap-4 h-full w-full'>
                    <button onClick={toggleMenu}
                        className='hover:scale-110 transition-all hover:rotate-180 duration-300'
                    >
                        <BiMenu size={35} className='text-white' />
                    </button>
                    <h1 className='text-2xl font-bold text-white'>
                        {tituloUbi}
                    </h1>
                </div>
                <div className='flex justify-end items-center gap-4 h-full w-full'>
                    <button className='border-2 border-gray-500 hover:bg-black rounded-lg p-2 transition-all duration-300 text-white'
                    >
                        <BiNotification size={30} />
                    </button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" border-2 border-gray-500 hover:bg-black rounded-lg p-2 transition-all duration-300 text-white m-1">
                            <BiSolidUser size={30} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-black/50 w-52 text-white rounded-xl">
                            {auth ? <>
                                <li><button>Cerrar sesion</button></li>
                            </>
                            :
                                <>
                                    <li><p>Error</p></li>
                                </>}
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
            {menuOpen && <Nav toggleMenu={toggleMenu} />}
        </div>
    )
}

export default Head