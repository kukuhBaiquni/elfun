import { CogIcon } from '@heroicons/react/solid'

export default function FormLoader() {
  return (
    <div className='text-general flex items-center border-input p-2 rounded justify-center'>
      <CogIcon className='animate-spin w-10 h-10 mr-2' />
      <h5 className='text-lg font-titillium'>Preparing Form</h5>
    </div>
  )
}
