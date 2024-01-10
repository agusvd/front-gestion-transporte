import React from 'react'
import NavMobileTransporte from '../nav/NavMobileTransporte'
import InicioTransporte from '../transporte/InicioTransporte'

const PageTransporte = () => {
    const trabajadores = [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Perez',
            rut: '12345678-9',
            direccion: 'Calle 1',
            telefono: '12345678',
            correo: 'juan@gmail.com'
        },
        {
            id: 2,
            nombre: 'Pedro',
            apellido: 'Perez',
            rut: '12345678-9',
            direccion: 'Calle 1',
            telefono: '12345678',
            correo: 'pedro@gmail.com'
        },
        {
            id: 3,
            nombre: 'Maria',
            apellido: 'Perez',
            rut: '12345678-9',
            direccion: 'Calle 1',
            telefono: '12345678',
            correo: 'maria@gmail.com'
        },
        {
            id: 4,
            nombre: 'Jose',
            apellido: 'Perez',
            rut: '12345678-9',
            direccion: 'Calle 1',
            telefono: '12345678',
            correo: 'jose@gmail.com'
        },
        {
            id: 5,
            nombre: 'Sofia',
            apellido: 'Perez',
            rut: '12345678-9',
            direccion: 'Calle 1',
            telefono: '12345678',
            correo: 'sofia@gmail.com'
        }
    ]

    return (

        <div className='h-screen w-full bg-white'>
            <InicioTransporte />
            <NavMobileTransporte />
        </div>
    )
}

export default PageTransporte