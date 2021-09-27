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
    <div className='font-titillium'>
      <h6 className='dark:text-gray-300 text-gray-700 font-semibold text-2xl mb-1'>Skill Tree</h6>
      <div className='grid grid-cols-6 mt-4 lg:max-w-lg'>
        <div className='p-3 bg-gray-600 text-center'>Level</div>
        <div className='p-3 col-span-3 bg-gray-700 text-center'>Skills</div>
        <div className='p-3 bg-gray-800 text-center'>Passives</div>
        <div className='p-3 bg-gray-900 text-center'>Locked</div>
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>35</div>
        <div className='p-3 flex bg-gray-700 items-center justify-center'>
          <Image alt='Magnetic Guard' height={54} src={magneticGuard} width={54} />
        </div>
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='Battle Roid' height={54} src={battleRoid} width={54} />
        </div>
        <div />
        <div className='p-3 bg-gray-800 flex items-center justify-center'>
          <Image alt='G-Extension' height={54} src={gExtension} width={54} />
        </div>
        <div />
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>45</div>
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='G-1 Corona' height={54} src={corona} width={54} />
        </div>
        <div />
        <div />
        <div className='p-3 bg-gray-900 flex items-center justify-center'>
          <div className='relative flex'>
            <div className='absolute top-0 z-10 hover:hidden flex items-center justify-center'>
              <Image alt='G-4 Frisbee' height={54} src={skillLock} width={54} />
            </div>
            <Image alt='G-4 Frisbee' height={54} src={frisbee} width={54} />
          </div>
        </div>
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>50</div>
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='G-3 Raptor' height={54} src={raptor} width={54} />
        </div>
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='G-2 Rolling Thunder' height={54} src={rollingThunder} width={54} />
        </div>
        <div />
        <div />
        <div />
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>55</div>
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='Magnetic Generator' height={54} src={magneticGenerator} width={54} />
        </div>
        <div />
        <div />
        <div />
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>60</div>
        <div />
        <div />
        <div />
        <div className='p-3 bg-gray-800 flex items-center justify-center'>
          <Image alt='Mecha Generator' height={54} src={mechaGenerator} width={54} />
        </div>
        <div className='p-3 bg-gray-900 flex items-center justify-center'>
          <div className='relative flex'>
            <div className='absolute top-0 z-10 hover:hidden flex items-center justify-center'>
              <Image alt='G-4 Frisbee' height={54} src={skillLock} width={54} />
            </div>
            <Image alt='G-Mastery' height={54} src={gMastery} width={54} />
          </div>
        </div>
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>65</div>
        <div />
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <div className='relative flex'>
            <div className='absolute top-0 z-10 hover:hidden flex items-center justify-center'>
              <Image alt='G-4 Frisbee' height={54} src={skillLock} width={54} />
            </div>
            <Image alt='Mecha Volt MX' height={54} src={mechaVolt} width={54} />
          </div>
        </div>
        <div />
        <div />
        <div className='col-span-6 p-6 flex items-center justify-center bg-rose text-gray-600'>Transcendent</div>
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>70</div>
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='EX-C Viper' height={54} src={viper} width={54} />
        </div>
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='Awakened Will: Optimus' height={54} src={awakenedWillOpt} width={54} />
        </div>
        <div />
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>80</div>
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='Focused Strike!' height={54} src={focusedStrike} width={54} />
        </div>
        <div />
        <div />
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <div className='relative flex'>
            <div className='absolute top-0 z-10 hover:hidden flex items-center justify-center'>
              <Image alt='G-4 Frisbee' height={54} src={skillLock} width={54} />
            </div>
            <Image alt='Awakened One' height={54} src={awakenedOne} width={54} />
          </div>
        </div>
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>90</div>
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='Ancient Buster' height={54} src={ancientBuster} width={54} />
        </div>
        <div />
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <div className='relative flex'>
            <div className='absolute top-0 z-10 hover:hidden flex items-center justify-center'>
              <Image alt='G-4 Frisbee' height={54} src={skillLock} width={54} />
            </div>
            <Image alt='Sub Mech Revolution' height={54} src={subMechRevolution} width={54} />
          </div>
        </div>
        <div className='flex items-center justify-center p-3 bg-gray-700 text-center text-lg'>95</div>
        <div />
        <div className='p-3 bg-gray-700 flex items-center justify-center'>
          <Image alt='Ancient Buster' height={54} src={armoredTempest} width={54} />
        </div>
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
