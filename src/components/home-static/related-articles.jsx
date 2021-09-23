import Link from 'next/link'
import Image from 'next/image'
import elswordWorld from '../../../public/images/articles/elsword-world.jpg'
import npc from '../../../public/images/articles/npc.jpg'
import story from '../../../public/images/articles/story.jpg'
import itemMall from '../../../public/images/articles/item-mall.jpg'

const articles = [{
  title: 'Elsword World',
  img: elswordWorld,
  path: '/related-articles/elsword-world',
}, {
  title: 'Non Playable Character (NPC)',
  img: npc,
  path: '/related-articles/npc',
}, {
  title: 'Item Mall & Ice Burner',
  img: itemMall,
  path: '/related-articles/item-mall',
}, {
  title: 'Story',
  img: story,
  path: '/related-articles/story',
}]

export default function RelatedArticles() {
  return (
    <div className='mt-10'>
      <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>Related Articles</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4'>
        {articles.map((item) => (
          <div className='relative group p-2 h-[200px]' key={item.title}>
            <div className='w-full h-full bg-black absolute z-10 top-0 left-0 opacity-0 group-hover:opacity-90 transition-all duration-300' />
            <Image
              alt='Elsword World'
              className='object-cover w-full h-full'
              layout='fill'
              src={item.img}
            />
            <div className='mx-auto flex items-center justify-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-30%] opacity-0 group-hover:translate-y-[-55%] group-hover:opacity-100 z-20 transition-all duration-300'>
              <h6 className='text-lg text-white text-center whitespace-nowrap'>{item.title}</h6>
              <Link href={item.path}>
                <a className='text-sky-500 hover:underline'>
                  read now
                </a>
              </Link>
            </div>
          </div>
        ))}
        <Link href='/news'>
          <a className='text-sky-500 hover:underline'>See More</a>
        </Link>
      </div>
    </div>
  )
}
