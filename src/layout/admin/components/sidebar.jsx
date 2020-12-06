import React from "react";
import { withRouter } from "react-router";
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
    };
  }

  menuSubItemList() {
    const subItens_Pet = [
      {
        href: "/admin/pets",
        faIco: "fa fa-dog",
        name: "Gerenciar pets",
        class: "nc",
        parentName: "Pets",
      },
      {
        href: "/admin/pets-classes",
        faIco: "fa fa-tasks",
        name: "Classes",
        class: "nc",
        parentName: "Pets",
      },
      {
        href: "/admin/pets-racas",
        faIco: "fa fa-cat",
        name: "Raças",
        class: "nc",
        parentName: "Pets",
      },
    ];

    const subItens_Users = [
      {
        href: "/admin/users",
        faIco: "fa fa-users-cog",
        name: "Gerenciar Usuários",
        class: "nc",
        parentName: "Usuários",
      }
    ];

    const subItens_Vaccine = [
      {
        href: "/admin/vacinas",
        faIco: "fa fa-pills",
        name: "Gerenciar Vacinas",
        class: "nc",
        parentName: "Vacinas",
      }
    ];

    const subItens_Ajuste = [
      {
        href: "/admin/settings-geral",
        faIco: "fa fa-cog",
        name: "Geral",
        class: "nc",
        parentName: "Ajustes",
      },
      {
        href: "/admin/settings-sistema",
        faIco: "fa fa-wrench",
        name: "Sistema",
        class: "nc",
        parentName: "Ajustes",
      },
    ];

    return subItens_Pet.concat(
      subItens_Users.concat(
        subItens_Vaccine.concat(subItens_Ajuste)));
  }

  menuItemList() {
    const itens = [
      {
        href: "/admin",
        faIco: "fa fa-home",
        name: "Home",
        class: "nc",
        group: true,
        subItens: null,
      },
      //in group
      {
        href: "/admin",
        faIco: "fa fa-paw",
        name: "Pets",
        class: "darkerlishadow",
        group: true,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-user-circle",
        name: "Usuários",
        class: "darkerli",
        group: true,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-syringe",
        name: "Vacinas",
        class: "darkerli",
        group: true,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-rocket",
        name: "Ajustes",
        class: "darkerlishadowdown",
        group: true,
        subItens:[],
      },
      //ou of group
      {
        href: "/admin",
        faIco: "fa fa-question-circle",
        name: "Ajuda",
        class: "nc",
        group: false,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-bug",
        name: "Bugs",
        class: "nc",
        group: false,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-blog",
        name: "Blog",
        class: "nc",
        group: false,
        subItens: [],
      },
    ];

    return itens;
  }

  buildSingleListItem(menuItem, key){
    const item = (
      <li key={key} className={menuItem.class}>
          <a href={menuItem.href}>
            <i className={`${menuItem.faIco} fa-lg fa-sidebar`}></i>
            <span className="nav-text">{menuItem.name}</span>
          </a>
        </li>
    );

    return item;
  }

  buildMenuItem(menuItem, key) {

    
    const item = (
      <>
        <li key={`${key}-colapse-trigger`} className={menuItem.class}>
          <a href={ menuItem.href } data-toggle={`collapse`}  data-target={`#collapse-${key}`} aria-expanded="false" aria-controls={`collapse-${key}`}>
            <i className={`${menuItem.faIco} fa-lg fa-sidebar`}></i>
            <span className="nav-text">{menuItem.name}</span>
          </a>
        </li>
        <div  id={`collapse-${key}`} className="collapse" aria-labelledby={`heading-${key}`} data-parent="#style-1">
          <ul key={`${key}-list-item`}>
            { menuItem.subItens.map( (x, idx)=> this.buildSingleListItem(x, `${key}-child-${idx}`)) }
          </ul>
        </div>
      </>
    );
console.log(menuItem.subItens)
    return item;
  }

  buildSideNav() {

    const groupables = this.menuItemList()
      .filter((x) => x.group)
      .map((x, idx) => {

        x.subItens = this.menuSubItemList().filter((y)=> y.parentName === x.name);
        return this.buildMenuItem(x, `main-groupable-${idx}`);
      });

    const nonGroupables = this.menuItemList()
      .filter((x) => !x.group)
      .map((x, idx) => {
        return this.buildSingleListItem(x, `main-ungroupable-${idx}`);
      });

    const sidenav = (
      <div className="sidenav">
        <nav className="main-menu">
          <div className="scrollbar" id="style-1">
            <ul key="groupable-sidenav">{groupables}</ul>
            <ul key="ungroupable-sidenav-">{nonGroupables}</ul>
          </div>
        </nav>
      </div>
    );

    return sidenav;
  }

  render() {
    return( this.buildSideNav());
  }
}

export default withRouter(SideBar);
