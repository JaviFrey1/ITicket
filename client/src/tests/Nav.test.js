import React from "react";
import { NavLink } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Nav from "../components/Nav";

configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it("Deberia renderizar cuatro <Link />", () => {
    expect(wrapper.find(NavLink)).toHaveLength(4);
  });
  it('El primer Link debe  cambiar la ruta hacia "/home".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(NavLink).at(0).prop("to")).toEqual("/home");
  });
  it('El segundo Link debe cambiar la ruta hacia "/favorites"', () => {
    expect(wrapper.find(NavLink).at(1).prop("to")).toEqual("/favorites");
  });

  it('El tercer Link debe cambiar la ruta hacia "/addRecipe"', () => {
    expect(wrapper.find(NavLink).at(2).prop("to")).toEqual("/addRecipe");
  });

  it('El segundo Link debe cambiar la ruta hacia "/shoppingList"', () => {
    expect(wrapper.find(NavLink).at(3).prop("to")).toEqual("/shoppingList");
  });
});
