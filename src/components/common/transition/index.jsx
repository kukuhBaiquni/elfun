import { memo } from 'react'
import { Transition } from '@headlessui/react'
import PropTypes from 'prop-types'

function TransitionComponent(props) {
  const { children, isVisible } = props
  return (
    <Transition
      as='div'
      enter='ease-out duration-300'
      enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
      enterTo='opacity-100 translate-y-0 sm:scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 translate-y-0 sm:scale-100'
      leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
      show={isVisible}
    >
      {children}
    </Transition>
  )
}

TransitionComponent.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
}
TransitionComponent.defaultProps = {
  isVisible: true,
}

export default memo(
  TransitionComponent,
)
