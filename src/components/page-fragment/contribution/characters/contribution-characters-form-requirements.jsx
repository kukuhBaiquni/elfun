import PropTypes from 'prop-types'
import Textarea from 'components/forms/input-text/textarea'
import InputNumber from 'components/forms/input-text/input-number'
import REWARDS from 'constant/rewards'
import Image from 'next/image'

export default function ContributionCharacterFormRequirements(props) {
  const {
    form, defaultValues = {}, name, baseData = {},
  } = props
  const { formState: { errors }, register, control } = form

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-10 p-2'>
      <section>
        <Textarea
          errors={errors}
          label='Quest Acceptance Prerequisites'
          name={`${name}.prerequisites`}
          placeholder='Achieve Level 15'
          register={register}
          rows={3}
        />
        <Textarea
          errors={errors}
          label='Objectives'
          name={`${name}.objectives`}
          placeholder='Clear a dungeon 0/1'
          register={register}
          rows={4}
        />
        <Textarea
          errors={errors}
          label='Description'
          name={`${name}.description`}
          placeholder='Elesis felt that she was slowly losing control over the power of fire within her..'
          register={register}
        />
      </section>
      <section>
        <InputNumber
          control={control}
          errors={errors}
          label='Experience'
          name={`${name}.rewards.exp`}
          placeholder='Exp. Rewards'
        />
        <InputNumber
          control={control}
          errors={errors}
          label='ED'
          name={`${name}.rewards.ed`}
          placeholder='ED Rewards'
        />
        <InputNumber
          control={control}
          errors={errors}
          label='AP'
          name={`${name}.rewards.ap`}
          placeholder='AP Rewards'
        />
        <h6 className='font-titillium font-bold'>Common Rewards</h6>
        {REWARDS[baseData.classId].map((reward) => (
          <div className='flex items-center gap-x-1 p-1 my-2 border-input rounded bg-opacity-70 dark:bg-gray-800 bg-gray-200' key={reward.name}>
            <Image
              alt={reward.name}
              height={40}
              src={reward.img}
              width={40}
            />
            <div className='flex flex-col gap-y-0'>
              <p className='font-titillium text-xs sm:text-base'>{reward.name}</p>
              <span className='text-xs text-sky-500 font-bold hover:underline cursor-pointer'>[Show Content]</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

ContributionCharacterFormRequirements.propTypes = {
  form: PropTypes.object,
  defaultValues: PropTypes.object,
  name: PropTypes.string,
  baseData: PropTypes.object,
}
