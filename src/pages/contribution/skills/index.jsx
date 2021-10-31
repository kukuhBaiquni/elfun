import Layout from 'layouts'
import Head from 'next/head'

import TableComposer from 'components/forms/table-composer'

export default function Skills() {
  console.log('📝', watch())
  return (
    <div>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main className='px-2' />
    </div>
  )
}

Skills.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
