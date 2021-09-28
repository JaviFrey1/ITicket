import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addEvent from "../../actions/addEvent";
import getCategories from "../../actions/getCategories";
import getSubCategories
 from "../../actions/getSubCategories";

import s from "./add.module.css";
import addEvent from "../../actions/addEvent";


//ESTE COMPONENTE ESTA 'MAL', SOLO RENDERICE A MODO CHECKLIST LAS CATEGORIAS Y SUBCATEGORIAS COMO PARA TENERLAS AHI, PERO EN VERDAD HABRIA QUE RENDERIZAR LAS 
//SUBCATEGORIAS EN FUNCION DE LA CATEGORIA SELECCIONADA. ADEMAS NO ESTOY TENIENDO EN CUENTA EN EL FORMULARIO Y EN LAS VALIDACIONES
//QUÉ DATOS SON OBLIGATORIOS Y CUALES NO

//CUAKKKKKKKKKKKKKKKKKK :=()

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

export default function AddRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categorias = useSelector((state) => state.categories);
  const subCategorias = useSelector((state)=> state.subCategories)

  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    name:'',
    date:'',
    artistName:'',
    dayTime:'',
    location:'',
    image:'',
    availableTickets:'',
    subCategories:[],
    categories:[]

  });

  function handleInputChange(e) {
    console.log('E.TARGET.VALUE', e.target.value)
    console.log('NAME', e.target.name)
  //   setState(prev=>{
  //     const newState = {
  //         ...prev,
  //         [e.target.name] : e.target.value
  //     }
  //     setErrors(validate(newState))
  //     return newState
  // })
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
      setErrors(validate(state))
  }
  function handleCheck(e) {
    if (e.target.checked) {
      setState({
        ...state,
        categories: [...state.categories, e.target.value],
      });
   
    }
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
      name:'',
      date:'',
      artistName:'',
      dayTime:'',
      location:'',
      image:'',
      availableTickets:'',
      subCategories:[],
      categories:[] });
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
            {categorias.map((category) => {
              return (
                <span>
                  <input
                    key={`${category.id}`}
                    type='checkbox'
                    value={`${category.name}`}
                    name={`${category.name}`}
                    onChange={(e) => handleCheck(e)}
                  />
                  {category.name}
                </span>
              );
            })}
              {subCategorias.map((subCategory) => {
              return (
                <span>
                  <input
                    key={`${subCategory.id}`}
                    type='checkbox'
                    value={`${subCategory.name}`}
                    name={`${subCategory.name}`}
                    onChange={(e) => handleCheck(e)}
                  />
                  {subCategory.name}
                </span>
              );
            })}
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
