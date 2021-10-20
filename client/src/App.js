import "./App.css";
// import axios from "axios";
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


function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthProvider>
          <Switch>
            <Route>
              <Route path='/' component={Nav} />
              <Route exact path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route exact path="/login/success" component={LoginSuccess} />
              <Route exact path="/register" component={Register} />
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
              <Route path="/contact" component={Contact} />
              <Route path="/panelAdmin" component={PanelAdmin} />
              <Route exact path="/confirm/:id" component={ConfirmReset}/>
              <Route exact path='confirmForgot/:id' component={ForgotPassword}/>
            </Route>

          </Switch>
        </AuthProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
