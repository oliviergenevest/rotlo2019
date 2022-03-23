import React from "react";
import styles from "./BookingBtn.module.scss";

const BookingBtn = () => {
  console.log(styles)
    return (
              <a href="https://www.helloasso.com/associations/association-rock-on-the-l-oule/evenements/festival-rock-on-the-l-oule" 
              className={styles.btnBooking} 
              target="_blank" 
              rel="noreferrer noopener">Billetterie</a>
    )
}

export default BookingBtn;
