import { createFileRoute, Link } from "@tanstack/react-router"
import { Layout } from "#/components/layout"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
	return (
		<Layout>
			<div className="space-y-8">
				<div className="w-full flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
					<Link className="block group" to="/">
						<code className="text-4xl text-gray-950 font-bold">
							hattori-dev.com
						</code>
						<div className="h-1 bg-gray-950 min-w-0 w-0 relative left-0 group-hover:w-full transition-[width] duration-300 ease-out" />
					</Link>
					<code className="bg-green-500 text-white py-1 px-4 rounded-full">
						200 OK
					</code>
				</div>
				<Link to="/mcu">/mcu</Link>
			</div>
		</Layout>
	)
}
