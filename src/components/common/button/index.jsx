/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Button(props) {
  const {
    type, label, onClick, leftIcon, rightIcon,
    fluid, size, variant,
  } = props

  const buttonVariant = {
    'primary-solid': 'bg-sky-500 text-white hover:bg-opacity-70',
    'primary-outlined': 'border border-sky-500 bg-transparent text-sky-500 hover:bg-gray-200 dark:hover:bg-gray-700',
    'danger-solid': 'bg-red-500 text-white hover:bg-opacity-70',
    'danger-outlined': 'border border-red-500 bg-transparent text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700',
  }[variant]

  return (
    <button
      className={clsx(
        buttonVariant,
        size === 'sm'
          ? 'py-1.5 px-3 text-sm'
          : 'py-2 px-8',
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
  size: PropTypes.oneOf([
    'sm', 'md',
  ]),
  variant: PropTypes.oneOf([
    'primary-solid', 'danger-solid',
    'primary-outlined', 'danger-outlined',
  ]),
}

Button.defaultProps = {
  type: 'button',
  label: '',
  fluid: false,
  onClick: () => {},
  leftIcon: <span />,
  rightIcon: <span />,
  size: 'md',
  variant: 'primary-solid',
}
