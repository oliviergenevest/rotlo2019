import React from "react";
import * as styles from "./Btn.module.scss";
import { Link } from 'gatsby';
const Btn = ({type='button' , children, to, external, ...rest}) => {

    return (  <>
        {external ? 
        <a href={to} rel="noopener noreferer" target="blank" type={type} className={styles.btn} {...rest}>{children}</a> 
        : 
        <Link to={to}  className={styles.btn} {...rest}>{children}</Link>

        }</>
    )
}

export default Btn;