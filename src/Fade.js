import React from 'react'
import withAnimation from 'hoc-react-animate'

const Fade = ({ children, className, ...props }) => (
  <div {...props} className={`fade ${className}`}>
    {children}
  </div>
)

Fade.displayName = "Fade"

export default withAnimation(Fade, { atMount: true, })
