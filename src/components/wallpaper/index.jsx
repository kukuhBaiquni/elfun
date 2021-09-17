import Image from 'next/image'
import elsdug from '../../../public/images/card/elsdug.png'

function Wallpaper() {
  return (
    <div>
      <Image
        alt='elsdug'
        className='object-cover'
        height={300}
        src={elsdug}
        width={150}
      />
    </div>
  )
}

export default Wallpaper
