import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GestionCalcular = () => {
    const [gestiones, setGestiones] = useState([]);
    const [fechasUnicas, setFechasUnicas] = useState([]);
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        const obtenerGestiones = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/gestion');
                setGestiones(response.data);
                // Obtener fechas únicas
                const fechas = new Set(response.data.map((gestion) => gestion.fecha));
                setFechasUnicas(Array.from(fechas));
            } catch (error) {
                console.error(error);
            }
        };
        obtenerGestiones();
    }, []);

    const handleCalcularCostos = async () => {
        try {
            console.log(fecha)
            await axios.post('http://localhost:3000/api/calcular-costos', { fecha });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex justify-center items-center pt-5 w-full h-full'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleCalcularCostos();
                }}
                className='flex flex-col gap-2 items-center w-[600px] glass rounded-xl pt-10 pb-10'
            >
                <div className='flex flex-col p-2 w-full md:w-1/2'>
                    <label className='text-lg  text-white'>Selecciona la fecha</label>
                    <div className='p-2 text-lg bg-black/50 rounded-md shadow-md'>
                        <select onChange={(e) => setFecha(e.target.value)} className='w-full bg-transparent'>
                            <option value=''>Selecciona una fecha</option>
                            {fechasUnicas.map((fechaUnica, index) => (
                                <option key={index} value={fechaUnica}>
                                    {fechaUnica}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button
                        type='submit'
                        className='bg-gray-200 rounded-md text-lg w-full p-2 shadow-md hover:bg-gray-300 transition-all ease-in-out duration-300 active:bg-green-400 active:text-white'
                    >
                    Calcular costos
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GestionCalcular;
