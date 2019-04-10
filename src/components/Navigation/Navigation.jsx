import React, { Component } from 'react'
import Link from 'gatsby-link'
/*import Img from 'gatsby-image'*/
import Headroom from 'react-headroom'
import HamburgerMenu from 'react-hamburger-menu'
import { slide as Menu } from 'react-burger-menu'
import { Fade } from 'react-reveal'
import { FaFacebook } from 'react-icons/fa'
import config from '../../config/SiteConfig'
import styles from './Navigation.module.scss'
import './Headroom.scss'
import Logo from "../../images/logo-rotlo-inverse.png"

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    //console.log(rhythm)
    this.state = {
      menuOpen: false,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
   }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

 toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }



  handleClick() {
  this.setState({
    menuOpen: !this.state.menuOpen
  });
}


  render() {
    
    return (
    
    <>

      <div className={styles.mobileNavContent}> 
           
            <Menu right isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} width="350px" 
            burgerButtonClassName={ styles.bmBurgerButton }
            burgerBarClassName={ styles.bmBurgerBars }
            crossButtonClassName={ styles.bmCrossButton } 
            crossClassName={ styles.bmCross } 
            menuClassName={ styles.bmMenu } 
            morphShapeClassName={ styles.bmMorphShape } 
            itemListClassName={ styles.bmItemList } 
            itemClassName={ styles.bmItem} 
            overlayClassName={ styles.bmOverlay } 
            customCrossIcon={ false }
            customBurgerIcon={ false }
            >
 
              <Link to="/programmation" activeClassName={styles.active}  onClick={() => this.closeMenu()}>
                  Edition 2019
              </Link>
              <Link to="/infos-pratiques" activeClassName={styles.active} onClick={() => this.closeMenu()}>
                  Infos pratiques
              </Link> 
              <Link to="/asso" activeClassName={styles.active} onClick={() => this.closeMenu()}>
                  L'association
              </Link>
              <Link to="/archives" activeClassName={styles.active} onClick={() => this.closeMenu()}>
                  Archives
              </Link>
              <Link to="/contacts" activeClassName={styles.active} onClick={() => this.closeMenu()}>
                  Contacts
              </Link>
           
            <div className={styles.mobileNavSocialMedia}>
                {/*<a href="https://www.youtube.com/" aria-label="Youtube" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>*/}
              
                <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
            </div>
            </Menu>
       </div>

      <header>
        <Headroom calcHeightOnResize disableInlineStyles  >
          <Fade down duration={2000} className={styles.wrapper}>
            <div className={styles.name}>
              <span>
                <Link to="/" name="Accueil">
                  <img src={Logo} alt={config.siteTitleAlt} width="100px" />
                </Link>
              </span>    
            </div>
            
            {/*<nav className={styles.navigation}>
              <span>
              
               
                <Link to="/tilt"  activeClassName="active">Tilt</Link>
                <Link to="/"  activeClassName="active">Contact</Link>
 
           

              </span>
            </nav>*/}
             <div className={ styles.bmBurgerButton }>
             <HamburgerMenu 
                isOpen={this.state.menuOpen}
                menuClicked={this.handleClick.bind(this)}
                width={46}
                height={18}
                strokeWidth={2}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
                
            />
            </div> 
             
          </Fade>
      </Headroom>

          
           
         
       


    
        
      </header>
         
      </>
      
    );
  }
}

