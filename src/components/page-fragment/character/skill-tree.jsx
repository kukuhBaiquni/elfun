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
import gMastery from '../../../../public/images/example/skill/g-mastey.png'
import magneticField from '../../../../public/images/example/skill/magnetic-field.png'
import magneticGenerator from '../../../../public/images/example/skill/magnetic-generator.png'
import mechaGenerator from '../../../../public/images/example/skill/mecha-generator.png'
import mechaVolt from '../../../../public/images/example/skill/mecha-volt.png'
import raptor from '../../../../public/images/example/skill/raptor.png'
import rollingThunder from '../../../../public/images/example/skill/rolling-thunder.png'
import subMechRevolution from '../../../../public/images/example/skill/sub-mech-revolution.png'
import viper from '../../../../public/images/example/skill/viper.png'

export default function SkillTree() {
  return (
    <Fragment>
      <h6 className='dark:text-gray-300 text-gray-700 font-semibold text-2xl font-titillium mb-1'>Skill Tree</h6>
      <div className='grid grid-cols-12 mt-4'>
        <div className='bg-rose text-gray-600 p-3 text-center'>Level</div>
        <div>35</div>
        <div>45</div>
        <div>50</div>
        <div>55</div>
        <div>60</div>
        <div>65</div>
        <div className='row-span-5 text-center'>Transcendent</div>
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
        <div className='bg-red-300 text-gray-600 p-3 text-center'>Active</div>
        <div>35</div>
        <div>45</div>
        <div>50</div>
        <div>55</div>
        <div>60</div>
        <div>65</div>
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
        <div className='bg-red-300 text-gray-600 p-3 text-center'>Special Active</div>
        <div>35</div>
        <div>45</div>
        <div>50</div>
        <div>55</div>
        <div>60</div>
        <div>65</div>
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
        <div className='bg-red-300 text-gray-600 p-3 text-center'>Hyper Active</div>
        <div>35</div>
        <div>45</div>
        <div>50</div>
        <div>55</div>
        <div>60</div>
        <div>65</div>
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
        <div className='bg-red-300 text-gray-600 p-3 text-center'>Locked</div>
        <div>35</div>
        <div>45</div>
        <div>50</div>
        <div>55</div>
        <div>60</div>
        <div>65</div>
        <div>70</div>
        <div>80</div>
        <div>90</div>
        <div>95</div>
      </div>
    </Fragment>
  )
}
