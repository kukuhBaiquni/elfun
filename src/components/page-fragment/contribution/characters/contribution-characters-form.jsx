import PropTypes from 'prop-types'
import ContributionCharacterFormLeft from './contribution-characters-form-left'
import ContributionCharacterFormRight from './contribution-characters-form-right'

export default function ContributionCharacterForm(props) {
  const { baseData, form } = props

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-10'>
      <ContributionCharacterFormLeft
        baseData={baseData}
        form={form}
      />
      <ContributionCharacterFormRight
        form={form}
      />
    </div>
  )
}

ContributionCharacterForm.propTypes = {
  baseData: PropTypes.object,
  form: PropTypes.object,
}
