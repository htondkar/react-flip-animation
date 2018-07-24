import React from 'react'
import { Flipped } from 'react-flip-toolkit'
import Fade from './Fade'

const Card = ({ title, image, position }) => (
  <Flipped flipId="card" key="1">
    <article className="card" data-position={position}>
      <Fade>
        <img className="card__image" src={image} alt="cat" />
        <header className="card__title">{title}</header>
      </Fade>
    </article>
  </Flipped>
)

export default Card
