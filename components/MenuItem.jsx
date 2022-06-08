import { useRouter } from 'next/router'
import Link from 'next/link'
export default function MenuItem({ query, category }) {
  const router = useRouter()
  return (
    <Link href={`/?${query}`}>
      <a className="cursor-pointer transition-colors hover:text-white active:text-red-500">
        {category}
      </a>
    </Link>
  )
}
