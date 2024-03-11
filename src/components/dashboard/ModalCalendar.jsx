import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Importa el icono FaTimes de React Icons


const ModalCalendar = ({ toggleModal, evento, infoFecha, infoCostos }) => {
    // Verificar si infoFecha tiene un valor válido
    if (!infoFecha) {
        return null; // Retorna null si infoFecha es null o undefined
    }

    // Crear un objeto para almacenar la información de los trabajadores sin repetición
    const trabajadoresUnicos = {};

    // Iterar sobre la información de la fecha para agregarla al objeto de trabajadores únicos
    infoFecha.forEach((info) => {
        // Verificar si ya existe el trabajador en el objeto
        if (trabajadoresUnicos[`${info.nombre} ${info.apellido}`]) {
            // Si ya existe, agregar la información del tipo de viaje
            trabajadoresUnicos[`${info.nombre} ${info.apellido}`].tipoViaje.push(info.tipoViaje);
            // Verificar si el tipo de transporte no es el mismo que ya existe
            if (!trabajadoresUnicos[`${info.nombre} ${info.apellido}`].tipoTransporte.includes(info.tipoTransporte)) {
                trabajadoresUnicos[`${info.nombre} ${info.apellido}`].tipoTransporte.push(info.tipoTransporte);
            }
        } else {
            // Si no existe, crear una nueva entrada en el objeto
            trabajadoresUnicos[`${info.nombre} ${info.apellido}`] = {
                tipoViaje: [info.tipoViaje],
                tipoTransporte: [info.tipoTransporte]
            };
        }
    });



    return (
        <div className='fixed top-0 left-0 z-[100] bg-black/50 w-full h-full flex justify-center items-center'>
            <div className='z-[99] w-auto h-auto glass rounded-md p-4 animate-fade-in-right before:animate-fade-in-left'>
                <button onClick={toggleModal} className="absolute top-2 right-2 text-white">
                    <FaTimes /> {/* Icono de equis (X) */}
                </button>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <h1 className="text-white font-bold text-xl">{infoFecha[0].fecha}</h1>
                    <table className="text-white border-collapse border border-white mt-4">
                        <thead>
                            <tr>
                                <th className="border border-white px-4 py-2">Nombre Completo</th>
                                <th className="border border-white px-4 py-2">Tipo de Viaje</th>
                                <th className="border border-white px-4 py-2">Tipo de Transporte</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(trabajadoresUnicos).map((nombreCompleto, index) => (
                                <tr key={index} className='font-bold'>
                                    <td className="border border-white px-4 py-2 uppercase">{nombreCompleto}</td>
                                    <td className="border border-white px-4 py-2">{trabajadoresUnicos[nombreCompleto].tipoViaje.join(', ')}</td>
                                    <td className="border border-white px-4 py-2">{trabajadoresUnicos[nombreCompleto].tipoTransporte.join(', ')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white font-bold text-xl text-center pt-5'>
                            Costos
                        </h1>
                        <table className="text-white border-collapse border border-white mt-4">
                            <thead>
                                <tr>
                                    <th className="border border-white px-4 py-2">Valor por persona VAN (ida)</th>
                                    <th className="border border-white px-4 py-2">Valor por persona VAN (vuelta)</th>
                                    <th className="border border-white px-4 py-2">Valor por persona Taxi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center font-bold'>
                                    {infoCostos && infoCostos.van && (
                                        <>
                                            <td className="border border-white px-4 py-2">{infoCostos.valorPorPersonaVanIda} CLP</td>
                                            <td className="border border-white px-4 py-2">{infoCostos.valorPorPersonaVanVuelta} CLP</td>
                                        </>
                                    )}
                                    {infoCostos && infoCostos.taxi && (
                                        <>
                                            <td className="border border-white px-4 py-2">{infoCostos.valorPorPersonaTaxi} CLP</td>
                                        </>
                                    )}
                                    
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCalendar;
