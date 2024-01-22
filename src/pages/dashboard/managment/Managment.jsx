import React, { useState } from 'react';
import Button from '../../../components/ui/buttons/Button';
import ButtonNo from '../../../components/ui/buttons/ButtonNo';
import ButtonSave from '../../../components/ui/buttons/ButtonSave';
import Input from '../../../components/ui/buttons/Input';
import Select from '../../../components/ui/buttons/Select';

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
    };
    const regresarLista = () => {
        setSelectedEmployee(null);
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
                    <Button onClick={() => cambiarPagina(1)}>
                        Gestionar trabajadores
                    </Button>
                    <Button onClick={() => cambiarPagina(2)}>
                        Ver Gestion
                    </Button>
                </div>

                {currentPage === 1 && (
                    <div className='pt-2'>
                        <ul className='grid grid-cols-2 gap-4'>
                            {employees.map((employee) => (
                                <div className='flex flex-col'>
                                    <div key={employee.id} className='hover:bg-[#272829] p-4 rounded-xl flex items-center gap-2 justify-between'>
                                        <p className='text-white font-semibold'>{employee.name}</p>
                                        <Button onClick={() => gestionarTransporte(employee)}>
                                            Gestionar
                                        </Button>

                                    </div>
                                    {selectedEmployee && selectedEmployee.id === employee.id && (
                                        <div className='flex flex-col col-span-2 pt-5'>
                                            <div className='flex justify-between gap-4 p-4'>
                                                <Input type='date' value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                                                <Select value={selectedTransport} onChange={(e) => setSelectedTransport(e.target.value)}>
                                                    <option value=''>Seleccionar transporte</option>
                                                    <option value='VAN'>VAN</option>
                                                    <option value='TAXI'>TAXI</option>
                                                </Select>
                                                <ButtonSave /* onClick={guardarGestion}*/>
                                                    Guardar
                                                </ButtonSave>
                                                <ButtonNo onClick={regresarLista}>
                                                    Cancelar
                                                </ButtonNo>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                        </ul>
                    </div>
                )}

                {currentPage === 2 && (
                    <div className='pt-2'>
                        <div className='w-full bg-[#202020] border-white border p-2 rounded-t-xl border-b-0 flex justify-between items-center'>
                            <h2 className='text-white text-2xl p-2 w-full'>Filtrar por fecha</h2>
                            <div className='flex justify-center items-center gap-5'>
                                <Input type='date' />
                                <Button>Buscar</Button>
                            </div>


                        </div>
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
