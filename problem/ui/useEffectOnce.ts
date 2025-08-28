import { useEffect, useRef, type EffectCallback } from "react"

export function useEffectOnce(effect: EffectCallback): void {
	const ref = useRef<{ first: boolean; clean: ReturnType<EffectCallback> | undefined }>({
		first: true, 
		clean: undefined,
	})

	useEffect(() => {
		if (ref.current.first) {
			ref.current.first = false
			ref.current.clean = effect()
		}

		return ref.current.clean
	}, [])
}