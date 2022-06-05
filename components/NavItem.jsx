export default function NavItem({ Icon, title }) {
  return (
    <div className="group flex w-12 w-12 cursor-pointer flex-col items-center text-gray-200 hover:text-white sm:w-40">
      <Icon className="mb-1 h-6 group-hover:animate-bounce sm:h-8" />
      <p className="text-xs tracking-widest opacity-0 group-hover:opacity-100 sm:text-base">
        {title}
      </p>
    </div>
  )
}
