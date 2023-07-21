import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export const NavbarComponent = () => {
  const [dropdown, setDropdown] = useState(false);
  const [resMenu, setResMenu] = useState(false);

  const openAndClose = () => {
    setDropdown(!dropdown);
  };

  const close = () => {
    setDropdown(false);
  };

  const showMenu = ()=>{
    setResMenu(!resMenu);
  }

  const hideMenu = ()=>{
    setResMenu(false);
  }

  return (
    <header className="hero">
      <div className="nav__main">
        <div className="logo-brand">
          <img
            className="logo_brand"
            src="/src/assets/brand/logo.png"
            alt="logo clinica sagrada familia"
          />
        </div>
        <ul className={(resMenu)?'nav__menu active':'nav__menu'}>
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="">Directorio Médico</a>
          </li>

          {/* DROPDOWN */}

         { (!resMenu)?
          <li>
          <Dropdown isOpen={dropdown}>
            <DropdownToggle onMouseOver={openAndClose}>
              Unidades de Diagnostico y Servicio
            </DropdownToggle>

            <DropdownMenu onMouseLeave={close}>
              <DropdownItem>Centro Clínico Amparo</DropdownItem>

              <DropdownItem>Centro Clínico Delicias Norte</DropdownItem>

              <DropdownItem>Centro Clínico Ciudad Ojeda</DropdownItem>

              <DropdownItem>Centro Clínico Machiques</DropdownItem>

              <DropdownItem>Centro Clínico Punto Fijo</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>: 

        <li>
          <a>Unidades de Diagnostico y Servicio</a>          
        </li>
          
         }

          {/*  <li><a href=""></a></li> */}
          <li>
            <a href="">Red de Clinicas</a>
          </li>
          <li>
            <a href="">Convenios</a>
          </li>
          <li>
            <a href="">Contactos</a>
          </li>
        </ul>
        <ul className="nav__options">
         {
          (resMenu)? 
          null
          :
          <li>
            <i onClick={showMenu} className={(resMenu)? 'fa-solid fa-bars active' : 'fa-solid fa-bars' }></i>
        </li>
         }

         {
          (!resMenu)? 
          null
          :
          <li>
            <i onClick={hideMenu} className="fa-solid fa-xmark"></i>
          </li>
         }
        </ul>
      </div>
    </header>
  );
};
