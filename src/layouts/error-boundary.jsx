import { XCircleIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { Component } from 'react'

/**
 * ErrorBoundary Component
 * @component
 * @category Components
 * @subcategory Layouts
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log('ERRORRSSSS', error)
    return { hasError: true }
  }

  render() {
    const { state, props } = this
    if (state.hasError) {
      return (
        <div className='flex-center h-full'>
          <div className='text-center pb-40'>
            <XCircleIcon className='text-6xl mx-auto' />
            <div className='pt-4'>Ooops... Something went wrong</div>
          </div>
        </div>
      )
    }
    return props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
}

export default ErrorBoundary
