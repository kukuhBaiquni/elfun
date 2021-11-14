import Link from 'next/link'
import Image from 'next/image'
import CONTRIBUTION from 'constant/contribution'

export default function RightNavigation() {
  return (
    <nav className='font-titillium mr-0 sm:ml-3 hidden xl:block'>
      <ul className='py-2 px-2 bg-paper-general max-h-full w-52 transition-general mb-3'>
        <div className='relative z-20'>
          <h6 className='text-sky-500 font-bold text-lg mb-1'>
            Contributions
          </h6>
          {CONTRIBUTION.map((item) => (
            <Link href={item.path} key={item.path}>
              <a>
                <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white text-general gap-1 flex items-center'>
                  <Image
                    alt={item.name}
                    height={25}
                    src={item.img}
                    width={25}
                  />
                  {item.name}
                </li>
              </a>
            </Link>
          ))}
          <h6 className='text-sky-500 font-bold text-lg mt-1'>
            General Guide
          </h6>
          <Link href='/contribution/guide'>
            <a>
              <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white text-general'>
                Contribution
              </li>
            </a>
          </Link>
        </div>
      </ul>
    </nav>
  )
}
