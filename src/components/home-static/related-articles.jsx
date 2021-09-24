import Link from 'next/link'
import Image from 'next/image'
import loader from 'components/loader'

const articles = [{
  title: 'Elsword World',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Farticle%2Felsword-world.jpg?alt=media&token=b1020221-4b36-4fe1-a937-314586d8f6a3',
  path: '/related-articles/elsword-world',
}, {
  title: 'Non Playable Character (NPC)',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Farticle%2Fnpc.jpg?alt=media&token=e82c9e7c-18c3-443e-85e8-4fddc8622f82',
  path: '/related-articles/npc',
}, {
  title: 'Item Mall & Ice Burner',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Farticle%2Fitem-mall.jpg?alt=media&token=a5ab4a67-64ac-43fb-a1d3-a0d74bd6df02',
  path: '/related-articles/item-mall',
}, {
  title: 'Story',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Farticle%2Fstory.jpg?alt=media&token=73c48d9a-8ce5-4885-902e-131a5b647c18',
  path: '/related-articles/story',
}]

export default function RelatedArticles() {
  return (
    <div className='mt-8'>
      <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>Related Articles</h3>
      <p className='mt-2'>
        You can read these articles to get more details information
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4'>
        {articles.map((item) => (
          <div className='relative group p-2 h-[200px]' key={item.title}>
            <div className='w-full h-full bg-black absolute z-10 top-0 left-0 opacity-0 group-hover:opacity-90 transition-all duration-300' />
            <Image
              alt='Elsword World'
              blurDataURL={loader('100%', '100%')}
              className='object-cover w-full h-full'
              layout='fill'
              placeholder='blur'
              src={item.img}
            />
            <div className='mx-auto flex items-center justify-center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[-30%] opacity-0 group-hover:translate-y-[-55%] group-hover:opacity-100 z-10 transition-all duration-300'>
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
