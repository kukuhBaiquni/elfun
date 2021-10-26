/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Button(props) {
  const {
    type, label, onClick, leftIcon, rightIcon,
    outlined, fluid, size,
  } = props
  return (
    <button
      className={clsx(
        size === 'sm'
          ? 'py-1.5 px-3 text-sm'
          : 'py-2 px-8',
        outlined
          ? 'border border-sky-500 bg-transparent text-sky-500 hover:bg-gray-200 dark:hover:bg-gray-700'
          : 'bg-sky-500 text-white hover:bg-opacity-70',
        fluid && 'w-full',
        'flex items-center justify-center rounded transition-all duration-300',
      )}
      type={type}
      onClick={onClick}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  fluid: PropTypes.bool,
  outlined: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm', 'md',
  ]),
}

Button.defaultProps = {
  type: 'button',
  label: 'Button',
  fluid: false,
  outlined: false,
  onClick: () => {},
  leftIcon: <span />,
  rightIcon: <span />,
  size: 'md',
}
