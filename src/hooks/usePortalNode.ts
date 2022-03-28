import { useEffect, useRef } from 'react'

const usePortalNode = (divId: `${string}-portal`) => {
  const portalNode = useRef<HTMLElement | null>(null)
  useEffect(() => {
    let div: HTMLDivElement

    if (document && document.getElementById(divId)) {
      portalNode.current = document.getElementById(divId)
    } else {
      div = document.createElement('div')
      div.id = divId
      document.body.appendChild(div)
      portalNode.current = div
    }
  }, [])

  return portalNode
}

export { usePortalNode }
