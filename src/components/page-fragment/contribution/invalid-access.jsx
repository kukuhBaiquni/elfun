import { useRouter } from 'next/router'
import Button from 'components/common/button'

export default function InvalidAccess() {
  const { back } = useRouter()
  return (
    <div className='text-center flex items-center justify-center flex-col font-titillium text-red-500'>
      <h4 className='text-3xl font-bold'>Invalid Access!</h4>
      <p className='text-general mb-3'>You visit the right page, but missing requirement to continue.</p>
      <Button
        label='Go to Previous Page'
        onClick={() => back()}
      />
    </div>
  )
}
