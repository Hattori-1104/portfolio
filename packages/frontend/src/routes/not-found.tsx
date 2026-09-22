import { createFileRoute, Link } from "@tanstack/react-router"
import { Layout } from "#/components/layout"

export const Route = createFileRoute("/not-found")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Layout>
			<div className="h-full flex flex-col">
				<div className="shrink-0 w-full flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
					<Link className="block group" to="/">
						<code className="text-4xl text-gray-950 font-bold">
							hattori-dev.com
						</code>
						<div className="h-1 bg-gray-950 min-w-0 w-0 relative left-0 group-hover:w-full transition-[width] duration-300 ease-out" />
					</Link>
					<code className="bg-red-500 text-white py-1 px-4 rounded-full">
						404 NotFound
					</code>
				</div>
				<div className="w-full grow flex flex-col gap-4 items-center justify-center">
					<div className="text-6xl">😢</div>
					<div className="text-gray-500 italic text-2xl">
						どこに行きたかったの？
					</div>
				</div>
			</div>
		</Layout>
	)
}
