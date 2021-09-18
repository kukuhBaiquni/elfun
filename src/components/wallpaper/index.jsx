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
  color: 'bg-elsword',
}, {
  src: aisha,
  color: 'bg-aisha',
}, {
  src: rena,
  color: 'bg-rena',
}, {
  src: raven,
  color: 'bg-raven',
}, {
  src: eve,
  color: 'bg-eve',
}, {
  src: chung,
  color: 'bg-chung',
}, {
  src: ara,
  color: 'bg-ara',
}, {
  src: elesis,
  color: 'bg-elesis',
}, {
  src: add,
  color: 'bg-add',
}, {
  src: lu,
  color: 'bg-luciel',
}, {
  src: ciel,
  color: 'bg-luciel',
}, {
  src: rose,
  color: 'bg-rose',
}, {
  src: ain,
  color: 'bg-ain',
}, {
  src: laby,
  color: 'bg-laby',
}, {
  src: noah,
  color: 'bg-noah',
}]

function Wallpaper() {
  return (
    <div className='flex items-center justify-center flex-wrap'>
      {images.map(({ src, color }, index) => (
        <Image
          alt='elsdug'
          // filter grayscale hover:filter-none
          className={`object-cover transition-all duration-300 ${color} flex-grow`}
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
