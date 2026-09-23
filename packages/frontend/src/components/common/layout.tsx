import { Button } from "@base-ui/react/button"
import { useRouter } from "@tanstack/react-router"
import { FileIcon } from "lucide-react"
import type { ReactNode } from "react"
import { useDeferredLoadState } from "#/hooks/useDeferredLoadState"
import { StatusBadge } from "./status-badge"

export function Layout({
	children,
	canBack,
	fileName,
	showStatus,
	notfound,
}: {
	children: ReactNode
	canBack?: boolean
	fileName?: string
	showStatus?: boolean
	notfound?: boolean
}) {
	const router = useRouter()
	const isLoading = useDeferredLoadState()
	return (
		<div className="h-dvh flex flex-col bg-gray-50">
			<header className="h-16 shrink-0 w-full">
				<div className="h-full w-full max-w-5xl mx-auto px-8 grid grid-cols-3 items-center">
					<div className="flex justify-start">
						{canBack && (
							<Button
								type="button"
								className="text-gray-400 group hover:bg-gray-200 hover:text-gray-700 transition-all duration-300 py-2 px-4 rounded-3xl relative"
								onClick={() => router.history.back()}
							>
								<code>../</code>
							</Button>
						)}
					</div>
					<div className="flex justify-center">
						{showStatus && (
							<StatusBadge
								size="small"
								status={notfound ? 404 : isLoading ? "pending" : 200}
							/>
						)}
					</div>
					<div className="flex justify-end">
						{fileName && (
							<code className="text-gray-400 flex items-center gap-2">
								<FileIcon size="16" />
								{fileName}
							</code>
						)}
					</div>
				</div>
			</header>
			<div className="grow">
				<div className="h-full w-full max-w-5xl mx-auto p-8">{children}</div>
			</div>
		</div>
	)
}
