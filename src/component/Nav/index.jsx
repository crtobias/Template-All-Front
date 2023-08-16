
import React, { useState } from "react";
import styles from "./nav.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { blackModeChange } from '../../redux/restoSlice';
import { Boton } from "../Boton";
import { BotonNav } from "../BotonNav";

export const Nav = () => {
  const [showDiv, setShowDiv] = useState(false); // Estado para controlar la visibilidad del div
  const BlackMode = useSelector((state) => state.blackmode);
  const dispatch = useDispatch();

  const toggleDiv = () => {
    setShowDiv(!showDiv); // Cambia el estado al contrario de su valor actual
  };

  return (
    <section className={BlackMode ? styles[`container-nav-black`] : styles[`container-nav-light`]}>
      <div className={styles[`opcion-nav`]}>
        <BotonNav texto="Opcion 2" onClick={toggleDiv} />
      </div>
      <div className={styles[`opcion-nav`]}>
        <Boton onClick={() => dispatch(blackModeChange())} texto={BlackMode ? "🌙" : "☀"} />
      </div>
      <div className={styles[`opcion-nav`]}>
        <Boton className={styles[`boton-opcion-2`]} texto="Opcion 2" />
      </div>


      <div className={BlackMode ? `${styles["container-menu-black"]} ${showDiv ? styles["active"] : ""}` : `${styles["container-menu-light"]} ${showDiv ? styles["active"] : ""}`}>
        hola
      </div>

    </section>
  );
}

