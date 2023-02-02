import React from "react";
import * as styles from "./BookingBtn.module.scss";

const BookingBtn = () => {
 // console.log(styles)
    return (
              <a href="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule-2022" 
              className={styles.btnBooking} 
              target="_blank" 
              rel="noreferrer noopener">Réserver</a>
    )
}

export default BookingBtn;