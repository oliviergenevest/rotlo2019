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
    <h3 className="modal-title" style={{"marginTop":"20px"}}>COMMUNIQUE DE PRESSE 24/07/23</h3>
   
   <p className="modal-content">Beaucoup d'informations contradictoires ont circulé sur les activités de notre association et notamment la tenue du festival cet été. Il nous semblait donc important de clarifier la situation par ce communiqué. 
</p><p className="modal-content">
Nous avons réalisé une très belle édition l'an dernier sur le site du plan d'eau avec l'ensemble des partenaires très satisfaits de l'organisation et de la programmation artistique, avec le soutien de la Région Auvergne Rhône Alpes, de la Direction Régionale des Affaires culturelles Auvergne Rhône-Alpes, du Département de la Drôme, et des communes environnantes. Nous sommes restés fidèles à nos fournisseurs locaux, producteurs et commerçants de la vallée, et à nos partenaires historiques comme le Foyer de Vie pour adultes handicapés Clair Matin. Avec 900 personnes sur le site dont une grande part d’enfants, une offre de restauration maison et locale, des jeux en bois, des spectacles de grande qualité, les retours ont été unanimes tant des élus locaux, du gérant du plan d'eau, de nos prestataires, des artistes, et bien sûr du public. Comme à son habitude, l'association a nettoyé l'ensemble du site, et l'a laissé dans un état irréprochable à la fin de l'évènement. 
</p><p className="modal-content">
Si bien que nous avons construit dès l'hiver dernier toute l'architecture de l'édition 2023 (programmation, engagement des prestataires, partenariats, financements, recrutement bénévoles, etc). Dans le même temps, et pendant plusieurs mois, nous avons pris contact avec le gérant du site afin d'anticiper au mieux la complémentarité avec son activité. Cependant, malgré plusieurs relances, celui-ci ne nous a répondu que fin avril 2023 par la négative et sans véritable explication. Depuis on entend tout et son contraire, ça en devient drôle. La nouvelle délégation de service public (DSP) devrait à notre sens proposer une date butoir bien plus tôt concernant les délais d'autorisations d'événements, qui se construisent bien en amont. Les élus locaux également sollicités - Syndicat Mixte du Pas des Ondes, Mairie de Cornillon sur l'Oule, Mairie de La Motte Chalancon - n'ont pas souhaité intervenir pour soutenir la pertinence de notre projet. Nous avons donc communiqué une première fois sur une annulation, le cœur lourd compte tenu de l’investissement des bénévoles. 
</p><p className="modal-content">
Nous avons ensuite fait la découverte d'un nouveau site privé courant mai, exceptionnel, et à proximité du site habituel, facilitant une éventuelle délocalisation. Nous avons donc travaillé d'arrache-pied sur une formule allégée, de transition, permettant de maintenir un évènement, certes à taille réduite, mais très important pour la lisibilité de nos activités et l'engagement de nos bénévoles sur ce territoire où la dynamique culturelle est très réduite et ne repose que sur les associations. Cette nouvelle proposition a été écartée par les autorités, invoquant des raisons de sécurité: avis défavorable du sous-préfet de Nyons, et silence radio des élus locaux. 
</p><p className="modal-content">
Des moyens conséquents avaient pourtant été mis dans la sécurisation du site et de l'événement: l’association a notamment fait appel à un service d'ordre professionnel, engagé une équipe de secouristes habilités, des techniciens son et lumières accrédités, limité la jauge à 400 personnes, créé une « safe zone » sur le site, balisé l'ensemble du site avec des lumières... sans compter que l'association bénéficie de près de 30 ans d'expérience dans l'organisation d'événements culturels sur le territoire, sans qu'il n'y ait eu le moindre problème de sécurité.
</p><p className="modal-content">
Cette décision est dure, mais nous ne pouvons que nous y plier: l'association ne pourra pas organiser d'évènement cet été quelle qu'en soit la forme. Nous allons rebondir dès l'an prochain pour à nouveau faire rayonner une culture ouverte à tous, avec une exigence artistique élevée, et un accueil familial, convivial dans un esprit de partage et de solidarité. Nous vous tiendrons bien sûr informés de l'évolution de nos réflexions, rapports avec les autorités locales, pistes et formats pour la suite. 
</p><p className="modal-content">
En attendant bel été à tous, et continuons à soutenir le spectacle vivant et les initiatives d'événements bénévoles, qui en ont bien besoin en ces temps où les notions de sécurité, de risque et de répression effacent celles d'ouverture culturelle, de rencontre entre les générations, et d'engagement collectif désintéressé.
</p><p className="modal-content">
L'asso Rock on the l'Oule
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
           <FaFileAlt/> Rock On  The l'Oule 2023 : édition annulée
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
