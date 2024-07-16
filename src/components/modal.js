import React, { useState } from "react";
import {/* useTransition,*/ useSpring } from "react-spring";
import { animated } from "react-spring";
import config from '../config/SiteConfig'
import { StaticImage} from 'gatsby-plugin-image'
import { FaFileAlt } from 'react-icons/fa'
import "./modal.css";

const Modal = ({ style, closeModal }) => (

  <div  className="modal-overlay" onClick={closeModal}>
  <animated.div className="modal" style={style}>
    <div >
      <StaticImage 
        src="../images/logo-rotlo.png" 
        alt={config.siteTitleAlt} 
        width={100} height={63}
        />
    </div>
    <h3 className="modal-title" style={{"marginTop":"20px"}}> Edition 2024 annulée</h3>
  
   <p className="modal-content">
   Pour des raisons indépendantes de notre bonne volonté, nous vous informons avec de grands regrets que l’édition 2024 du Rock on the l’Oule est annulée ! Merci à celles et ceux qui ont travaillé avec énergie et envie sur la préparation de cette édition…
   
   </p>
  
   
    <button className="modal-close-button" aria-label='Fermer' onClick={closeModal}>
      Fermer
    </button>
    </animated.div>
  </div>
);

const ModalRotlo = () => {
    const [modalVisible, setModalVisible] = useState(true);
   /* const [transitions, api] = useTransition(modalVisible, ()=> ({
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(-40px)" }
    }));*/


    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: modalVisible ? 1 : 0,
      transform: modalVisible ? `translateY(0px)` : `translateY(-40px)`
    });

    return (
            <>
            <button
            className="show-modal-button"
            onClick={() => setModalVisible(true)}
            >
           <FaFileAlt/> Edition 2024 annulée
            </button>
            {/*transitions(( item, key, style ) =>
                modalVisible ?
                <Modal
                    style={style}
                    closeModal={() => setModalVisible(false)}
                    key={key}
                /> : null
                )
    */}
    {
                modalVisible ?
                <Modal
                    style={animation}
                    closeModal={() => setModalVisible(false)}
                    
                /> : null
                
    }
      </>
    )
}

export default ModalRotlo;
