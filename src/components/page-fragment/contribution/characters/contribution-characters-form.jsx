import PropTypes from 'prop-types'
import { Fragment } from 'react'
import ContributionCharacterFormLeft from './contribution-characters-form-left'
import ContributionCharacterFormRight from './contribution-characters-form-right'
import ContributionCharacterFormQuest from './contribution-characters-form-quest'

export default function ContributionCharacterForm(props) {
  const { baseData, form } = props

  return (
    <Fragment>
      <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-10'>
        <ContributionCharacterFormLeft
          baseData={baseData}
          form={form}
        />
        <ContributionCharacterFormRight
          form={form}
        />
      </div>
      {baseData.classId !== 0 && (
        <ContributionCharacterFormQuest
          baseData={baseData}
          form={form}
        />
      )}
    </Fragment>
  )
}

ContributionCharacterForm.propTypes = {
  baseData: PropTypes.object,
  form: PropTypes.object,
}
