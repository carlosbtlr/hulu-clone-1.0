import MenuItem from './MenuItem'
import reqs from '../requests'

export default function Menu() {
  return (
    <div className="relative">
      <nav className="mx-auto flex gap-10 overflow-x-scroll whitespace-nowrap px-5 font-semibold scrollbar-hide sm:max-w-7xl sm:gap-16 sm:px-10">
        {reqs.map((req) => {
          return (
            <MenuItem
              key={req.category}
              category={req.category}
              query={req.query}
            />
          )
        })}
      </nav>
      <div className="absolute right-0 top-0 h-10 w-5 bg-gradient-to-l from-[#06202a]"></div>
    </div>
  )
}
