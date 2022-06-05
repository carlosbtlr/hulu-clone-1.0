import Header from '../components/Header'
import Main from '../components/Main'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import reqs from '../requests'

export default function Index({ data }) {
  return (
    <div className="text-gray-200">
      <Header />
      <Menu />
      <Main data={data} />
      <Footer page={reqs[0].page} />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const base = process.env.NEXT_PUBLIC_BASE
  const apiKey = process.env.API_KEY
  const buildURL = () => {
    let req = reqs.find((req) => {
      return req.query.slice(12) === query.with_genres
    })
    return req
      ? `${base + req.params}${
          query.with_genres !== 'top'
            ? `?${req.query}&api_key=${apiKey}&language=en-US&page=${query.page}`
            : `?api_key=${apiKey}&language=en-US&page=${query.page}`
        }`
      : `https://api.themoviedb.org/3/movie/top_rated?api_key=a7a4738061706b3d7edea6aa3d3372f0&language=en-US&page=${query.page}`
  }
  const req = await fetch(buildURL())
  const data = await req.json()
  return {
    props: { data },
  }
}
