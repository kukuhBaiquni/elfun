/* eslint-disable max-len */
import Link from 'next/link'
import { Fragment } from 'react'

export default function Welcome() {
  const elwiki = <a className='text-sky-500 hover:underline' href='https://elwiki.net' rel='noreferrer' target='_blank'>elwiki.net</a>
  const elswordGame = <a className='text-sky-500 hover:underline' href='https://elwiki.net/w/Elsword_(game)' rel='noreferrer' target='_blank'>Elsword</a>
  return (
    <Fragment>
      <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Welcome to Elfun</h2>
      <p className='my-2'>
        This website provide information about Elsword, if you don&apos;t know, see {elswordGame}
        . This website is made for personal use only.
        It contains information about in-game characters, towns, dungeons, titles, equipments, costumes, and many more.
        but not all information is available here. {elwiki} (multilingual database for the game {elswordGame}) has more than 18k articles, which is a very large number, here I created a website to collect few information related to Elsword.
      </p>
      <i>All rights are reserved (Official Art, Game Screenshots, etc.) to © KOG Studios, Nexon, Gameforge, and KOG Games (formerly known as Kill3rCombo)</i>
      <p className='mt-5'>
        Know anything about Elsword? Try
        <Link href='/contributor-mode'>
          <a className='text-sky-500 hover:underline'> Contributor Mode</a>
        </Link>
      </p>
    </Fragment>
  )
}
