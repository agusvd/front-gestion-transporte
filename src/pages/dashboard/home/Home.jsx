import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../../../components/dashboard/Head';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const Home = () => {
    const [totalGestiones, setTotalGestiones] = useState(0);
    const [totalTrabajadores, setTotalTrabajadores] = useState(0);
    const [totalCostosTraslado, setTotalCostosTraslado] = useState(0);
    const [latestGestiones, setLatestGestiones] = useState([]);
    const [gestionesPorMes, setGestionesPorMes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [gestionesResponse, trabajadoresResponse, costosTrasladoResponse] = await Promise.all([
                    axios.get('http://localhost:3000/api/gestion'),
                    axios.get('http://localhost:3000/api/trabajadores'),
                    axios.get('http://localhost:3000/api/costos-traslado')
                ]);

                setTotalGestiones(gestionesResponse.data.length);
                setTotalTrabajadores(trabajadoresResponse.data.length);
                setTotalCostosTraslado(costosTrasladoResponse.data.length);

                // Obtener las últimas gestiones
                const latestGestionesResponse = await axios.get('http://localhost:3000/api/gestion?_limit=5&_sort=fecha&_order=desc');
                setLatestGestiones(latestGestionesResponse.data);

                // Obtener el número de gestiones por mes
                const gestionesPorMesResponse = await axios.get('http://localhost:3000/api/gestiones-por-mes');
                setGestionesPorMes(gestionesPorMesResponse.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    // Array de nombres de meses
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const gestionesPorMesData = {
        labels: gestionesPorMes.map(item => monthNames[item.mes - 1]), // Mapear el número de mes al nombre correspondiente
        datasets: [
            {
                label: 'Gestiones por Mes',
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#FFD700',
                    '#32CD32',
                    '#00BFFF',
                    '#8A2BE2',
                    '#FF4500',
                    '#20B2AA',
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#FFD700',
                    '#32CD32',
                    '#00BFFF',
                    '#8A2BE2',
                    '#FF4500',
                    '#20B2AA',
                ],
                data: gestionesPorMes.map(item => item.total)
            }
        ]
    };

    return (
        <div className='h-screen font-secondary flex flex-col gap-3 overflow-auto w-full wallpaper'>
            <Head />
            <div className="grid grid-cols-3 gap-6 p-8">
                {/* Componente de estadísticas */}
                <div className="glass text-white p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
                    {/* Contenido del componente de estadísticas */}
                    <p>Total de gestiones: {totalGestiones}</p>
                    <p>Total de trabajadores: {totalTrabajadores}</p>
                    <p>Total de costos de traslado: {totalCostosTraslado}</p>
                </div>

                {/* Gráfico de gestiones por mes */}
                <div className="glass text-white p-6 rounded-xl ">
                    <h2 className="text-xl font-semibold mb-4">Gestiones por Mes</h2>
                    <Doughnut
                        data={gestionesPorMesData}
                    />
                </div>

                {/* Lista de las últimas gestiones */}
                <div className="glass text-white p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">Últimas gestiones</h2>
                    <ul>
                        {latestGestiones.map(gestion => (
                            <li key={gestion.id}>
                                {gestion.fecha}: {gestion.tipoTransporte} - {gestion.tipoViaje}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
