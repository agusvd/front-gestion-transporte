import React, { useState } from 'react';

const Management = () => {
    const employees = [
        { id: 1, name: 'Javiera' },
        { id: 2, name: 'Luis Avila' },
        { id: 3, name: 'Fredy Caiubul' },
        { id: 4, name: 'Rodrigo Santana' },
        { id: 5, name: 'Jessica Diaz' },
        { id: 6, name: 'Vania Navarro' },
        { id: 7, name: 'Marcelo Rojas' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTransport, setSelectedTransport] = useState('');

    const cambiarPagina = (page) => {
        setCurrentPage(page);
        setSelectedEmployee(null);
    };
    const regresarLista = () => {
        setSelectedEmployee(null);
    };
    const verTablas = () => {
        cambiarPagina(2);
    };

    const gestionarTransporte = (employee) => {
        setSelectedEmployee(employee);
    };


    return (
        <div className='flex bg-[#171717] w-full m-2 rounded-xl font-primary h-screen overflow-auto'>
            <div className='m-2 w-full'>
                <div className='border-b-2 border-[#272829] p-2'>
                    <h2 className='text-3xl text-white font-bold'>Gestión de Transporte</h2>
                </div>
                <div className='pt-2 flex gap-2 border-b-2 border-[#272829] p-2'>
                    <button
                        className='bg-black hover:bg-[#272829] rounded-md p-2 text-center text-white'
                        onClick={() => cambiarPagina(1)}
                    >
                        Gestionar trabajadores
                    </button>
                    <button
                        className='bg-black hover:bg-[#272829] rounded-md p-2 text-center text-white'
                        onClick={verTablas}
                    >
                        Ver tablas
                    </button>
                </div>

                {currentPage === 1 && (
                    <div className='pt-2'>
                        <ul className='flex flex-col gap-4'>
                            {employees.map((employee) => (
                                <li key={employee.id} className='hover:bg-[#272829] p-4 rounded-md flex items-center gap-2 '>
                                    <p className='text-white font-semibold'>{employee.name}</p>
                                    <button className='bg-blue-500 text-white rounded-md p-2' onClick={() => gestionarTransporte(employee)}>
                                        Gestionar
                                    </button>
                                    {selectedEmployee && selectedEmployee.id === employee.id && (
                                        <div className='flex flex-col'>
                                            <div className='flex space-x-2'>
                                                <input
                                                    type='date'
                                                    value={selectedDate}
                                                    onChange={(e) => setSelectedDate(e.target.value)}
                                                    className='p-2 border border-gray-600 rounded-md bg-black text-white'
                                                />
                                                <select
                                                    value={selectedTransport}
                                                    onChange={(e) => setSelectedTransport(e.target.value)}
                                                    className='rounded-md text-white bg-black border-gray-600 border'
                                                >
                                                    <option value=''>Seleccionar transporte</option>
                                                    <option value='VAN'>VAN</option>
                                                    <option value='TAXI'>TAXI</option>
                                                </select>
                                                <button
                                                    //onClick={guardarGestion}
                                                    className='p-2 bg-blue-500 text-white rounded-md'
                                                >
                                                    Guardar
                                                </button>
                                                <button
                                                    onClick={regresarLista}
                                                    className='p-2 bg-red-500 text-white rounded-md'
                                                >
                                                    Cancelar
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {currentPage === 2 && (
                    <div>
                        <h3 className='text-xl text-white font-bold mb-2'>
                            Ver Tablas
                        </h3>
                        <table className='table-auto border border-white w-full'>
                            <thead>
                                <tr>
                                    <th className='border border-white p-2'>Fecha</th>
                                    <th className='border border-white p-2'>Trabajador</th>
                                    <th className='border border-white p-2'>Transporte</th>
                                    <th className='border border-white p-2'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Management;
