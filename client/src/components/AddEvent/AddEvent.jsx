import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addEvent from "../../actions/addEvent";
import getCategories from "../../actions/getCategories";
import getSubCategories from "../../actions/getSubCategories";

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
  } else if (!state.location) {
    errors.location = "Dónde será el evento?";
  } else if (!state.image) {
    errors.image =
      "Estaría bueno que subas una imagen para promocionar el evento";
  } else if (!state.artistName) {
    errors.artistName = "quien es la estrella del evento?";
  }
  return errors;
}

export default function AddEvent() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const categorias = useSelector((state) => state.categories);
  const categorias = [
    { id: 1, name: "Musica" },
    { id: 2, name: "Teatro" },
  ];
  // const subCategorias = useSelector((state) => state.subCategories);
  const subCategorias = [
    { fk: 1, name: "Pop" },
    { fk: 1, name: "Cumbia" },
    { fk: 1, name: "Rock" },
    { fk: 1, name: "Trap" },
    { fk: 2, name: "Comedia" },
    { fk: 2, name: "Alternativo" },
    { fk: 2, name: "Drama" },
    { fk: 2, name: "Terror" },
  ];

  const [errors, setErrors] = useState({});
  const [div, setDiv] = useState("-");
  const [state, setState] = useState({
    name: "",
    date: "",
    artistName: "",
    dayTime: "",
    location: "",
    image: "",
    availableTickets: "",
    subCategories: [],
    category: "",
  });

  function cargarImg(e) {
    console.log(e);
    const reader = new FileReader();

    reader.onload = function () {
      let imgDiv = document.querySelector("#cajaImg");
      imgDiv.src = reader.result;
    };
    reader.readAsDataURL(e);
  }

  function show(cat) {
    // console.log(div);
    console.log(cat);
    if (cat === "Category") {
      setDiv("-");
      // console.log(div);
    }

    if (cat === "1") {
      setDiv("musica");
      // console.log(div);
    }

    if (cat === "2") {
      setDiv("teatro");
    }
  }

  function handleInputChange(e) {
    console.log("E.TARGET.VALUE", e.target.value);
    console.log("NAME", e.target.name);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setErrors(validate(state));
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
      name: "",
      date: "",
      artistName: "",
      dayTime: "",
      location: "",
      image: "",
      availableTickets: "",
      subCategories: [],
      category: "",
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.back}>
      <div className={`${s.container}`}>
        <h1>Agreguemos un evento!</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={`${s.caja}`}>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={state.name}
              placeholder="Nombre"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.name && <h5 className="error">{errors.name}</h5>}
          <div className={`${s.caja}`}>
            <label>Fecha:</label>
            <input
              type="text"
              name="date"
              value={state.date}
              placeholder="Fecha"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.date && <h5 className="error">{errors.date}</h5>}
          <div className={`${s.caja}`}>
            <label>Horario:</label>
            <input
              type="text"
              name="dayTime"
              value={state.dayTime}
              placeholder="Horario"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.dayTime && <h5 className="error">{errors.dayTime}</h5>}
          <div className={`${s.caja}`}>
            <label>Artista:</label>
            <input
              type="text"
              name="artistName"
              value={state.healthiness}
              placeholder="Artista"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.artistName && <h5 className="error">{errors.artistName}</h5>}
          <div className={`${s.caja}`}>
            <label>Entradas disponibles:</label>
            <input
              type="text"
              name="availableTickets"
              value={state.availableTickets}
              placeholder="Cantidad de entradas disponibles"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.availableTickets && (
            <h5 className="error">{errors.availableTickets}</h5>
          )}
          <div className={`${s.caja}`}>
            <label>Ubicacion:</label>
            <input
              type="text"
              name="location"
              value={state.location}
              placeholder="Ubicacion"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.image && <h5 className="error">{errors.location}</h5>}
          <div className={`${s.caja}`}>
            <label>Imagen:</label>
            <input type="file" onChange={(e) => cargarImg(e.target.files[0])} />
            {/*<input
              type="url"
              name="name"
              value={state.image}
              placeholder="Url"
              onChange={(e) => handleInputChange(e)}
            />*/}
          </div>
          {errors.location && <h5 className="error">{errors.image}</h5>}
          <div className={s.cajaImg}>
            <img
              id="cajaImg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAC4CAMAAADzLiguAAAANlBMVEXp7vG6vsHs8fS2ur3c4eTU2dzm6u3P1Ne4vL/u8/a4vL67v8G0ubzDx8rY3eDEyMvh5unKz9Izr04MAAADb0lEQVR4nO2c63KrIBRGFY1CY4x5/5c93nKiICZGGOvuWj86adowYc0HWxgxSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOC3oiJwdJ/2oJr6Epy6Sc4qxeTXKtNPfoYfP9NXDj//f0xfv97oX2X6cU4l5pGl6TWNgdbF0b37AnPXUWwMVEd37wvqLKKQNnzm6A5uxcRMSEuWH93DrTRV/8XbaVBnQdFj9u4nm13Vpc+ILk3wy5FCn3LYqHL43hG+9ti0PqmRCNGO2HRMVJlGNqIx8mpakpEQyzRBRlSSd+u0vT0RY8Tkt6rq1mnXcl9fpBjp130DOt2Vk8HI9exG1G16VV81u5qWkBF7Ibxn6SrDSF5ZC7UdqxIRRoyzcZR9P25EGCnsiLRLwK87JMGIqt3NkjdL15VdQxFGSkfIm+v7Irt7jUmovm0f3B3o1Q7pVHuViMjIZeOo6aYdffP8hwQjSePuQq+U33Ee9ikRYcQ4tSar/Z996vMoEWHkue31wTSiJpV6WYkII4myjFS5rz/FdIAtKpFhxJpJqod3Xp3POEtKJFTf7vdGv2KSeYU4F7cLSoRkJFHJvRqcZDr3CnFrkntdIsVIW3CK8tam/ZEbb1+ckrSUEjlG2jeNUsbvw10PjimZf0KSkfVPLAyZxYHzV4woT0LcgSOk1rylWLu7YpaSv5KR9ftvpin5G0ZWhoyjRKIRU1tvF9XbO5JeSgQaMXU1nyrfJmSmRJ6RVkia3iZ/+CAhaVdcRiXijPRCpoPAex3iSYm06qvq+Q7ZZ0NmVDIxIiYjTyGdkv5vG4SINGIm9/32Kfl4yAg1YuppIlolWxIi0Yip7R2ybTdGizNiC9mMFlZr1O6zA8Iysjsh0oy0ZXf36SNRRsxlU1WRb8RcQpw/EmSkuw4JcGJPkJE6wJBJJVXfxXuMdho5d0YwkmDEBSM2GLGJboRaYxs5d0YSjNgZeVRBjoNXYowkTR6GsWkBRgI3jRG7aYzYTWPEbvqkRqI97sCc1MiwaaYfSRGa/JzPH3k+oyYNciEyZ2j4dE8Ac49vhmXHYdCjyOM+68p3QusXY8owm6uL6LPNqz0RlWTXozv3Haq5R5hXW66XMyakxwRb400p/IcNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4FD+AZS0NBe99dfKAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>

          <div className={s.caja_check}>
            <select
              className={s.select}
              onChange={(e) => {
                handleSelect(e);
                show(e.target.value);
                // alert(e.target.value);
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
                .filter((subCat) => subCat.fk === 1)
                .map((subCat) => {
                  return (
                    <span className={s.checks}>
                      <input
                        key={`${subCat.id}`}
                        type="checkbox"
                        value={`${subCat.name}`}
                        name={`${subCat.name}`}
                        onChange={(e) => handleCheckSub(e)}
                      />
                      {subCat.name}
                    </span>
                  );
                })}
            </div>
            <div
              id="teatro"
              className={div === "teatro" ? s.mostrarDiv : s.noMostrarDiv}
            >
              {subCategorias
                .filter((subCat) => subCat.fk === 2)
                .map((subCat) => {
                  return (
                    <span className={s.checks}>
                      <input
                        key={`${subCat.id}`}
                        type="checkbox"
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
              <button className={s.btnSubmit} type="submit">
                CREAR EVENTO
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
