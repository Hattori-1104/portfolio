import type { ReactNode } from "react"

export const consolePrefix = "[dear-visitor@hattori-dev ~]$ "

export function ConsoleWindow({
	children,
	windowMessage,
}: {
	children: ReactNode
	windowMessage?: string
}) {
	const windowName = windowMessage ? `bash - ${windowMessage}` : "bash"
	return (
		<div className="flex flex-col border shadow overflow-x-auto relative">
			<div className="bg-white w-full px-2 py-1 sticky left-0">
				{windowName}
			</div>
			<div className="bg-black min-w-100 w-full text-white p-2">{children}</div>
		</div>
	)
}
