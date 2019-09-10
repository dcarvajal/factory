import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

const StyledChildren = ({ children, className, ...rest }) => {
  const classnames = (...args) => args.join(' ')
  const getClassName = el => (el.props && el.props.className) || ''
  const spacedChildren = Children.toArray(children).map(child =>
    cloneElement(child, {
      className: classnames(getClassName(child), className),
      ...rest
    })
  )

  return <>{spacedChildren}</>
}

const Space = styled(StyledChildren)`
  ${space}
`
StyledChildren.propTypes = {
  ...space.propTypes,
  className: PropTypes.string,
  children: PropTypes.node
}
Space.displayName = 'Space'

/** @component */
export default Space