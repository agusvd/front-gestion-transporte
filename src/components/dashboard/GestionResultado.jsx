import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiTrash } from 'react-icons/bi';

const GestionResultado = () => {
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const obtenerResultados = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/costos-traslado');
                setResultados(response.data);
            } catch (error) {
                console.error('Error al obtener los resultados de los traslados:', error);
            }
        };
        obtenerResultados();
    }, []);

    return (
        <div className="font-secondary ">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold text-white mb-6">Información de los traslados</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {resultados.map((resultado, index) => (
                        <div key={index} className="glass text-white rounded-md shadow-md p-4">
                            <div className='flex justify-between items-center'>
                                <h3 className="text-2xl font-bold mb-2">Fecha: {resultado.fecha}</h3>
                                <button onClick={() => eliminarTrabajador(trabajador.id)} className='p-3 text-sm text-white whitespace-nowrap hover:text-red-500 transition-all hover:scale-110'>
                                    <BiTrash size={25} />
                                </button>
                            </div>
                            {resultado.van && (
                                <div className="mb-2">
                                    <h4 className="font-bold">VAN</h4>
                                    <p>Total personas (ida): {resultado.totalPersonasVanIda}</p>
                                    <p>Total personas (vuelta): {resultado.totalPersonasVanVuelta}</p>
                                    <p>Valor por persona (ida): {resultado.valorPorPersonaVanIda} CLP</p>
                                    <p>Valor por persona (vuelta): {resultado.valorPorPersonaVanVuelta} CLP</p>
                                </div>
                            )}
                            {resultado.taxi && (
                                <div className="mb-2">
                                    <h4 className="font-bold">TAXI</h4>
                                    <p>Total personas (ida) {resultado.totalPersonasTaxiIda}</p>
                                    <p>Total personas (vuelta) {resultado.totalPersonasTaxiVuelta}</p>
                                    <p>Valor por persona : {resultado.valorPorPersonaTaxi} CLP</p>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GestionResultado;