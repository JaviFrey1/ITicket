import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addEvent from "../../actions/addEvent";
import getCategories from "../../actions/getCategories";
import getSubCategories
  from "../../actions/getSubCategories";

import s from "./add.module.css";
// import addEvent from "../../actions/addEvent";


//ESTE COMPONENTE ESTA 'MAL', SOLO RENDERICE A MODO CHECKLIST LAS CATEGORIAS Y SUBCATEGORIAS COMO PARA TENERLAS AHI, PERO EN VERDAD HABRIA QUE RENDERIZAR LAS 
//SUBCATEGORIAS EN FUNCION DE LA CATEGORIA SELECCIONADA. ADEMAS NO ESTOY TENIENDO EN CUENTA EN EL FORMULARIO Y EN LAS VALIDACIONES
//QUÉ DATOS SON OBLIGATORIOS Y CUALES NO

//CUAKKKKKKKKKKKKKKKKKK :=()
//ACTUALIZACIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNN!!
// en teoria deberia ser pesplegable el form segun la categoria que eliga el usuario, no estoy segura de si funciona porque aun no probe renderizar, 
//habria que esperar a que este el back
//por cierto, a back le llega un array de strings con las categorias y un array de strings con las subcategorias en el body junto con el resto de los datos
//Además aca la imagen es una url, proximamente podemos hacer que se carguen todo tipo de archivos desde la pc del admin
 //AUN FALTA controlar cuales datos son obligatorios y cuales no


export function validate(state) {
  let errors = {};
  if (!state.name) {
    errors.name = "Dinos el nombre del evento por favor";
  } else if (!state.date) {
    errors.date = "Necesitamos saber la fecha";
  } else if (!state.dayTime) {
    errors.dayTime = "Confirma el horario";
  } else if (
    !state.location
  ) {
    errors.location = "Dónde será el evento?";
  } else if (!state.image) {
    errors.image = "Estaría bueno que subas una imagen para promocionar el evento";
  } else if (!state.artistName) {
    errors.artistName = "quien es la estrella del evento?";
  }
  return errors;
}

export default function addEvent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categorias = useSelector((state) => state.categories);
  const subCategorias = useSelector((state) => state.subCategories)

  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    name: '',
    date: '',
    artistName: '',
    dayTime: '',
    location: '',
    image: '',
    availableTickets: '',
    subCategories: [],
    category: ''

  });
  // function show(id) {
  //   if (id === 1) {
  //     $("#musica").show();
  //     $("#teatro").hide();
  //   }

  //   if (id === 2) {
  //     $("#musica").hide();
  //     $("#teatro").show();

  //   }

  // }

  function handleInputChange(e) {
    console.log('E.TARGET.VALUE', e.target.value)
    console.log('NAME', e.target.name)

    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    setErrors(validate(state))
  }
  function handleSelect(e) {
    setState({
      ...state,
      category: e.target.value,
    });

  }
  function handleCheckSub(e) {
    if (e.target.checked) {
      setState({
        ...state,
        subCategories: [...state.subCategories, e.target.value],
      });

    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addEvent(state));
    alert("Has agregado un nuevo evento!");
    setState({
      name: '',
      date: '',
      artistName: '',
      dayTime: '',
      location: '',
      image: '',
      availableTickets: '',
      subCategories: [],
      category: ''
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${s.back}`}>
      <div className={`${s.container}`}>
        <h1>Agreguemos un evento!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={`${s.caja}`}>
            <label>Nombre:</label>
            <input
              type='text'
              name='name'
              value={state.name}
              placeholder='Nombre'

              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.name && <h5 className="error">{errors.name}</h5>}
          <div className={`${s.caja}`}>
            <label>Fecha:</label>
            <input
              type='text'
              name='date'
              value={state.date}
              placeholder='Fecha'

              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.date && <h5 className="error">{errors.date}</h5>}
          <div className={`${s.caja}`}>
            <label>Horario:</label>
            <input
              type='text'
              name='dayTime'
              value={state.dayTime}
              placeholder='Horario'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.dayTime && <h5 className="error">{errors.dayTime}</h5>}
          <div className={`${s.caja}`}>
            <label>Artista:</label>
            <input
              type='text'
              name='artistName'
              value={state.healthiness}
              placeholder='Artista'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.artistName && (
            <h5 className='error'>{errors.artistName}</h5>
          )}
          <div className={`${s.caja}`}>
            <label>Entradas disponibles:</label>
            <input
              type='text'
              name='availableTickets'
              value={state.availableTickets}
              placeholder='Cantidad de entradas disponibles'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.availableTickets && (
            <h5 className='error'>{errors.availableTickets}</h5>
          )}
          <div className={`${s.caja}`}>
            <label>Image:</label>
            <input
              type='url'
              name='image'
              value={state.image}
              placeholder='image url'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.image && <h5 className="error">{errors.image}</h5>}
          <div className={`${s.caja}`}>
            <label>Ubicación:</label>
            <input
              type='text'
              name='location'
              value={state.location}
              placeholder='Ubicación'
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.location && <h5 className="error">{errors.location}</h5>}
          <div className={`${s.caja}`}>
            <select
              className={`${s.select}`}
              onChange={(e) => {
                 handleSelect(e);
                //  show(e.target.value)
              }}
            >
              <option>Category</option>
              {categorias?.map((category) => {
                return (
                  <option value={`${category.id}`} key={`${category.id}`}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <div id="musica" style={{display: 'none'}}>
            {subCategorias.filter(subCat=>subCat.fk===1).map((subCat) => {
              return (
                <span>
                  <input
                    key={`${subCat.id}`}
                    type='checkbox'
                    value={`${subCat.name}`}
                    name={`${subCat.name}`}
                    onChange={(e) => handleCheckSub(e)}
                  />
                  {subCat.name}
                </span>
              );
            })}
             </div>
             <div id="teatro" style={{display: "none"}}>
            {subCategorias.filter(subCat=>subCat.fk===2).map((subCat) => {
              return (
                <span>
                  <input
                    key={`${subCat.id}`}
                    type='checkbox'
                    value={`${subCat.name}`}
                    name={`${subCat.name}`}
                    onChange={(e) => handleCheckSub(e)}
                  />
                  {subCat.name}
                </span>
              );
            })}
             </div>

          </div>
          <div className={`${s.btnCont}`}>
            {state.name && state.date ? (
              <button type="submit">CREAR EVENTO</button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

