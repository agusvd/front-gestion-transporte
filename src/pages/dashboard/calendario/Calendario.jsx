import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Head from '../../../components/dashboard/Head';
import axios from 'axios';
import ModalCalendar from '../../../components/dashboard/ModalCalendar';

const Calendario = () => {
    const [eventos, setEventos] = useState([]);
    const [modalAbierto, setModalAbierto] = useState(false);
    const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
    const [infoFecha, setInfoFecha] = useState(null);
    const [infoCostos, setInfoCostos] = useState(null); // Nuevo estado para almacenar la información de costos


    useEffect(() => {
        const obtenerEventos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/costos-traslado');
                const eventosTransformados = response.data.map(evento => ({
                    title: 'Traslado',
                    start: evento.fecha,
                    end: evento.fecha,
                    id: evento.id,
                }));
                setEventos(eventosTransformados);
            } catch (error) {
                console.error('Error al obtener los eventos de traslado:', error);
            }
        };
        obtenerEventos();
    }, []);

    const localizer = momentLocalizer(moment);

    const toggleModal = (evento) => {
        setModalAbierto(!modalAbierto);
        setEventoSeleccionado(evento);
        if (!modalAbierto) {
            const fechaString = moment(evento.start).format('YYYY-MM-DD');
            obtenerInformacionEvento(fechaString);
            console.log(evento.id)
            obtenerInformacionCostos(evento.id)
        } else {
            setInfoFecha(null); // Reiniciar infoFecha al cerrar el modal
            setInfoCostos(null) // Reiniciar infoCostos al cerrar el modal
        }
    };

    // obtener informacion del los costos 
    const obtenerInformacionCostos = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/costos-traslado/${id}`);
            setInfoCostos(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error al obtener la información de costos:', error);
        }
    };

    // obtener informacion del evento seleccionado
    const obtenerInformacionEvento = async (fecha) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/gestion/${fecha}`);
            setInfoFecha(response.data);
        } catch (error) {
            console.error('Error al obtener el evento seleccionado:', error);
        }
    };

    return (
        <div className='h-screen font-secondar wallpaper'>
            <Head />
            <div className='flex w-full glass'>
                <div className='text-white p-2 h-full rounded-lg w-full'>
                    <Calendar
                        className='text-white glass p-5'
                        localizer={localizer}
                        events={eventos}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectEvent={toggleModal}
                        style={{ height: 500 }}
                    />
                </div>
            </div>
            {modalAbierto && (
                <ModalCalendar evento={eventoSeleccionado} toggleModal={toggleModal} infoFecha={infoFecha} infoCostos={infoCostos} />
            )}
        </div>
    );
};
export default Calendario;
