import "./App.css";

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Event from "./components/Event/Event";
import WishList from "./components/WishList/WishList";
import EventDetail from "./components/EventDetail/EventDetail";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import AddEvent from "./components/AddEvent/AddEvent";
import Frequent from "./components/Frequent/Frequent";
import Privacy from "./components/Privacy/Privacy";
<<<<<<< HEAD
=======
import Contact from "./components/Contact/Contact";
>>>>>>> 2896fe95e9656eed7e9e908d034814581cfa253e

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route
          path={[
            "/home",
            "/event",
            "/events/:id",
            "/wishList",
            "/addEvent",
            "/respuestas",
<<<<<<< HEAD
            "/privacidad"
=======
            "/privacidad", 
            "/contacto" ,      
>>>>>>> 2896fe95e9656eed7e9e908d034814581cfa253e
          ]}
          component={Nav}
        />
        <Route path="/home" component={Home} />
        <Route path="/event" component={Event} />
        <Route path="/events/:id" component={EventDetail} />
        <Route path="/wishList" component={WishList} />
        <Route path="/addEvent" component={AddEvent} />
        <Route path="/respuestas" component={Frequent} />
        <Route path="/privacidad" component={Privacy} />
<<<<<<< HEAD
=======
        <Route path="/contacto" component={Contact} />
>>>>>>> 2896fe95e9656eed7e9e908d034814581cfa253e
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
