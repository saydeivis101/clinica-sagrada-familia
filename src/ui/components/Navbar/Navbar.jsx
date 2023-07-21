import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export const Navbar = () => {
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
        <ul className="nav__menu">
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="">Directorio Médico</a>
          </li>

          {/* DROPDOWN */}

          <Dropdown>
            <DropdownToggle>
            Unidades de Diagnostico y Servicio
            </DropdownToggle>
          
            <DropdownMenu>
              <DropdownItem>
                Centro Clínico Amparo
              </DropdownItem>
              
              <DropdownItem>
                Centro Clínico Amparo
              </DropdownItem>
              
              <DropdownItem>
                Centro Clínico Amparo
              </DropdownItem>

              
              <DropdownItem>
                Centro Clínico Amparo
              </DropdownItem>

              
              <DropdownItem>
                Centro Clínico Amparo
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>



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
      </div>
    </header>
  );
};
