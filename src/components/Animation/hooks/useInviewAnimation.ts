import { RefObject, useEffect } from 'react'
import { useAnimation, useInView } from 'framer-motion'

type UseInViewAnimationProps = {
  once?: boolean
  repeatDelay?: number
  ref: RefObject<any>
}

export const useInViewAnimation = ({
  once,
  repeatDelay,
  ref,
}: UseInViewAnimationProps) => {
  const controls = useAnimation()
  const isInView = useInView(ref, { amount: 0.5, once })

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const show = () => {
      controls.start('visible')
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden')
          controls.start('visible')
        }, repeatDelay)
      }
    }

    if (isInView) {
      show()
    } else {
      controls.start('hidden')
    }

    return () => clearTimeout(timeout)
  }, [controls, isInView, repeatDelay])

  return { controls }
}
