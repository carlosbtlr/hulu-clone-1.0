import Image from 'next/image'
import { CalendarIcon, StarIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const base = 'https://image.tmdb.org/t/p/w500/'

export default function Main({ data }) {
  console.log(base + data.backdrop_path)
  const router = useRouter()
  return (
    <main className="my-5 mx-auto grid max-w-7xl justify-between p-4 sm:grid-cols-2">
      <div className="relative h-[400px] w-full sm:h-[750px] sm:w-[500px] mb-6">
        <Image
          alt="Poster Artwork"
          objectFit="cover"
          objectPosition="left top"
          layout="fill"
          src={base + data.poster_path.toString()}
        />
      </div>
      <div className="">
        <div className="flex h-10 items-center gap-4">
          <h2 className="mr-5 sm:text-xl font-semibold line-clamp-2">
            {data.title}
          </h2>
          <CalendarIcon className="-mr-2 h-3 sm:h-5" />
          <p className="text-xs sm:text-base font-semibold text-gray-400">
            {data.release_date?.slice(null, 4)}
          </p>
          <StarIcon className="-mr-2 h-3 sm:h-5" />
          <p className="text-xs sm:text-base font-semibold text-gray-400">
            {data.vote_average}
          </p>
          <div className="">
            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.imdb.com/title/${data.imdb_id}`}
            >
              <Image alt="IMDB Logo" src="/IMDB.svg" width="57" height="29" />
            </a>
          </div>
        </div>
        <div className="my-4 hidden sm:block relative h-[281px] w-[500px] sm:h-mb-6">
          <Image
            alt="Backdrop Artwork"
            objectFit="cover"
            objectPosition="left top"
            layout="fill"
            src={base + data.backdrop_path.toString()}
          />
        </div>
        <p className="my-4 text-sm sm:text-base text-gray-400">
          {data.overview}
        </p>
        <div className="mt-10">
          <a
            onClick={() => router.back()}
            className="my-5 mx-auto w-32 max-w-7xl cursor-pointer items-center justify-between rounded border-2 border-gray-300 py-3 px-4 text-center transition-colors hover:border-white hover:text-white active:border-red-500 active:text-red-500"
          >
            Go Back
          </a>
        </div>
      </div>
    </main>
  )
}
