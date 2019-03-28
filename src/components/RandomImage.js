import React from 'react'

import Img from 'gatsby-image'




class RandomImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: props.gatsbyImageArray,
      activeImageIndex: Math.floor(Math.random() * Math.floor(props.gatsbyImageArray.edges.length))
    }
  }

   
	componentDidMount(){

	    this.timer =  setInterval(() => {

	      this.setState({
	        activeImageIndex: Math.floor(Math.random() * Math.floor(this.state.images.edges.length))
	 
	      })
	    }, 6000) 
	}

	
componentWillUnmount () {
clearInterval(this.timer);
}

  render() {
  
    //console.log( this.state.images.edges.length, this.state.activeImageIndex)
    return (
    	
<Img fluid={ this.state.images.edges[this.state.activeImageIndex].node.childImageSharp.fluid}/>
     
    	
    
    )
  }
}

export default RandomImage