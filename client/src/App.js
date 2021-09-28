import "./App.css";

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import WishList from "./components/WishList";
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
        <Route path="/events/:id" component={EventDetail} />
        <Route path="/wishList" component={WishList} />
        <Route path="/addEvent" component={AddEvent} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
