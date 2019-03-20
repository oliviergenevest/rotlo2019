import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import BandImg from './Image.js'




const TimelineRotlo = ({itemList}) => (

    
<Timeline lineColor={'#BADA55'}>
    <TimelineItem
    key="001"
    dateText="19h"
    style={{ color: '$brand-third' }}
      bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Ouverture des portes</h3>
    
   
  </TimelineItem>
  <TimelineItem
    key="001"
    dateText="19h30"
    style={{ color: '$brand-third' }}
      bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3>Super performance</h3>
    <h4>cirque accrobatique</h4>
    <BandImg/>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
   
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="20h30"
  /*  dateInnerStyle={{ background: '#fff', color: '#000' }}*/
    style={{ color: '$brand-third' }}
    bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{}}>Super groupe n°1</h3>
    <h4 style={{ }}>reggae</h4>
    <BandImg/>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
   
  </TimelineItem>
  <TimelineItem
    key="003"
      bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(150, 150, 150)',
          color: '#fff',
        }}
      >
        22h30
      </div>
    )}
  >
      <h3>Super groupe n°2</h3>
    <h4>balkan jazz groove</h4>
    <BandImg/>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
   
   
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="23h30"
      bodyContainerStyle={{
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>Super groupe n°3</h3>
    <h4>balkan jazz groove</h4>
    <BandImg/>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
   
   
  </TimelineItem>
</Timeline>
)

export default TimelineRotlo
