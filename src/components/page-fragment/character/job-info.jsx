/* eslint-disable max-len */
import { Fragment } from 'react'
import Image from 'next/image'
import optimusMecha from '../../../../public/images/example/optimus-mecha.png'

const background = 'Rose is not satisfied with her creation. Even though she\'s got the capabilities and mechanism down to a T, she felt her creations lacking the aesthetic department. She wanted to create a robot unmatched in power and beauty. In her search, Rose learned about the El Energy extractor used by the Nasods in Altera. This allowed her to remodel her equipment decreasing them in size and making them more visually appealing without compromising their capabilities. She now stands in the battlefield as the Goddess of Machines with refined robots and unstoppable power.'

export default function JobInfo() {
  return (
    <Fragment>
      <div className='border dark:border-gray-600 border-gray-300 flex-grow p-2'>
        <span className='text-rose text-lg'>Rose (Optimus): </span>
        <i className=''>The ecstasy you get when you design as much driving parts as you want, since design was considered a weakness as a weapon, was indescribable!</i>
      </div>
      <div className='mt-3'>
        <h6 className='dark:text-gray-300 text-gray-700 font-semibold text-2xl font-titillium mb-1'>Specialization</h6>
        <span className='text-sky-500 font-semibold'>[A genius meister that uses high-powered mechanics.]</span>
        <p>Suppresses enemies with her utilization of mechanics of
          unique technology. A genius of the battlefield.
        </p>
      </div>
      <div className='mt-3'>
        <h6 className='dark:text-gray-300 text-gray-700 font-semibold text-2xl font-titillium mb-1'>Background</h6>
        <p>{background}</p>
      </div>
      <div className='mt-3'>
        <h6 className='dark:text-gray-300 text-gray-700 font-semibold text-2xl font-titillium mb-1'>Second Class Advancement</h6>
        <p>
          Upon reaching Lv. 35, Metal Heart can advance into <strong>Optimus</strong>. To receive the 2nd job quest, click on the job change notification located below the map select.
        </p>
        <p>Completing the following advancement quest or using the Item Mall item: Optimus Mecha will change your job to Optimus.</p>
        <div className='border dark:border-gray-600 border-gray-300 p-1 pr-2 mt-2 max-w-max flex items-center'>
          <Image alt='Mecha' height={30} src={optimusMecha} width={30} />
          <p className='ml-2'>Item Mall: Optimus Mecha</p>
        </div>
      </div>
    </Fragment>
  )
}
