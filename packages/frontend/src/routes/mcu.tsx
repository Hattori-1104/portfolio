import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "#/components/common/layout"
import { MovieFlow } from "#/components/features/mcu/flow"

export const Route = createFileRoute("/mcu")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Layout canBack showStatus fileName="mcu.tsx">
			<div className="flex flex-col h-full text-gray-950">
				<div>test</div>
				<div className="border-2 border-gray-300 rounded-3xl shadow-md shadow-gray-200 grow overflow-hidden">
					<MovieFlow />
				</div>
			</div>
		</Layout>
	)
}
