import React from 'react'
import propsTypes from 'prop-types'
import { Flipper } from 'react-flip-toolkit'
import Card from './Card'
import faker from 'faker'
import houseImage from './house.png'

export default class AnimationWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeChild: this.props.initialActivChild || 0
    }
  }

  getChildrenCount = () => 3

  onNext = () => {
    if (this.state.activeChild === this.getChildrenCount() - 1) return
    this.setState({ activeChild: this.state.activeChild + 1 })
  }

  onPrev = () => {
    if (this.state.activeChild === 0) return
    this.setState({ activeChild: this.state.activeChild - 1 })
  }

  render() {
    const show = position => this.state.activeChild + 1 === position

    return (
      <React.Fragment>
        <section className="animation-wrapper">
          <Flipper flipKey={this.state.activeChild}>
            {show(1) && (
              <Card title={faker.name.title()} image={houseImage} position="1" />
            )}

            {show(2) && (
              <Card title={faker.name.title()} image={houseImage} position="2" />
            )}

            {show(3) && (
              <Card title={faker.name.title()} image={houseImage} position="3" />
            )}
          </Flipper>
        </section>

        <section className="controlls">
          <button onClick={this.onPrev}>Prev</button>
          <button onClick={this.onNext}>Next</button>
        </section>
      </React.Fragment>
    )
  }
}

AnimationWrapper.propTypes = {
  children: propsTypes.arrayOf(propsTypes.node)
}
