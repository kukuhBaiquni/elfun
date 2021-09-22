import Link from 'next/link'

export default function News() {
  return (
    <div className='mt-10'>
      <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>News and Updates</h3>
      <div className='px-8 py-3.5 my-3 border dark:border-gray-600 dark:bg-gray-700 bg-gray-200 border-gray-300 transition-colors duration-300'>
        <ul className='list-disc'>
          <li className='mb-1'>Added Altera in Dungeon section by <b>Super Admin</b> at 06 December 2021</li>
          <li className='mb-1'>Added Velder in Dungeon section by <b>Super Admin</b> at 21 September 2021</li>
          <li className='mb-1'>Added Character Daybreaker by <b>Super Admin</b> at 12 August 2021</li>
          <li className='mb-1'>Added Ice Burner (Costome) Crescent Lulaby by <b>Super Admin</b> at 22 August 2021</li>
        </ul>
        <Link href='/news'>
          <a className='text-sky-500 hover:underline'>See More</a>
        </Link>
      </div>
    </div>
  )
}
