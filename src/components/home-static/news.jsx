import Link from 'next/link'

export default function News() {
  return (
    <div className='mt-6 border dark:border-gray-600 dark:bg-gray-700 bg-gray-200 px-4 py-3 border-gray-300 transition-colors duration-300'>
      <h3 className='text-xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>News</h3>
      <ul className='px-5 pt-2 mb-2'>
        <li className='list-disc'>Added Altera in Dungeon section by <b>Super Admin</b> at 06 December 2021</li>
        <li className='list-disc'>Added Velder in Dungeon section by <b>Super Admin</b> at 21 September 2021</li>
        <li className='list-disc'>Added Character Daybreaker by <b>Super Admin</b> at 12 August 2021</li>
        <li className='list-disc'>Added Ice Burner (Costome) Crescent Lulaby by <b>Super Admin</b> at 22 August 2021</li>
      </ul>
      <Link href='/news'>
        <a className='text-sky-500 hover:underline'>See More</a>
      </Link>
    </div>
  )
}
