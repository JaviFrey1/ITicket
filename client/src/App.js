import "./App.css";
import axios from "axios";
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
import Ticketspage from "./components/TicketsPage/TicketsPage/TicketsPage";
import UpdateEvent from "./components/UpdateEvent/UpdateEvent";
import Contact from "./components/Contact/Contact";
import PanelAdmin from "./components/PanelAdmin/PanelAdmin";
import UserDetail from "./components/userComponents/UserDetail";
import LoginSuccess from "./components/Nav/Login/Login";
import Historialpage from "./components/TicketsPage/TicketsPage/HistorialPage/HistorialPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"

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
            "/misTickets",
            "/addEvent",
            "/respuestas",
            "/privacidad",
            "/update/:id",
            "/historial",
            "/contacto"

          ]}
          component={Nav}
        />

        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        
        <Route exact path="/login/success" component={LoginSuccess}/>
        <Route path="/misTickets" component={Ticketspage} />
        <Route path="/historial" component={Historialpage} />
        <Route path="/event" component={Event} />
        <Route path="/events/:id" component={EventDetail} />
        <Route path="/wishList" component={WishList} />
        <Route path="/addEvent" component={AddEvent} />
        <Route path="/respuestas" component={Frequent} />
        <Route path="/privacidad" component={Privacy} />
        <Route path="/update/:id" component={UpdateEvent} />
        <Route path="/users/:id" component={UserDetail} />
        <Route path="/checkout" />
        <Route path="/contacto" component={Contact} />
        <Route path="/panelAdmin" component={PanelAdmin} />

          
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
