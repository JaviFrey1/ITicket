import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import addEvent from "../../actions/addEvent";
import getCategories from "../../actions/getCategories";
import getSubCategories from "../../actions/getSubCategories";
import Axios from "axios";

import s from "./add.module.css";

export function validate(state) {
  let errors = {};
  if (!state.name) {
    errors.name = "El nombre es obligatorio";
  } else if (!state.date) {
    errors.date = "La fecha es obligatoria";
  } else if (state.time === '00-00') { 
    errors.time = "El horario es obligatorio";
  } else if (!state.artist) {
    errors.artist = "Campo obligatorio";
  } else if (!state.availableTickets) {
    errors.availableTickets = "Campo obligatorio";
  } else if (!state.price) {
    errors.price = "Campo obligatorio";
  } else if (!state.place) {
    errors.place = "Campo obligatorio";
  } else if (!state.address) {
    errors.address = "Campo obligatorio";
  } else if (!state.location) {
    errors.city = "Campo obligatorio";
  } else if (!state.province) {
    errors.state = "Campo obligatorio";
  } else if (!state.isImportant || typeof isImportant !== "boolean") {
    errors.state = "Campo obligatorio, completar con true o false.";
  }
  return errors;
}

export default function AddEvent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categorias = useSelector((state) => state.categories);

  const subCategorias = useSelector((state) => state.subCategories);

  const [errors, setErrors] = useState({});
  const [div, setDiv] = useState("-");
  const [state, setState] = useState({
    name: "",
    date: "",
    time: "",
    artist: "",
    availableTickets: "",
    price: "",
    place: "",
    address: "",
    location: "",
    province: "",
    image: "",
    category: "", //LLEGA UN INTEGER (ID DE CATEGORY)
    subCategories: [],
    isImportant: "",
  });

  const cargarImg = function (files) {
    
    const reader = new FileReader();
    reader.onload = function () {
      let imgDiv = document.querySelector("#cajaImg");
      imgDiv.src = reader.result;
      
    };
    reader.readAsDataURL(files);

    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", "di4u9mje");
    Axios.post(
      "https://api.cloudinary.com/v1_1/tukiteck/image/upload",
      formData
    ).then((response) =>
      setState({ ...state, image: response.data.secure_url })
    );
  };

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
    if(cat==="3"){
      setDiv("otro")
    }
  
  }

  function handleInputChange(e) {
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
    else if (!e.target.checked){
      setState({
        ...state,
        subCategories:state.subCategories.filter(subCat=>subCat !== e.target.value)
      })
    }
  }
  function handleNew(e){
    setState({
      ...state,
      subCategories: [...state.subCategories,{genre:e.target.value, catId:3}],
    })
  }
  function handleNewSubMusica(e){
    const capGenre = e.target.value[0].toUpperCase() +  e.target.value.slice(1).toLowerCase()
    setState({
      ...state,
      subCategories: [...state.subCategories, {genre:capGenre, catId:1}],
    })
  }
 
  function handleNewSubTeatro(e){
    const capGenre = e.target.value[0].toUpperCase() +  e.target.value.slice(1).toLowerCase()
    setState({
      ...state,
      subCategories: [...state.subCategories, {genre:capGenre, catId:2}],
    })
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    // state.time
    // state.date = state.date.toLocaleDateString();
    // const newFecha = new Date(state.date);
    // console.log(newFecha);
    let newFecha = state.date.split("-");
    // console.log(newFecha.reverse().join("-"));
    newFecha = newFecha.reverse().join("/");
    // console.log("fecha: ", newFecha);
    state.date = newFecha;

    dispatch(addEvent(state));
    alert("Has agregado un nuevo evento!");
    setState({
      name: "",
      date: "",
      time: "",
      artist: "",
      availableTickets: "",
      price: "",
      place: "",
      address: "",
      location: "",
      province: "",
      image: "",
      category: "", //LLEGA UN INTEGER (ID DE CATEGORY)
      subCategories: [], //LLEGA ARRAY DE STRINGS(GENRE DE SUBCAT)
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
              autoComplete="off"
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
              autoComplete="off"
              type="date"
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
              autoComplete="off"
              type="time"
              name="time"
              value={state.time}
              placeholder="Horario"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.time && <h5 className="error">{errors.time}</h5>}
          <div className={`${s.caja}`}>
            <label>Artista:</label>
            <input
              autoComplete="off"
              type="text"
              name="artist"
              value={state.artist}
              placeholder="Artista"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.artist && <h5 className="error">{errors.artist}</h5>}
          <div className={`${s.caja}`}>
            <label>Entradas disponibles:</label>
            <input
              autoComplete="off"
              type="number"
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
            <label>Precio:</label>
            <input
              autoComplete="off"
              min="1.00"
              step="0.50"
              type="number"
              name="price"
              value={state.price}
              placeholder="Precio"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.price && <h5 className="error">{errors.price}</h5>}
          <div className={`${s.caja}`}>
            <label>Lugar:</label>
            <input
              autoComplete="off"
              type="text"
              name="place"
              value={state.place}
              placeholder="Nombre del lugar. Ej: Luna Park"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.place && <h5 className="error">{errors.place}</h5>}
          <div className={`${s.caja}`}>
            <label>Calle y Nro:</label>
            <input
              autoComplete="off"
              type="text"
              name="address"
              value={state.address}
              placeholder="Ej: Tribulato 800"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.address && <h5 className="error">{errors.address}</h5>}
          <div className={`${s.caja}`}>
            <label>Localidad:</label>
            <input
              autoComplete="off"
              type="text"
              name="location"
              value={state.location}
              placeholder="Ej: San Miguel"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {errors.location && <h5 className="error">{errors.location}</h5>}
          <div className={`${s.caja}`}>
            <label>Provincia:</label>
            <input
              autoComplete="off"
              type="text"
              name="province"
              value={state.province}
              placeholder="Ej: Buenos Aires"
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          {errors.province && <h5 className="error">{errors.province}</h5>}
          <div className={`${s.caja}`}>
            <label>Destacado:</label>
            <select
          name='isImportant'
          onChange={(e) => {
            handleInputChange(e);
          }}
        >
          <option>Destacado</option>

          <option value="true">SI</option>
          <option value="false">NO</option>
        </select>
          </div>
          {errors.isImportant && (
            <h5 className="error">{errors.isImportant}</h5>
          )}
          <div className={`${s.caja}`}>
            <label>Imagen:</label>
            <input type="file" onChange={(e) => cargarImg(e.target.files[0])} />
          </div>

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
                .filter((subCat) => subCat.catId === 1)
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
            <input type='text' value={state.subCategories} name='subCategories'  placeholder='Ej: Fotografia' onBlur={(e) => handleNew(e)}/>
            </div>
          </div>
          <div className={`${s.btnCont}`}>
            {/* {state.name &&
            state.date &&
            state.time &&
            state.artist &&
            state.availableTickets &&
            state.price &&
            state.place &&
            state.address &&
            state.location &&
            state.province &&
            state.category &&
            state.subCategories.length > 0 ? ( */}
            <button className={s.btnSubmit} type="submit">
              CREAR EVENTO
            </button>
            {/* ) : null} */}
          </div>
        </form>
      </div>
    </div>
  );
}
