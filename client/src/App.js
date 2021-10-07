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
// import Landing from "./components/Landing/Landing"

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route
          path={[
            "/",
            "/event",
            "/events/:id",
            "/wishList",
            "/addEvent",
            "/respuestas",
            "/privacidad",          
          ]}
          component={Nav}
        />
        {/* <Route exact path="/" component={Landing}/> */}
        <Route exact path="/" component={Home} />
        <Route path="/event" component={Event} />
        <Route exact path="/events/:id" component={EventDetail} />
        <Route path="/wishList" component={WishList} />
        <Route path="/addEvent" component={AddEvent} />
        <Route path="/respuestas" component={Frequent} />
        <Route path="/privacidad" component={Privacy} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
