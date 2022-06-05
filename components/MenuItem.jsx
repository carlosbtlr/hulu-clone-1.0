import { useRouter } from 'next/router'
export default function MenuItem({ query, category }) {
  const router = useRouter()
  return (
    <a
      href={`?${query}`}
      className="cursor-pointer transition-colors hover:text-white active:text-red-500"
    >
      {category}
    </a>
  )
}
