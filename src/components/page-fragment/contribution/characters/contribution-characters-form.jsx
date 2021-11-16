import clsx from 'clsx'
import InputText from 'components/forms/input-text/input-text'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import ContributionCharacterFormLeft from './contribution-characters-form-left'
import ContributionCharacterFormRight from './contribution-characters-form-right'

export default function ContributionCharacterForm(props) {
  const { baseData, form } = props
  const { formState: { errors }, register } = form

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
      <div className='mt-10 border-input p-3 rounded'>
        <h4 className={clsx(baseData.textColor, 'text-lg font-bold font-titillium mb-1')}>Class Advancement ({baseData.name})</h4>
        <p className='text-sm'>
          Upon reaching level 35, the player will receive second class advancement quest.
        </p>
        <p className='text-sm'>
          Please add quest requirement to help player change their class to the next level
        </p>
        <section>
          <InputText
            errors={errors}
            label='Quest Acceptance Prerequisites'
            name='prerequisites'
            placeholder='Weapon e.g: Sword, Bow, Kick'
            register={register}
          />
        </section>
      </div>
    </Fragment>
  )
}

ContributionCharacterForm.propTypes = {
  baseData: PropTypes.object,
  form: PropTypes.object,
}
