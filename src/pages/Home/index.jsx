import React, { useState } from "react";
import styles from "./home.module.css";
import { useSelector } from "react-redux";



export const Home = () => {

    const BlackMode = useSelector((state) => state.blackmode);
   

    return (
        <div className={BlackMode ? styles[`container-home-black`] : styles[`container-home-light`]}> 
         
            <h1 className={styles.title}>Template Front</h1>
            <p>Tobias gonzalez arriola</p>





        </div>
    );
};
