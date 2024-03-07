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
    <h3 className="modal-title" style={{"marginTop":"20px"}}> Soirée théatre - Samedi 6 avril 2024</h3>
  
   <p className="modal-content">
   Samedi 06 Avril 2024<br/><br/>


La compagnie "à court de jardin", l'association "Rock on the l'Oule" et l'association "J'aime lire" présentent :<br/><br/>

Quand viendra la vague d'Alice Zeniter<br/><br/>

Salle Stéphane Perrin à côté de la maternelle. La Motte Chalancon.<br/>
20h<br/>
PAF : 10 €<br/>
Buffet participatif après la représentation<br/>

   </p>
   <p className="modal-content">
    <a href='./agenda/soiree-theatre-quand-viendra-la-vague'>En savoir plus</a>
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
           <FaFileAlt/> Soirée théâtre le 6 avril 2024
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
