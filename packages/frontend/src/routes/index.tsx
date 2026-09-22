import { createFileRoute, Link, useRouterState } from "@tanstack/react-router"
import { ConsoleWindow, consolePrefix } from "#/components/console-window"
import { Layout } from "#/components/layout"
import { StatusBadge } from "#/components/status-badge"
import { useDeferredLoadState } from "#/hooks/useDeferredLoadState"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
	const isLoading = useDeferredLoadState()
	return (
		<Layout fileName="index.tsx">
			<div className="space-y-8">
				<div className="w-full flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
					<Link className="block group" to="/">
						<code className="text-4xl text-gray-950 font-bold">
							hattori-dev.com
						</code>
						<div className="h-1 bg-gray-950 min-w-0 w-0 relative left-0 group-hover:w-full transition-[width] duration-300 ease-out" />
					</Link>
					<StatusBadge status={isLoading ? "pending" : 200} />
				</div>
				<ConsoleWindow windowMessage="Site Navigations">
					<code className="whitespace-nowrap">
						{`${consolePrefix}ls `}
						{/* なんか隠し要素 */}
						{/* <input className="w-8 text-start" /> */}
					</code>
					<br />
					<div className="flex flex-wrap gap-x-4 gap-y-1">
						<code className="text-3xl md:text-4xl text-blue-400 underline">
							<Link to="/">{"index.tsx"}</Link>
						</code>
						<code className="text-3xl md:text-4xl text-blue-400 underline">
							<Link to="/mcu">{"mcu.tsx"}</Link>
						</code>
						<code className="text-3xl md:text-4xl text-blue-400 underline">
							<Link to="/not-found">{"not-found.tsx"}</Link>
						</code>
					</div>
					<code>{`${consolePrefix}`}</code>
				</ConsoleWindow>
			</div>
		</Layout>
	)
}
