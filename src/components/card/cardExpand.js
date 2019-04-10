import React, { useRef, useState } from 'react'

import ReactDOM from 'react-dom'
import { useSpring, useTransition, animated } from 'react-spring'
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
const transItemExpand = (h,w) =>  `${w}px`





export default function CardExpand(content) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.

  const [open, setExpandOnClick] = useState(false)


  const ref = useRef()
  const [props, set] = useSpring(() => ({ xys: [0, 0, 0], config: { mass: 1, tension: 170, friction: 40 } }))
    
 /*const { size, opacity, ...rest } = useSpring({
    ref: ref,
    from: { size: '20%', background: 'hotpink' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'hotpink' }
  })*/



  /*const transRef = useRef()*/

  const [propsExpand, setExpand] =  useSpring(() => ({hw:[250,250], config: { mass: 1, tension: 5, friction: 4 }  }))
  
/*console.log(transitions) */
    return (
    <animated.div  
      ref={ref} 
      //className={open ? "card-opened" : "card"} 
      className= "card" 
     /* onClick={() => {  
        set({ xys: [0,0,0] })
        setExpandOnClick(open => !open)
        setExpand( {hw: [250,550]})
        }
      }*/
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
        //scale up to 1.1
        const s = 1.1

          set({ xys: calc(x, y, s) })}
      }       
      onMouseLeave={() => {
        // Set xy back to original
        set({ xys: [0,0,0] });
      }}

      // style={open ? {width:propsExpand.hw.interpolate(transItemExpand) } :  {}}
    > 

      <animated.div 
        className="background"  
       //  style={ {transform: props.xys.interpolate(transBackground) }}
         style={ {transform: props.xys.interpolate(transBackground) } } 
      />
      <animated.div 
        className="affiche" 
        style={{ transform: props.xys.interpolate(transAffiche) }} >
        {content.affiche}
      </animated.div>
      <animated.div  
        className="edition" 
        style={open ? {} :{ transform: props.xys.interpolate(transEdition) }} >
        <span>#</span>{content.edition}
      </animated.div>
      <animated.div 
        className="annee" 
        style={open ? {} :{ transform: props.xys.interpolate(transAnnee) }} >
        {content.annee}
      </animated.div>
      <div className="extraContent"><h2>EXTRA CONTENT</h2></div>

    </animated.div>
    )
}


