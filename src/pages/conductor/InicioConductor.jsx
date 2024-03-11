import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InicioConductor = () => {
    const [trabajadores, setTrabajadores] = useState([]);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

    // Función para obtener los trabajadores que viajan en la fecha seleccionada
    const obtenerTrabajadores = (fecha) => {
        axios.get(`http://localhost:3000/api/gestion/${fecha}`)
            .then(res => {
                setTrabajadores(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        // Obtener trabajadores al cargar el componente
        obtenerTrabajadores(fechaSeleccionada.toISOString().split('T')[0]);
    }, [fechaSeleccionada]);

    const handleRegistroEstado = (trabajadorId, estado) => {
        // Aquí puedes enviar una solicitud para registrar el estado del trabajador
        console.log(`Registrando estado ${estado} para el trabajador ${trabajadorId}`);
    };

    return (
        <div className='bg-black text-white min-h-screen p-4 sm:p-8'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-4'>Registro de Pasajeros</h1>

            {/* Selector de fecha */}
            <div className="mb-4">
                <h2 className='text-lg sm:text-xl font-semibold mb-2'>Selecciona la fecha:</h2>
                <DatePicker
                    selected={fechaSeleccionada}
                    onChange={date => setFechaSeleccionada(date)}
                    dateFormat="yyyy-MM-dd"
                    className='p-2 rounded bg-gray-200 text-black w-full sm:w-1/2'
                />
            </div>

            {/* Mostrar trabajadores */}
            <div>
                <h2 className='text-lg sm:text-xl font-semibold mb-2'>Trabajadores</h2>
                {/* Sección de viaje de ida */}
                <div>
                    <h3 className='text-lg sm:text-xl font-semibold mb-2'>Viaje de Ida</h3>
                    <div>
                        {trabajadores.map(trabajador => (
                            trabajador.tipoViaje === 'IDA' && (
                                <div key={trabajador.id} className='bg-gray-200 p-4 rounded mb-4 text-black'>
                                    <h3 className='text-md sm:text-lg font-semibold'>{`${trabajador.nombre} ${trabajador.apellido}`}</h3>
                                    <p className='text-xs sm:text-sm'>{`Correo: ${trabajador.correo}`}</p>
                                    <p className='text-xs sm:text-sm'>{`Teléfono: ${trabajador.telefono}`}</p>
                                    <div className='mt-4'>
                                        <button onClick={() => handleRegistroEstado(trabajador.id, 'subio_van_ida')} className='bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mb-2 sm:mb-0'>Subió a la VAN (Ida)</button>
                                        <button onClick={() => handleRegistroEstado(trabajador.id, 'llego_trabajo')} className='bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded'>Llegó al Trabajo</button>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>

                {/* Sección de viaje de vuelta */}
                <div>
                    <h3 className='text-lg sm:text-xl font-semibold mb-2'>Viaje de Vuelta</h3>
                    <div>
                        {trabajadores.map(trabajador => (
                            trabajador.tipoViaje === 'VUELTA' && (
                                <div key={trabajador.id} className='bg-gray-200 p-4 rounded mb-4 text-black'>
                                    <h3 className='text-md sm:text-lg font-semibold'>{`${trabajador.nombre} ${trabajador.apellido}`}</h3>
                                    <p className='text-xs sm:text-sm'>{`Correo: ${trabajador.correo}`}</p>
                                    <p className='text-xs sm:text-sm'>{`Teléfono: ${trabajador.telefono}`}</p>
                                    <div className='mt-4'>
                                        <button onClick={() => handleRegistroEstado(trabajador.id, 'subio_van_vuelta')} className='bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mb-2 sm:mb-0'>Subió a la VAN (Vuelta)</button>
                                        <button onClick={() => handleRegistroEstado(trabajador.id, 'llego_casa')} className='bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded'>Llegó a Casa</button>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InicioConductor;
