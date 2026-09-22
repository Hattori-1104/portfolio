import { createFileRoute } from "@tanstack/react-router"
import { Background, Controls, type Node, ReactFlow } from "@xyflow/react"
import { Layout } from "#/components/layout"
import "@xyflow/react/dist/style.css"

export const Route = createFileRoute("/mcu")({
	component: RouteComponent,
})

const nodes: Node[] = [
	{ id: "1", data: { label: "Node 1" }, position: { x: 0, y: 0 } },
]

function RouteComponent() {
	return (
		<Layout canBack showStatus fileName="mcu.tsx">
			<div className="flex flex-col h-full text-gray-950">
				<div>test</div>
				<div className="border-2 border-gray-300 rounded-3xl shadow-md shadow-gray-200 grow overflow-hidden">
					<ReactFlow nodes={nodes} fitView className="nodrag">
						<Background />
						<Controls />
					</ReactFlow>
				</div>
			</div>
		</Layout>
	)
}
