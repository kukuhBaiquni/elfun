import Image from 'next/image'
import { Fragment, useState } from 'react'
import optimus from '../../../../public/images/example/optimus.png'
import optimusTrans from '../../../../public/images/example/optimus-trans.png'

export default function Portrait() {
  const [tab, setTab] = useState(0)
  return (
    <Fragment>
      <div className='w-full lg:w-[510px] sm:h-[600px] p-3 border flex items-center justify-center dark:border-gray-600 border-gray-300'>
        <Image alt='optimus' className='object-contain' height={530} quality={100} src={tab ? optimusTrans : optimus} width={540} />
      </div>
      <div className='flex justify-center mt-auto'>
        <button className='bg-rose text-gray-600 py-1 px-3' type='button' onClick={() => setTab(0)}>2nd Job</button>
        <button className='text-rose py-1 px-3 border border-rose' type='button' onClick={() => setTab(1)}>Transcendent</button>
      </div>
    </Fragment>
  )
}
