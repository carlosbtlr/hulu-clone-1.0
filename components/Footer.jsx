import { useRouter } from 'next/router'

export default function Footer({ page }) {
  const router = useRouter()
  return (
    <footer className="mx-auto flex max-w-7xl justify-between p-5">
      {router.query.page > 1 && (
        <a
          onClick={(e) => {
            e.preventDefault()
            router.push(
              `?with_genres=${router.query.with_genres}${page}${
                Number(router.query.page) - 1
              }`
            )
          }}
          className="my-5 mx-auto w-32 max-w-7xl cursor-pointer items-center justify-between rounded border-2 border-gray-300 py-3 px-4 text-center transition-colors hover:border-white hover:text-white active:border-red-500 active:text-red-500"
        >
          Previous
        </a>
      )}
      <a
        onClick={(e) => {
          e.preventDefault()
          router.push(
            `?with_genres=${router.query.with_genres ?? 'top'}${page}${
              router.query.page ? Number(router.query.page) + 1 : 2
            }`
          )
        }}
        className="my-5 mx-auto w-32 max-w-7xl cursor-pointer items-center justify-between rounded border-2 border-gray-300 py-3 px-4 text-center transition-colors hover:border-white hover:text-white active:border-red-500 active:text-red-500"
      >
        Next
      </a>
    </footer>
  )
}
