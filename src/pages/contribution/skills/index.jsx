import Layout from 'layouts'
import Head from 'next/head'
import InputText from 'components/forms/input-text'
import Select from 'components/forms/select'
import Checkbox from 'components/forms/checkbox'

export default function Skills() {
  return (
    <div>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main>
        <section className='max-w-xl'>
          <InputText label='Add Skill Property' />
          <InputText />
          <Select />
          <Checkbox />
        </section>
      </main>
    </div>
  )
}

Skills.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
