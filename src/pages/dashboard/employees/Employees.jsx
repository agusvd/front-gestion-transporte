import React from 'react'
import Button from '../../../components/ui/buttons/Button'

const Employees = () => {
    const employees = [
        {
            id: 1,
            name: 'Javiera',
        },
        {
            id: 2,
            name: 'Luis Avila',
        },
        {
            id: 3,
            name: 'Fredy Caiubul',
        },
        {
            id: 4,
            name: 'Rodrigo Santana',
        },
        {
            id: 5,
            name: 'Jessica Diaz',
        },
        {
            id: 6,
            name: 'Vania Navarro',
        },
        {
            id: 7,
            name: 'Marcelo Rojas'
        }
    ]
    return (
        <div className='flex bg-[#171717] w-full m-2 rounded-xl'>
            <div className='m-2 w-full'>
                <div className='border-b-2 border-[#272829] p-2'>
                    <h2 className='text-3xl text-white font-bold'>Trabajadores</h2>
                </div>
                <div className='flex flex-col gap-2 p-2 w-full'>
                    {
                        employees.map((employee) => (
                            <div key={employee.id} className='flex items-center gap-2 hover:bg-[#272829] p-2 cursor-pointer rounded-xl'>
                                <div className='w-[40px] h-[40px] rounded-full bg-gray-400'></div>
                                <div className='flex justify-between items-center w-full'>
                                    <h2 className='text-white'>{employee.name}</h2>
                                    <Button>Opciones</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Employees