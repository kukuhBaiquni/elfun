import Image from 'next/image'
import elsword from '../../../public/images/card/elsword.png'
import aisha from '../../../public/images/card/aisha.png'
import rena from '../../../public/images/card/rena.png'
import raven from '../../../public/images/card/raven.png'
import eve from '../../../public/images/card/eve.png'
import chung from '../../../public/images/card/chung.png'
import ara from '../../../public/images/card/ara.png'
import elesis from '../../../public/images/card/elesis.png'
import add from '../../../public/images/card/add.png'
import lu from '../../../public/images/card/lu.png'
import ciel from '../../../public/images/card/ciel.png'
import rose from '../../../public/images/card/rose.png'
import ain from '../../../public/images/card/ain.png'
import laby from '../../../public/images/card/laby.png'
import noah from '../../../public/images/card/noah.png'

const images = [{
  src: elsword,
  color: 'elsword',
}, {
  src: aisha,
  color: 'aisha',
}, {
  src: rena,
  color: 'rena',
}, {
  src: raven,
  color: 'raven',
}, {
  src: eve,
  color: 'eve',
}, {
  src: chung,
  color: 'chung',
}, {
  src: ara,
  color: 'ara',
}, {
  src: elesis,
  color: 'elesis',
}, {
  src: add,
  color: 'add',
}, {
  src: lu,
  color: 'lucial',
}, {
  src: ciel,
  color: 'luciel',
}, {
  src: rose,
  color: 'rose',
}, {
  src: ain,
  color: 'ain',
}, {
  src: laby,
  color: 'laby',
}, {
  src: noah,
  color: 'noah',
}]

function Wallpaper() {
  return (
    <div className='flex items-center justify-center flex-wrap'>
      {images.map(({ src, color }, index) => (
        <Image
          alt='elsdug'
          // filter grayscale hover:filter-none
          className={`object-cover transition-all duration-300 bg-${color} flex-grow`}
          height={400}
          key={index}
          src={src}
          width={200}
        />
      ))}
    </div>
  )
}

export default Wallpaper
