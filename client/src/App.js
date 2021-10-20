

import "./App.css";
import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
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
import ConfirmReset from "./components/ConfirmReset/ConfirmReset";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import { AuthProvider } from "./context/AuthContext";
import PrivateRouteUser from "./context/PivateRouteUser";
import PrivateRouteAdmin from "./context/PrivateRouteAdmin";

function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthProvider>
            <Route path='/' component={Nav} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <PrivateRouteAdmin exact path="/addEvent" component={AddEvent} />
            <PrivateRouteAdmin exact path="/update/:id" component={UpdateEvent} />
            <PrivateRouteAdmin exact path="/panelAdmin" component={PanelAdmin} />
            
            <PrivateRouteUser exact path="/misTickets" component={Ticketspage} />
            <PrivateRouteUser exact path="/historial" component={Historialpage} />
            <PrivateRouteUser exact path="/users/:id" component={UserDetail} />
            <PrivateRouteUser exact path="/confirm/:id" component={ConfirmReset}/>
           
           
            <Route exact path='confirmForgot/:id' component={ForgotPassword}/>
            <Route exact path="/login/success" component={LoginSuccess} />
            <Route path="/event" component={Event} />
            <Route path="/events/:id" component={EventDetail} />
            <Route path="/wishList" component={WishList} />
            
            <Route path="/respuestas" component={Frequent} />
            <Route path="/privacidad" component={Privacy} />
            
            <Route path="/checkout" />
            <Route path="/contacto" component={Contact} />
           

        </AuthProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
