import Image from 'next/image'
import { CalendarIcon, StarIcon } from '@heroicons/react/outline'
const base = 'https://image.tmdb.org/t/p/w500/'

export default function Main({ data }) {
  // console.log(data.results[0])
  return (
    <main className="my-5 mx-auto grid max-w-7xl justify-between gap-4 p-4 sm:grid-cols-4 ">
      {data.results.map((result) => (
        <div key={result.id} className="">
          <div className="relative h-[400px] w-full">
            <Image
              objectFit="cover"
              objectPosition="left top"
              layout="fill"
              src={base + result.poster_path.toString()}
            />
          </div>
          <div className="mt-3 flex h-10 items-center gap-4">
            <h2 className="flex-grow font-semibold line-clamp-2">
              {result.title}
            </h2>
            <CalendarIcon className="-mr-2 h-3" />
            <p className="text-xs font-semibold text-gray-400">
              {result.release_date?.slice(null, 4)}
            </p>
            <StarIcon className="-mr-2 h-3" />
            <p className="text-xs font-semibold text-gray-400">
              {result.vote_average}
            </p>
          </div>
          <p className="my-4 text-sm text-gray-400 line-clamp-3">
            {result.overview}
          </p>
        </div>
      ))}
    </main>
  )
}
