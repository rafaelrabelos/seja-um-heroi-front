import { Route } from "react-router-dom";
import React from 'react'
import { Logon, Register, Pet, Home, Profile } from './pages';

var routes = [
  {
    layout: "/auth",
    page: "/login",
    nome: "Login",
    component: Logon
  },
  {
    layout: "/auth",
    page: "/cadastrar",
    nome: "Cadastrar",
    component: Register
  },
  {
    layout: "/hero",
    page: "/index",
    nome: "Dashboard",
    component: Home
  },
  {
    layout: "/hero",
    page: "/profile",
    nome: "Dashboard",
    component: Profile
  },
  {
    layout: "/hero",
    page: "/cadastrar",
    nome: "CadastrarPet",
    component: Pet
  }
];

function getPageName(path) {
  for (let i = 0; i < routes.length; i++) {
    if (
      path.indexOf(
        routes[i].layout + routes[i].path
      ) !== -1
    ) {
      return routes[i].name;
    }
  }
  return "Brand";
};

function getRoutes(routesArray, layout) {
  return routesArray.map((prop, key) => {
    if (prop.layout === layout) {
      return (
        <Route
          path={prop.layout + prop.page}
          component={prop.component}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

export default routes;
export { getRoutes, getPageName }
