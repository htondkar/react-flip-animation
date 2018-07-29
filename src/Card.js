import React from 'react'
import { Flipped } from 'react-flip-toolkit'
import Fade from './Fade'
// import QueueAnim from 'rc-queue-anim';


const Card = ({ title, image, position }) => (
  <Flipped flipId="card" key="1">
    <article className="card" data-position={position}>
      <Fade>
      {/* <QueueAnim type="alpha"> */}
        <img key="1" className="card__image" src={image} alt="cat" />
        <header key="2" className="card__title">{title}</header>
      {/* </QueueAnim> */}
      </Fade>
    </article>
  </Flipped>
)

export default Card
