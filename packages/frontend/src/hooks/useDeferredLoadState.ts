import { useRouterState } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"

// ms
const DELAY = 200

export function useDeferredLoadState() {
	const isLoading = useRouterState({ select: (s) => s.isLoading })
	const [isLoadingDeferred, setIsLoadingDeferred] = useState(false)
	const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)
	useEffect(() => {
		if (isLoading) {
			timeoutRef.current = setTimeout(() => {
				if (isLoading) {
					setIsLoadingDeferred(true)
				}
			}, DELAY)
		}
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current)
		}
	}, [isLoading])

	return isLoadingDeferred
}
