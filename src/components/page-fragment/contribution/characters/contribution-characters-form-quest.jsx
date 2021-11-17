import { ClipboardListIcon, TrashIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import Button from 'components/common/button'
import Collapse from 'components/common/collapse'
import PropTypes from 'prop-types'
import { useFieldArray } from 'react-hook-form'
import CLASS_TYPE from 'constant/class-type'
import ContributionCharacterFormRequirements from './contribution-characters-form-requirements'

export default function ContributionCharacterFormQuest(props) {
  const { form, baseData } = props
  const { control } = form
  const { fields, append, remove } = useFieldArray({
    name: 'advancement',
    control,
    keyName: '$id',
  })

  const addQuest = () => {
    append({
      prerequisites: '',
      objectives: '',
      description: '',
    })
  }

  return (
    <div className='mt-10 border-input p-3 rounded dark:bg-gray-900 bg-gray-300'>
      <h4 className={clsx(baseData.textColor, 'text-lg font-bold font-titillium mb-1')}>{CLASS_TYPE[baseData.classId]} Advancement ({baseData.name})</h4>
      <div className='dark:text-gray-500 text-gray-500 text-sm'>
        <p> Upon reaching level 35, the player will receive second class advancement quest.  </p>
        <p> Please add quest requirements to help player change their class to the next level </p>
      </div>
      {fields.map((field, index) => (
        <Collapse
          additionalToolbar={(
            <TrashIcon
              className='w-5 h-5 text-red-400'
              onClick={() => remove(index)}
            />
          )}
          key={field.$id}
          title={`${baseData.name} ${index + 1}/${fields.length}`}
        >
          <ContributionCharacterFormRequirements
            form={form}
            name={`advancement.${index}`}
          />
        </Collapse>
      ))}
      <div className='mt-2'>
        <Button
          label='Add Quest'
          leftIcon={<ClipboardListIcon className='w-4 h-4 mr-1' />}
          size='sm'
          onClick={addQuest}
        />
      </div>
    </div>
  )
}

ContributionCharacterFormQuest.propTypes = {
  form: PropTypes.object,
  baseData: PropTypes.object,
}
