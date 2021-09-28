import "./App.css";

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Event from './components/Event/Event'
import WishList from "./components/WishList/WishList";
import EventDetail from "./components/EventDetail/EventDetail";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import AddEvent from "./components/AddEvent/AddEvent";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route
          path={[
            "/home",
            "/events/:id",
            "/wishList",
            "/addEvent",
            
          ]}
          component={Nav}
        />
        <Route path="/home" component={Home} />
        <Route path='/event' component={Event}/>
        <Route path="/events/:id" component={EventDetail} />
        <Route path="/wishList" component={WishList} />
        <Route path="/addEvent" component={AddEvent} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
