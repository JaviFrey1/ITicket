/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import updateEvent from "../../actions/updateEvent";
import getEventDetail from "../../actions/getEventDetail";
import getCategories from "../../actions/getCategories";
import getSubCategories from "../../actions/getSubCategories";
import s from './UpdateEvent.module.css';


export default function UpdateEvent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const eventDetail = useSelector(state => state.eventDetail);
    const categorias = useSelector((state) => state.categories);
    const subCategorias = useSelector((state) => state.subCategories);


    const [div, setDiv] = useState("-");
    const [event, setEvent] = useState({
        name: eventDetail.name,
        date: eventDetail.date,
        time: eventDetail.time,
        artist: eventDetail.artist,
        availableTickets: eventDetail.availableTickets,
        price: eventDetail.price,
        place: eventDetail.place,
        address: eventDetail.address,
        location: eventDetail.location,
        province: eventDetail.province,
        image: eventDetail.image,
        category: "",
        subCategories: [],
        isImportant: eventDetail.isImportant,
    })



    function show(cat) {
        if (cat === "Category") {
            setDiv("-");
        }
        if (cat === "1") {
            setDiv("musica");
        }
        if (cat === "2") {
            setDiv("teatro");
        }
        if (cat === "3") {
            setDiv("otro")
        }

    }

    const { id } = useParams();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSubCategories());
        dispatch(getEventDetail(id))
    }, []);

    function handleInputChange(e) {
        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })
    }
    function handleSelect(e) {
        setEvent({
            ...event,
            category: e.target.value,
        });
    }
    function handleCheckSub(e) {
        if (e.target.checked) {
            setEvent({
                ...event,
                subCategories: [...event.subCategories, e.target.value],
            });
        }
        else if (!e.target.checked) {
            setEvent({
                ...event,
                subCategories: event.subCategories.filter(subCat => subCat !== e.target.value)
            })
        }
    }
    function handleNew(e) {
        setEvent({
            ...event,
            subCategories: [...event.subCategories, { genre: e.target.value, catId: 3 }],
        })
    }
    function handleNewSubMusica(e) {
        const capGenre = e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase()
        setEvent({
            ...event,
            subCategories: [...event.subCategories, { genre: capGenre, catId: 1 }],
        })
    }

    function handleNewSubTeatro(e) {
        const capGenre = e.target.value[0].toUpperCase() + e.target.value.slice(1).toLowerCase()
        setEvent({
            ...event,
            subCategories: [...event.subCategories, { genre: capGenre, catId: 2 }],
        })
    }


    function handleSubmit(e) {
        e.preventDefault();
      

        dispatch(updateEvent( id , event));
        // setEvent
        history.push(`/events/${id}`);
    }



    return (
        <div className={s.container}>
            <div className={s.data}>
                <div className={s.image}>
                    <img src={eventDetail.image} alt="Banner" width="100%" height="100%" className={s.im} />
                </div>
                <div className={s.name}>{eventDetail.name}</div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className={s.caja}>
                        <label>Nuevo Nombre: </label>
                        <input
                            className={s.inp}
                            autoComplete='off'
                            type='text'
                            name='name'
                            value={event.name}
                            placeholder={`Ej. ${eventDetail.name}`}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className={s.caja}>
                        <label>Nuevo Artista: </label>
                        <input
                            className={s.inp}
                            autoComplete='off'
                            type='text'
                            name='artist'
                            value={event.artist}
                            placeholder={`Ej. ${eventDetail.artist}`}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className={s.caja}>
                        <label>Nuevo Precio:</label>
                        <input
                            className={s.inp}
                            autoComplete='off'
                            type='number'
                            name='price'
                            min='100'
                            value={event.price}
                            placeholder={eventDetail.price}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className={s.caja}>
                        <label>Nuevo lugar:</label>
                        <input
                            className={s.inp}
                            autoComplete='off'
                            type='text'
                            name='place'
                            value={event.place}
                            placeholder={eventDetail.place}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className={s.caja}>
                        <label>Nueva direccion:</label>
                        <input
                            className={s.inp}
                            autoComplete='off'
                            type='text'
                            name='address'
                            value={event.address}
                            placeholder={eventDetail.address}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className={s.caja}>
                        <label>Nueva ciudad: </label>
                        <input

                            className={s.inp}
                            autoComplete='off'
                            type='text'
                            name='location'
                            value={event.location}
                            placeholder={eventDetail.location}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className={s.caja}>
                        <label>Nueva provincia: </label>
                        <select
                            className={s.sel}
                            name='province'
                            onChange={e => handleInputChange(e)}
                        >
                            <option >Provincias</option>
                            <option value="Buenos Aires">Buenos Aires</option>
                            <option value="CABA">Capital Federal</option>
                            <option value="Catamarca">Catamarca</option>
                            <option value="Chubut">Chubut</option>
                            <option value="Cordoba">Córdoba</option>
                            <option value="Corrientes">Corrientes</option>
                            <option value="Entre Rios">Entre Ríos</option>
                            <option value="Formosa">Formosa</option>
                            <option value="Jujuy">Jujuy</option>
                            <option value="La Pampa">La Pampa</option>
                            <option value="La Rioja">La Rioja</option>
                            <option value="Mendoza">Mendoza</option>
                            <option value="Misiones">Misiones</option>
                            <option value="Neuquen">Neuquén</option>
                            <option value="Rio Negro">Río Negro</option>
                            <option value="San Luis">San Luis</option>
                            <option value="Tierra del Fuego">Tierra del Fuego</option>
                            <option value="Tucuman">Tucumán</option>
                        </select>
                    </div>
                    <div className={s.caja}>
                        <label>Nueva Fecha: </label>
                        <input
                            className={s.inp}
                            autoComplete='off'
                            type='date'
                            name='date'
                            value={event.date}
                            placeholder='Escribe la nueva fecha'
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className={s.caja}>
                        <label>Nuevo Horario: </label>
                        <input
                            className={s.inp}
                            autoComplete="off"
                            type='time'
                            name='time'
                            value={event.time}
                            placeholder='Escribe el horario'
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <div className={s.caja}>
                        <label>Destacado: </label>
                        <select className={s.sel} name='isImportant' onChange={(e) => handleInputChange(e)}>
                            <option value=''>Destacado</option>
                            <option value='true'>SI</option>
                            <option value='false'>NO</option>
                        </select>
                    </div>
                    <div className={s.caja_check}>
                        <select
                            className={s.select}
                            onChange={(e) => {
                                handleSelect(e);
                                show(e.target.value);
                            }}
                        >
                            <option>Category</option>

                            {categorias.map((category) => {
                                return (
                                    <option value={category.id} key={category.id}>
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                        <div
                            id="musica"
                            className={div === "musica" ? s.mostrarDiv : s.noMostrarDiv}
                        >
                            {subCategorias
                                .filter((subCat) => subCat.catId === 1)
                                .map((subCat) => {
                                    return (
                                        <span className={s.checks} key={subCat.id}>
                                            <input
                                                key={subCat.id}
                                                type="checkbox"
                                                value={JSON.stringify(subCat)}
                                                name={`${subCat.genre}`}
                                                onChange={(e) => handleCheckSub(e)}
                                            />
                                            {subCat.genre}
                                        </span>
                                    );
                                })}
                            <span >
                                <label>Otro:</label>
                                <input
                                    type="text"
                                    name='otro'
                                    placeholder='Ej: Punk'
                                    onBlur={(e) => handleNewSubMusica(e)}
                                />
                            </span>
                        </div>
                        <div
                            id="teatro"
                            className={div === "teatro" ? s.mostrarDiv : s.noMostrarDiv}
                        >
                            {subCategorias
                                .filter((subCat) => subCat.catId === 2)
                                .map((subCat) => {
                                    return (
                                        <span className={s.checks} key={subCat.id}>
                                            <input
                                                key={`${subCat.id}`}
                                                type="checkbox"
                                                value={JSON.stringify(subCat)}
                                                name={`${subCat.genre}`}
                                                onChange={(e) => handleCheckSub(e)}
                                            />
                                            {subCat.genre}
                                        </span>
                                    );
                                })}
                            <span >
                                <label>Otro:</label>
                                <input
                                    type="text"
                                    name='otro'
                                    placeholder='Ej: Tragedia'
                                    onBlur={(e) => handleNewSubTeatro(e)}
                                />

                            </span>
                        </div>
                        <div
                            id="otro"
                            className={div === "otro" ? s.mostrarDiv : s.noMostrarDiv}
                        >
                            <input type='text' value={event.subCategories} name='subCategories' placeholder='Ej: Fotografia' onBlur={(e) => handleNew(e)} />
                        </div>
                    </div>
                    <div className={s.updeit}>
                        {
                            event.name &&
                                event.date &&
                                event.time &&
                                event.artist &&
                                event.price &&
                                event.place &&
                                event.address &&
                                event.location &&
                                event.province &&
                                event.isImportant ?
                                <button type='submit'>ACTUALIZAR EVENTO</button>
                                : null
                        }
                    </div>
                </form>
            </div>
        </div>
    )

}