import React, { useRef } from 'react'

import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './styles.scss' 

/*
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const transAffiche = (x, y) => `translate3d(${x/20 +15}px,${y / 20}px,0)`
const transAnnee = (x, y) => `translate3d(${x / 8 + 5}px,${y / 80 - 15}px,0)`
const transEdition = (x, y) => `translate3d(${x / 4 + 50}px,${y / 10 - 15}px,0)`
*/

const calc = (x, y, s) => [x - 260 / 2, y - 260 / 2, s]
const transAffiche = (x, y) => `translate3d(${x/20}px,${y / 20}px,0)`
const transAnnee = (x, y) => `translate3d(${x / 3 }px,${y / 50 }px,0)`
const transEdition = (x, y) => `translate3d(${x / 4 }px,${y / 10 }px,0)`
const transBackground = (x,y,s) => `scale(${s})`

export default function Card(content) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef()

    const [props, set] = useSpring(() => ({ xys: [0, 0, 0.9], config: { mass: 1, tension: 170, friction: 40 } }))
    
    return (
    <div  
      ref={ref} 
      className="card" 

      onMouseMove={({ clientX, clientY }) => {
          // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

          const s = 1.1

          set({ xys: calc(x, y, s) })}
      }       
      onMouseLeave={() => {
        // Set xy back to original
        set({ xys: [0, 0,0.9] });
      }}

    > 
    <animated.div className="background"  
 style={{ transform: props.xys.interpolate(transBackground) }} />
      <animated.div className="affiche"  
 style={{ transform: props.xys.interpolate(transAffiche) }} >{content.affiche}</animated.div>
      <animated.div   
 className="edition" style={{ transform: props.xys.interpolate(transEdition) }} ><span>#</span>{content.edition}</animated.div>
      <animated.div  
 className="annee" style={{ transform: props.xys.interpolate(transAnnee) }} >{content.annee}</animated.div>

    </div>
    )
}


