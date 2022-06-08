import { useRouter } from 'next/router'

export default function DetailFooter({ page }) {
  const router = useRouter()
  return (
    <footer className="mx-auto flex max-w-7xl justify-between p-5"></footer>
  )
}
