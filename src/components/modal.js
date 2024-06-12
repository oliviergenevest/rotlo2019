import React, { useState } from "react";
import { useTransition } from "react-spring";
import { animated } from "react-spring";

import "./modal.css";

const Modal = ({ style, closeModal }) => (

  <animated.div style={style} className="modal-overlay" onClick={closeModal}>
  <div className="modal">
    <h3 className="modal-title">Les Parenthèses de l'Oule</h3>
    <p className="modal-content">
    C'est avec beaucoup d'amertume que nous annulons la prochaine édition des Parenthèses de l'Oule.     </p>
    <p className="modal-content">
Une édition que nous avions pourtant pensé s'accorder au mieux aux mesures sanitaires en vigueur ces derniers mois: changement de format, de lieu, événement en plein air, limitation de jauge, instauration des gestes barrières...tout concordait jusqu'au 21 juillet. 
</p>
<p className="modal-content">
Or, notre festival a lieu les 03 et 04 août prochains. 
</p>
<p className="modal-content">
En contact permanent avec les autorités depuis les annonces gouvernementales du 13 juillet, (Mairie, Département, Région, Préfecture, Sous préfecture, Agence Régionale de Santé...), nous n'avons pas à ce jour toutes les garanties de pouvoir mettre en place le pass sanitaire, très compliqué à instaurer en zone rurale isolée.
Une grande pensée pour tous les artistes, prestataires et bénévoles ayant oeuvré pour proposer un événement culturel ayant du sens dans ce territoire éloigné. 
</p>
<p className="modal-content">
Nous procéderons aux remboursements dans les jours à venir. 
</p>
<p className="modal-content">
Nous espérons vous revoir très bientôt dans un contexte sanitaire et règlementaire plus apaisé, nous permettant de projeter une belle édition en 2022.  
</p>
<p className="modal-content">
Portez-vous bien d'ici là!     </p>
<p className="modal-content">
La team Rock on the l'Oule    </p>
   
    <button className="modal-close-button" onClick={closeModal}>
      Fermer
    </button>
    </div>
  </animated.div>
);

const ModalRotlo = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const transitions = useTransition(modalVisible, null, {
        from: { opacity: 0, transform: "translateY(-40px)" },
        enter: { opacity: 1, transform: "translateY(0px)" },
        leave: { opacity: 0, transform: "translateY(-40px)" }
    });

    return (
            <>
            <button
            className="show-modal-button"
            onClick={() => setModalVisible(true)}
            >
            Le Festival est annulé
            </button>
            {transitions.map(
            ({ item, key, props: style }) =>
                item && (
                <Modal
                    style={style}
                    closeModal={() => setModalVisible(false)}
                    key={key}
                />
                )
            )}
      </>
    )
}

export default ModalRotlo;
