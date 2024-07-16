import React, {  useState } from 'react'
import { graphql, Link , useStaticQuery} from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'
import Headroom from 'react-headroom'
import HamburgerMenu from 'react-hamburger-menu'
import { slide as Menu } from 'react-burger-menu'
import { FaFacebook } from 'react-icons/fa'
import config from '../../config/SiteConfig'
import * as styles  from './Navigation.module.scss'
import './Headroom.scss'

import BookingBtn from '../BookingBtn'


 const Navigation = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const data = useStaticQuery(graphql`
  query { 
    logo:datoCmsLogo {
      logo {
        gatsbyImageData(imgixParams: {h:"83", auto: "compress,enhance,format"}) }
      } 

  }  
`
  )
  return ( 
    <>

    <div > 
         
          <Menu right
          isOpen={menuOpen}  
          onClose={ () => setMenuOpen(false) }
          width="350px" 
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

          {/*  <Link to="/programmation" activeClassName={styles.active}  onClick={() => setMenuOpen(!menuOpen)}>
                Programmation
            </Link>
            <Link to="/billetterie" activeClassName={styles.active}  onClick={() => setMenuOpen(!menuOpen)}>
                Billetterie
            </Link>
            <Link to="/infos-pratiques" activeClassName={styles.active} onClick={() => setMenuOpen(!menuOpen)}>
                Infos pratiques
  </Link> */}
  
            <Link to="/agenda" activeClassName={styles.active} onClick={() => setMenuOpen(!menuOpen) }>
                Evénements
            </Link>
  
            <Link to="/asso" activeClassName={styles.active} onClick={() => setMenuOpen(!menuOpen) }>
                L'association
            </Link>
            <Link to="/archives" activeClassName={styles.active} onClick={() => setMenuOpen(!menuOpen) }>
                Archives
            </Link>
            <Link to="/contacts" activeClassName={styles.active} onClick={() => setMenuOpen(!menuOpen) }>
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
      <Headroom calcHeightOnResize disableInlineStyles>
          <div className={styles.name}>
            <span>
              <Link to="/" name="Accueil">
                <GatsbyImage image={data.logo.logo.gatsbyImageData} alt={config.siteTitleAlt} />
              </Link>
            </span>    
          </div>
         {/*  <BookingBtn/>*/}
          <div className={ styles.bmBurgerButton }>
            <HamburgerMenu 
              isOpen={menuOpen}
              menuClicked={ () => setMenuOpen(!menuOpen)}
              width={46}
              height={18}
              strokeWidth={2}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}   
            />
          </div> 
    </Headroom>
    </header> 
    </>    

  )
}

export default Navigation
/*  
export default class Navigation extends Component {
  constructor(props) {
    super(props);
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

      <div > 
           
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
                  Programmation
              </Link>
              <Link to="/billetterie" activeClassName={styles.active}  onClick={() => this.closeMenu()}>
                  Billetterie
              </Link>
              <Link to="/infos-pratiques" activeClassName={styles.active} onClick={() => this.closeMenu()}>
                  Infos pratiques
    </Link> 
    
              <Link to="/agenda" activeClassName={styles.active} onClick={() => this.closeMenu()}>
                  Evénements
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
                              
              
                <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
            </div>
            </Menu>
       </div>

      <header>
        <Headroom calcHeightOnResize disableInlineStyles>
            <div className={styles.name}>
              <span>
                <Link to="/" name="Accueil">
               
                  <StaticImage 
                  src="../../images/logo-rotlo-inverse.png" 
                  alt={config.siteTitleAlt} 
                  width={100} 
                  height={63}
                  />
                </Link>
              </span>    
            </div>
            <BookingBtn/>
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
      </Headroom>
      </header> 
      </>     
    );
  }
}*/

