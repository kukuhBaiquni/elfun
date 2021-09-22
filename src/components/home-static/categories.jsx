import { Fragment } from 'react'
import Image from 'next/image'
import elrianode from '../../../public/images/elrianode.png'

export default function Categories() {
  return (
    <section className='mt-6'>
      <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>Categories</h3>
      <p className='mt-2'>You can contribute to these following categories: </p>
      <div className='grid grid-cols-4 gap-3 mt-4 text-sm'>
        <div className='bg-gray-200 px-3 py-2'>
          <span className='text-lg font-titillium'>Characters</span>
          <ul className='list-disc px-5 mt-1'>
            <li>Add/Edit Character data (with permission)</li>
            <li>Add picture to gallery (with permission)</li>
            <li>Suggesting/Repairing broken link or image </li>
          </ul>
        </div>
        <div className='bg-gray-200 px-3 py-2'>
          <span className='text-lg font-titillium'>Towns</span>
          <ul className='list-disc px-5 mt-1'>
            <li>Add/Edit Town data (with permission)</li>
            <li>Add picture to gallery (with permission)</li>
            <li>Suggesting/Repairing broken link or image </li>
          </ul>
        </div>
        <div className='bg-gray-200 px-3 py-2'>
          <span className='text-lg font-titillium'>Dungeons</span>
          <ul className='list-disc px-5 mt-1'>
            <li>Add/Edit Dungeons data (with permission)</li>
            <li>Add picture to gallery (with permission)</li>
            <li>Suggesting/Repairing broken link or image </li>
          </ul>
        </div>
        <div className='bg-gray-200 px-3 py-2'>
          <span className='text-lg font-titillium'>Titles</span>
          <ul className='list-disc px-5 mt-1'>
            <li>Add/Edit Titles data (with permission)</li>
            <li>Suggesting/Repairing broken link or image </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
