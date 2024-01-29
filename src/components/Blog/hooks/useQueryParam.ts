import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useQueryParam = (param: string) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const paramValue = searchParams.get(param)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const pushRouteWithQuery = (name: string, value: string) => {
    router.push(`${pathname}?${createQueryString(name, value)}`, {
      scroll: false,
    })
  }

  return { router, searchParams, paramValue, pathname, pushRouteWithQuery }
}
