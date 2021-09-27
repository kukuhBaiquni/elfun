import Image from 'next/image'
import OptimusCut from '../../../../public/images/example/optimus-skill-cut.png'

export default function CoverHeader() {
  return (
    <section className='max-w-screen-2xl h-[400px] bg-gradient-to-r from-transparent to-rose flex justify-end relative sm:p-3 mb-3 drop-shadow-lg'>
      <Image
        alt='Optimus Skin Cut'
        className='object-cover'
        quality={100}
        src={OptimusCut}
      />
      <div className='flex items-center absolute bottom-3 left-0 py-2 px-6 rounded-r-full bg-gray-900'>
        <h2 className='text-3xl text-rose font-titillium'>Optimus</h2>
      </div>
    </section>
  )
}
