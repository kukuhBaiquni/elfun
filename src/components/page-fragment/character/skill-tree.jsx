/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import Image from 'next/image'
import ancientBuster from '../../../../public/images/example/skill/ancient-buster.png'
import armoredTempest from '../../../../public/images/example/skill/armored-tempest.png'
import awakenedOne from '../../../../public/images/example/skill/awakened-one.png'
import awakenedWillOpt from '../../../../public/images/example/skill/awakened-will-opt.png'
import battleRoid from '../../../../public/images/example/skill/battle-roid.png'
import corona from '../../../../public/images/example/skill/corona.png'
import focusedStrike from '../../../../public/images/example/skill/focused-strike.png'
import frisbee from '../../../../public/images/example/skill/frisbee.png'
import gExtension from '../../../../public/images/example/skill/g-extension.png'
import gMastery from '../../../../public/images/example/skill/g-mastery.png'
import magneticGuard from '../../../../public/images/example/skill/magnetic-guard.png'
import magneticGenerator from '../../../../public/images/example/skill/magnetic-generator.png'
import mechaGenerator from '../../../../public/images/example/skill/mecha-generator.png'
import mechaVolt from '../../../../public/images/example/skill/mecha-volt.png'
import raptor from '../../../../public/images/example/skill/raptor.png'
import rollingThunder from '../../../../public/images/example/skill/rolling-thunder.png'
import subMechRevolution from '../../../../public/images/example/skill/sub-mech-revolution.png'
import viper from '../../../../public/images/example/skill/viper.png'
import skillLock from '../../../../public/images/skill-lock.png'

export default function SkillTree() {
  return (
    <Fragment>
      <h6 className='dark:text-gray-300 text-gray-700 font-semibold text-2xl font-titillium mb-1'>Skill Tree</h6>
      <div className='grid grid-cols-12 mt-4'>
        <div className='bg-gray-600' />
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 35</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 45</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 50</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 55</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 60</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 65</div>
        <div className='row-span-6 flex items-center justify-center bg-gray-600'>Transcendent</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 70</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 80</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 90</div>
        <div className='flex items-center justify-center p-3 bg-gray-600 text-center'>Level 95</div>
        <div className='bg-cyan-300 text-gray-600 p-3 flex items-center justify-center'>Passive</div>
        <div className='p-3 flex items-center justify-center'>
          <Image alt='G-Extension' height={54} src={gExtension} width={54} />
        </div>
        <div />
        <div />
        <div />
        <div className='p-3 flex items-center justify-center'>
          <Image alt='Mecha Generator' height={54} src={mechaGenerator} width={54} />
        </div>
        <div />
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
        <div className='bg-red-300 text-gray-600 p-3 flex items-center justify-center'>Active</div>
        <div className='p-3 flex items-center justify-center'>
          <Image alt='Magnetic Guard' height={54} src={magneticGuard} width={54} />
        </div>
        <div />
        <div className='p-3 flex items-center justify-center'>
          <Image alt='G-3 Raptor' height={54} src={raptor} width={54} />
        </div>
        <div />
        <div />
        <div />
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
        <div className='bg-orange-300 text-gray-600 p-3 flex items-center justify-center text-center'>Special Active</div>
        <div className='p-3 flex items-center justify-center'>
          <Image alt='Battle Roid' height={54} src={battleRoid} width={54} />
        </div>
        <div className='p-3 flex items-center justify-center'>
          <Image alt='G-1 Corona' height={54} src={corona} width={54} />
        </div>
        <div className='p-3 flex items-center justify-center'>
          <Image alt='G-2 Rolling Thunder' height={54} src={rollingThunder} width={54} />
        </div>
        <div className='p-3 flex items-center justify-center'>
          <Image alt='Magnetic Generator' height={54} src={magneticGenerator} width={54} />
        </div>
        <div />
        <div />
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
        <div className='bg-sky-300 text-gray-600 p-3 flex items-center justify-center'>Hyper Active</div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div className='p-3 flex items-center justify-center'>
          <div className='relative flex'>
            <div className='absolute top-0 z-10 hover:hidden flex items-center justify-center'>
              <Image alt='G-4 Frisbee' height={54} src={skillLock} width={54} />
            </div>
            <Image alt='Mecha Volt MX' height={54} src={mechaVolt} width={54} />
          </div>
        </div>
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
        <div className='bg-green-300 text-gray-600 p-3 flex items-center justify-center'>Locked</div>
        <div />
        <div className='p-3 flex items-center justify-center'>
          <div className='relative flex'>
            <div className='absolute top-0 z-10 hover:hidden flex items-center justify-center'>
              <Image alt='G-4 Frisbee' height={54} src={skillLock} width={54} />
            </div>
            <Image alt='G-4 Frisbee' height={54} src={frisbee} width={54} />
          </div>
        </div>
        <div />
        <div />
        <div className='p-3 flex items-center justify-center'>
          <div className='relative flex'>
            <div className='absolute top-0 z-10 hover:hidden flex items-center justify-center'>
              <Image alt='G-4 Frisbee' height={54} src={skillLock} width={54} />
            </div>
            <Image alt='G-Mastery' height={54} src={gMastery} width={54} />
          </div>
        </div>
        <div />
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
      </div>
    </Fragment>
  )
}
