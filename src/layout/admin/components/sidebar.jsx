import React from "react";
import { withRouter } from "react-router";
import "layout/admin/styles/sidebar.css";
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
        color: "#833f94",
        parentName: "Pets",
      },
      {
        href: "/admin/pets-classes",
        faIco: "fa fa-tasks",
        name: "Classes",
        class: "nc",
        color: "#513f94",
        parentName: "Pets",
      },
      {
        href: "/admin/pets-racas",
        faIco: "fa fa-cat",
        name: "Raças",
        class: "nc",
        color: "#943f82",
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
      },
    ];

    const subItens_Vaccine = [
      {
        href: "/admin/vacinas",
        faIco: "fa fa-pills",
        name: "Gerenciar Vacinas",
        class: "nc",
        parentName: "Vacinas",
      },
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
      subItens_Users.concat(subItens_Vaccine.concat(subItens_Ajuste))
    );
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
        color: "#860ba5",
        group: true,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-user-circle",
        name: "Usuários",
        class: "darkerli",
        color: "#04885c",
        group: true,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-syringe",
        name: "Vacinas",
        class: "darkerli",
        color: "#75b1f5",
        group: true,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-rocket",
        name: "Ajustes",
        class: "darkerlishadowdown",
        group: true,
        subItens: [],
      },
      //ou of group
      {
        href: "/admin",
        faIco: "fa fa-question-circle",
        name: "Ajuda",
        class: "nc",
        color: "#0c91a8",
        group: false,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-bug",
        name: "Bugs",
        class: "nc",
        color: "Tomato",
        group: false,
        subItens: [],
      },
      {
        href: "/admin",
        faIco: "fa fa-blog",
        name: "Blog",
        class: "nc",
        color: "Orange",
        group: false,
        subItens: [],
      },
    ];

    return itens;
  }

  buildSingleListItem(menuItem, key) {
    const item = (
      <li key={key} className={menuItem.class}>
        <a href={menuItem.href}>
          <i
            className={`${menuItem.faIco} fa-lg fa-sidebar`}
            style={{ color: menuItem.color }}
          ></i>
          <span className="nav-text">{menuItem.name}</span>
        </a>
      </li>
    );

    return item;
  }

  buildMenuItem(menuItem, key) {
    if (menuItem.subItens.length < 1) {
      return this.buildSingleListItem(menuItem, `single-${key}`);
    }

    const itemMenu = (
      <div key={`${key}-colapse-container`}>
        <li key={`${key}-colapse-trigger`} className={menuItem.class}>
          <a
            href={menuItem.href}
            data-toggle={`collapse`}
            data-target={`#collapse-${key}`}
            aria-expanded="false"
            aria-controls={`collapse-${key}`}
          >
            <i
              className={`${menuItem.faIco} fa-lg fa-sidebar`}
              style={{ color: menuItem.color }}
            ></i>
            <span className="nav-text">{menuItem.name}</span>
          </a>
        </li>
        <div
          id={`collapse-${key}`}
          className="collapse"
          aria-labelledby={`heading-${key}`}
          data-parent="#style-1"
        >
          <ul key={`${key}-list-item`}>
            {menuItem.subItens.map((x, idx) =>
              this.buildSingleListItem(x, `${key}-child-${idx}`)
            )}
          </ul>
        </div>
      </div>
    );
    return itemMenu;
  }

  buildSideNav() {
    const groupables = this.menuItemList()
      .filter((x) => x.group)
      .map((x, idx) => {
        x.subItens = this.menuSubItemList().filter(
          (y) => y.parentName === x.name
        );
        return this.buildMenuItem(x, `menu-g1-${idx.toString()}`);
      });

    const nonGroupables = this.menuItemList()
      .filter((x) => !x.group)
      .map((x, idx) => {
        return this.buildSingleListItem(x, `menu-g2-${idx.toString()}`);
      });

    const sidenav = (
      <div className="sidenav">
        <nav className="main-menu">
          <div className="scrollbar" id="style-1">
            <ul key="groupable-sidevav">{groupables}</ul>
            <ul key="ungroupable-sidevav-">{nonGroupables}</ul>
          </div>
        </nav>
      </div>
    );

    return sidenav;
  }

  render() {
    const comp = this.buildSideNav();
    return comp;
  }
}

export default withRouter(SideBar);
