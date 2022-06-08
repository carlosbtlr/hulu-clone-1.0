import Header from '../components/Header'
import Detail from '../components/Detail'
import Menu from '../components/Menu'
import DetailFooter from '../components/DetailFooter'

export default function detail({ data }) {
  return (
    <div className="text-gray-200">
      <Header />
      <Menu />
      <Detail data={data} />
      <DetailFooter />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const base = process.env.NEXT_PUBLIC_BASE
  const apiKey = process.env.API_KEY
  const req = await fetch(
    `${base}/movie/${query.detail}?api_key=${apiKey}&language=en-US`
  )
  const data = await req.json()
  return {
    props: { data },
  }
}
