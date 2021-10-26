/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Button(props) {
  const {
    type, label, onClick, leftIcon, rightIcon,
    outlined, fluid,
  } = props
  return (
    <button
      className={clsx(
        outlined
          ? 'border border-sky-500 bg-transparent text-sky-500 hover:bg-gray-200 dark:hover:bg-gray-700'
          : 'bg-sky-500 text-white hover:bg-opacity-70',
        fluid && 'w-full justify-center',
        'flex items-center rounded py-2 px-8 transition-all duration-300',
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
}

Button.defaultProps = {
  type: 'button',
  label: 'Button',
  onClick: () => {},
  leftIcon: <span />,
  rightIcon: <span />,
}
