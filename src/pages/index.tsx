import { GetStaticProps } from 'next'
import { getClient, wrapComponent } from '../lib/urql'
import { ProductListDocument } from '../types/shopify'

import ProductList from '../components/product-list/product-list'

const Home: React.FC = () => {
  return <div className="flex items-center justify-center h-full w-full">
    <div>Text content in index.tsx</div>
  </div>
}

export const getStaticProps: GetStaticProps = async () => {
  const { client, ssrCache } = getClient()
  await client.query(ProductListDocument).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData()
    },
    revalidate: 600
  }
}

export default wrapComponent(Home)

