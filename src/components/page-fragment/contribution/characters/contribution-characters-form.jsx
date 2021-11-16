import clsx from 'clsx'
import InputText from 'components/forms/input-text/input-text'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import Collapse from 'components/common/collapse'
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
      <div className='mt-10 border-input p-3 rounded dark:bg-gray-900 bg-gray-300'>
        <h4 className={clsx(baseData.textColor, 'text-lg font-bold font-titillium mb-1')}>Class Advancement ({baseData.name})</h4>
        <div className='dark:text-gray-500 text-gray-500 text-sm'>
          <p> Upon reaching level 35, the player will receive second class advancement quest.  </p>
          <p> Please add quest requirements to help player change their class to the next level </p>
        </div>
        <section>
          <Collapse
            color={baseData.bgColor}
            title={baseData.name}
          >
            <InputText
              errors={errors}
              label='Quest Acceptance Prerequisites'
              name='prerequisites'
              placeholder='Weapon e.g: Sword, Bow, Kick'
              register={register}
            />
          </Collapse>
        </section>
      </div>
    </Fragment>
  )
}

ContributionCharacterForm.propTypes = {
  baseData: PropTypes.object,
  form: PropTypes.object,
}
