import { Button } from "@base-ui/react/button"
import { useRouter } from "@tanstack/react-router"
import { ChevronLeftIcon } from "lucide-react"
import type { ReactNode } from "react"

export function Layout({
	children,
	canBack,
}: {
	children: ReactNode
	canBack?: boolean
}) {
	const router = useRouter()
	return (
		<div className="h-dvh flex flex-col bg-gray-50">
			<header className="h-16 shrink-0 w-full">
				<div className="h-full w-full max-w-5xl mx-auto px-8 flex items-center">
					{canBack && (
						<Button
							type="button"
							className="text-gray-400 group hover:bg-gray-200 hover:text-gray-700 transition-all duration-300 p-2 rounded-3xl relative"
							onClick={() => router.history.back()}
						>
							<ChevronLeftIcon />
						</Button>
					)}
				</div>
			</header>
			<div className="grow">
				<div className="h-full w-full max-w-5xl mx-auto p-8">{children}</div>
			</div>
		</div>
	)
}
